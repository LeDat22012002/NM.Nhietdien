using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using Azure;


[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly NmNhietDienContext _context;
    private readonly IConfiguration _config;
    private readonly PasswordHasher<string> _hasher = new();

    public AuthController(NmNhietDienContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }
    
    [HttpPost("register")]
    
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        if (await _context.Accounts.AnyAsync(u => u.MaNv == request.Manv))
        {
            var resfald = new ApiResponse<string>
            {
                Status = false,
                Message = "Tài khoản đã tồn tại !",
                Data = null,
            };

            return Ok(resfald);
        }


        var hashedPassword = _hasher.HashPassword(request.Manv, request.Password);
        var account = new Account
        {
            MaNv = request.Manv,
            Password = hashedPassword,
            Role = request.Role,
            UserName = request.UserName,
            ChucVu = request.ChucVu,
        };

        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();
        var response = new ApiResponse<string>
        {
            Status = true,
            Message = "Tạo tài khoản thành công !",
            Data = null,
        };

        return Ok(response);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var account = await _context.Accounts.FirstOrDefaultAsync(u => u.MaNv == request.Manv);
        if (account == null)
            return Unauthorized("Tài khoản không tồn tại");

        var result = _hasher.VerifyHashedPassword(request.Manv, account.Password, request.Password);
        if (result != PasswordVerificationResult.Success)
            return Unauthorized("Mật khẩu không chính xác ");

        var accessToken = JwtHelper.GenerateToken(account.MaNv, account.Role,
            _config["Jwt:Key"]!, _config["Jwt:Issuer"]!);

        var refreshToken = JwtHelper.GenerateRefreshToken();
        account.RefreshToken = refreshToken;
        account.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7);
        await _context.SaveChangesAsync();

        var response = new ApiResponse<AuthResponse>
        {
            Status = true,
            Message = "Đăng nhập thành công !",
            Data = new AuthResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                MaNv = account.MaNv,
                Role = account.Role,
                UserName = account.UserName,
                ChucVu = account.ChucVu,
            }
        };

        return Ok(response);
    }
    [HttpPost("logout")]
    public async Task<IActionResult> Logout([FromBody] string refreshToken)
    {
        var user = await _context.Accounts.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        if (user == null)
            return NotFound(new { message = "Không tìm thấy người dùng." });

        // Xoá refresh token hoặc đặt null
        user.RefreshToken = null;
        user.RefreshTokenExpiryTime = null;

        await _context.SaveChangesAsync();
        var response = new ApiResponse<string>
        {
            Status = true,
            Message = "Đăng xuất thành công !",
            Data = null,
        };

        return Ok(response);
    }
    [HttpPost("refresh-token")]
    public async Task<IActionResult> Refresh([FromBody] string token)
    {
        var account = await _context.Accounts.FirstOrDefaultAsync(u => u.RefreshToken == token);
        if (account == null || account.RefreshTokenExpiryTime < DateTime.UtcNow)
        {
             return Unauthorized(new ApiResponse<string>
            {
                Status = false,
                Message = "Vui lòng đăng nhập lại ",
                Data = null
            });
        }
           

        var accessToken = JwtHelper.GenerateToken(account.MaNv, account.Role,
            _config["Jwt:Key"]!, _config["Jwt:Issuer"]!);

        return Ok(new AuthResponse
        {
            AccessToken = accessToken,
            RefreshToken = token
        });
    }
}
