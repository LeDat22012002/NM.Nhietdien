using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using ClosedXML.Excel;
using System.Reflection;
using System.Net.Mime;
using Microsoft.AspNetCore.Authorization;
namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoiHoiKT1_BM1Controller : ControllerBase
    {
        private readonly NMCD2Context _context;

        public NoiHoiKT1_BM1Controller(NMCD2Context context)
        {
            _context = context;
        }

        [HttpGet("getData_NoiHoiKT1_BM1")]
        [Authorize]
        public async Task<IActionResult> GetData_NoiHoiKT1_BM1(DateTime? begind, DateTime? endd, string sortOrder = "desc")
        {
            // Nếu không truyền thời gian, dùng mặc định là từ hôm qua đến hiện tại
            DateTime defaultEnd = DateTime.Now;
            DateTime defaultBegin = DateTime.Now.AddDays(-1);

            var start = begind ?? defaultBegin;
            var end = endd ?? defaultEnd;

            var query = _context.BmNhkt1Bm1s
                .Where(x => x.Time >= start && x.Time <= end);

            // Sắp xếp theo thời gian
            query = sortOrder.ToLower() == "asc"
                ? query.OrderBy(x => x.Time)
                : query.OrderByDescending(x => x.Time);

            var data = await query.ToListAsync();

            return Ok(new ApiResponse<List<BmNhkt1Bm1>>
            {
                Status = true,
                Message = "Lấy dữ liệu thành công",
                Data = data
            });
        }



        [HttpGet("exportExcel")]
        [Authorize]
        public IActionResult ExportExcel_NoiHoiKT1_BM1(DateTime? begind, DateTime? endd, int turbineIndex = 1)
        {
            // 1. Lấy dữ liệu từ database
            var data = _context.BmNhkt1Bm1s
                .Where(x => x.Time >= begind && x.Time <= endd)
                .OrderBy(x => x.Time)
                .ToList();

            if (!data.Any())
                return BadRequest("Không có dữ liệu trong khoảng thời gian được chọn.");


            var flatData = new List<NoiHoiKT_BM1Valiadation>();
            foreach (var item in data)
            {
                for (int i = 1; i <= 51; i++)
                {

                    var prop = typeof(BmNhkt1Bm1).GetProperty($"Tag{i}");
                    if (prop != null)
                    {
                        var value = prop.GetValue(item) as double?;
                        if (value.HasValue)
                        {
                            flatData.Add(new NoiHoiKT_BM1Valiadation
                            {
                                Time = item.Time?.Date.AddHours(item.Time.Value.Hour) ?? DateTime.MinValue,
                                Tag = $"Tag{i}",
                                Value = value.Value
                            });
                        }
                    }
                }
            }

            // 3. Load template Excel
            string templatePath = Path.Combine(Directory.GetCurrentDirectory(), "App_Data", "BM.19 -QT.05.08 Nhat ky van hanh noi hoi khi than BM1.xlsx");
            if (!System.IO.File.Exists(templatePath))
                return BadRequest("Không tìm thấy file mẫu.");

            using var workbook = new XLWorkbook(templatePath);
            var worksheet = workbook.Worksheet("BM.19"); // Sheet name
            for (int col = 1; col <= 100; col++) // quét từ cột A đến CV (100 cột)
            {
                var cell = worksheet.Cell(3, col);
                var text = cell.GetString();

                if (!string.IsNullOrWhiteSpace(text) && text.Contains("SỐ...."))
                {
                    cell.Value = text.Replace("....", turbineIndex.ToString());
                    break;
                }
            }

            var today = DateTime.Now;
            for (int col = 1; col <= 100; col++) // dòng 4
            {
                var cell = worksheet.Cell(4, col);
                var text = cell.GetString();

                if (!string.IsNullOrWhiteSpace(text) && text.Contains("Ngày"))
                {
                    cell.Value = $"Ngày {today.Day} tháng {today.Month} năm {today.Year}";
                    break;
                }
            }
            // dòng bắt đầu đổ dữ liệu 
            int startRow = 10;
            int currentRow = startRow;

            // 4. Ghi dữ liệu
            foreach (var group in flatData.GroupBy(x => x.Time))
            {
                var groupTime = group.Key;

                // Ghi thời gian vào cột 1
                var timeCell = worksheet.Cell(currentRow, 1);
                timeCell.Value = groupTime;
                timeCell.Style.DateFormat.Format = "HH:mm";
                timeCell.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                timeCell.Style.Fill.BackgroundColor = XLColor.Yellow;

                // Ghi từng Tag
                for (int col = 2; col <= 100; col++)
                {
                    worksheet.Column(col).Width = 14;
                    // Lấy cột Tagname trong Excel
                    var header = worksheet.Cell(9, col).GetString()?.Trim();
                    if (string.IsNullOrEmpty(header)) continue;

                    var tagMatch = group.FirstOrDefault(x =>
                        x.Tag.Equals(header, StringComparison.OrdinalIgnoreCase));

                    if (tagMatch != null)
                    {
                        var targetCell = worksheet.Cell(currentRow, col);
                        targetCell.Value = tagMatch.Value;
                        targetCell.Style.NumberFormat.Format = "0.00";
                        targetCell.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                    }
                }

                currentRow++;
            }
            // worksheet.Columns().AdjustToContents();

            // 5. Xuất file
            using var stream = new MemoryStream();
            workbook.SaveAs(stream);
            stream.Seek(0, SeekOrigin.Begin);

            var content = stream.ToArray();
            var fileName = $"NoiHoiTK1_BM1_{DateTime.Now:yyyy-MM-dd}.xlsx";


            Response.Headers["Content-Disposition"] = new System.Net.Mime.ContentDisposition
            {
                FileName = fileName,
                Inline = false
            }.ToString();


            return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

        }


        




    }
}
