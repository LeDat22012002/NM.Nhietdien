using System.ComponentModel.DataAnnotations;
using Server.Models;

public class LoginRequest
{
    [Required]
    public string Manv { get; set; } = null!;
    [Required]
    public string Password { get; set; } = null!;
}