using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

[Route("api/[controller]")]
[ApiController]

public class BM_1Controller : ControllerBase
{
    private readonly NmNhietDienContext _context;

    public BM_1Controller(NmNhietDienContext context)
    {
        _context = context;
    }

    [HttpGet("getAllBM_1")]

    public async Task<IActionResult> GetAllBM_1()
    {
        var data = await _context.Bm11Qt0508s.Include(bm1 => bm1.Tuabin)
            .Select(bm => new BM_11_QT_05_08DTO
            {
                TuabinId = bm.TuabinId,
                TenTuabin = bm.Tuabin.TenTuabin,
                TagName = bm.TagName,
                Value = bm.Value,
                ThoiGian = bm.ThoiGian
            }).ToListAsync();
        var response = new ApiResponse<List<BM_11_QT_05_08DTO>>
        {
            Status = true,
            Message = "Lấy dữ liệu thành công",
            Data = data
        };
        return Ok(response);
            
    }
}