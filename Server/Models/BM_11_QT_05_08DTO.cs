using System.ComponentModel.DataAnnotations;
using Server.Models;

public class BM_11_QT_05_08DTO
{
    public int TuabinId { get; set; }
     public string TenTuabin { get; set; } = null!;
    public string TagName { get; set; } = null!;
    public double Value { get; set; }
    public DateTime ThoiGian { get; set; }
    
    
}