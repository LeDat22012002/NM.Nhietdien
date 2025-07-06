using System.ComponentModel.DataAnnotations;

namespace Server.Models;

public class RegisterRequest
{
    [Required]
    public string Manv { get; set; } = null!;
    [Required]
    public string Password { get; set; } = null!;
    public string Role { get; set; } = "User";

    public string UserName { get; set; } = null!;
    public string ChucVu { get; set; } = null!;

}