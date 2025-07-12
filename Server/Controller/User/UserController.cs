using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using Server.Models;
using Azure;
using Server.Helpers;


[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly NMCD2Context _context;
    private readonly IConfiguration _config;
    private readonly PasswordHasher<string> _hasher = new();

    public UserController(NMCD2Context context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    // [HttpPost("register")]

    // public async Task<IActionResult> Register(RegisterRequest request)
    // {
    //     if (await _context.Accounts.AnyAsync(u => u.MaNv == request.Manv))
    //     {
    //         var resfald = new ApiResponse<string>
    //         {
    //             Status = false,
    //             Message = "Tài khoản đã tồn tại !",
    //             Data = null,
    //         };

    //         return Ok(resfald);
    //     }


    //     var hashedPassword = _hasher.HashPassword(request.Manv, request.Password);
    //     var account = new Account
    //     {
    //         MaNv = request.Manv,
    //         Password = hashedPassword,
    //         Role = request.Role,
    //         UserName = request.UserName,
    //         ChucVu = request.ChucVu,
    //     };

    //     _context.Accounts.Add(account);
    //     await _context.SaveChangesAsync();
    //     var response = new ApiResponse<string>
    //     {
    //         Status = true,
    //         Message = "Tạo tài khoản thành công !",
    //         Data = null,
    //     };

    //     return Ok(response);
    // }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        string mk = Encryptor.MD5Hash(request.Password);
        var account = await _context.NguoiDungs.Include(x => x.NhanVien)
                    .FirstOrDefaultAsync(x =>
                        x.TenDangNhap == request.Manv &&
                        x.MatKhau == mk &&
                        x.IsLock == 0);
        if (account == null)
            return Unauthorized("Tài khoản không tồn tại");

        int role = account.Idquyen ?? 0;

        var accessToken = JwtHelper.GenerateToken(
            account.TenDangNhap ?? "",
            role,
            _config["Jwt:Key"]!,
            _config["Jwt:Issuer"]!
        );

        var refreshToken = JwtHelper.GenerateRefreshToken();
        account.RefreshToken = refreshToken;
        // account.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7);
        await _context.SaveChangesAsync();

        var response = new ApiResponse<LoginReponse>
        {
            Status = true,
            Message = "Đăng nhập thành công!",
            Data = new LoginReponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                MaNv = account?.TenDangNhap,
                Role = role,
                HoTen = account?.NhanVien?.HoTen
            }
        };

        return Ok(response);
    }
    [HttpPost("logout")]
    public async Task<IActionResult> Logout([FromBody] LogoutRequest request)
    {
        var user = await _context.NguoiDungs.FirstOrDefaultAsync(u => u.RefreshToken == request.RefreshToken);
        if (user == null)
            return NotFound(new { message = "Không tìm thấy người dùng." });

        user.RefreshToken = null;
        await _context.SaveChangesAsync();

        return Ok(new ApiResponse<string>
        {
            Status = true,
            Message = "Đăng xuất thành công!",
            Data = null,
        });
    }
    // 
    [HttpGet("allusers")]
public async Task<IActionResult> GetAllUsers()
{
    var res = await (
    from a in _context.NguoiDungs
    join nv in _context.NhanViens on a.NhanVienId equals nv.Id
    join q in _context.Quyens on a.Idquyen equals q.Idquyen
    join pb in _context.PhongBans on nv.IdphongBan equals pb.IdphongBan
    select new AccountValidation
    {
        IDNguoiDung = a.IdnguoiDung,
        TenDangNhap = a.TenDangNhap!,
        MatKhau = a.MatKhau!,
        NhanVienID = a.NhanVienId ?? 0,
        MaNV = nv.MaNv!,
        HoTen = nv.HoTen!,
        TenPB = pb.TenPhongBan!, 
        IDQuyen = a.Idquyen ?? 0,
        TenQuyen = q.TenQuyen!,
        IsLock = a.IsLock ?? 0
    }
    ).ToListAsync();

    return Ok(new ApiResponse<List<AccountValidation>>
    {
        Status = true,
        Message = "Lấy danh sách người dùng thành công!",
        Data = res
    });
}


}