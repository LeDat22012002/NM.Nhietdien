using Server.Models;

public class AuthResponse
{
    public string AccessToken { get; set; } = "";
    public string RefreshToken { get; set; } = "";
    public string MaNv { get; set; } = "";
    public string Role { get; set; } = "";
    public string? ChucVu { get; set; }
        public string? UserName { get; set; } 
}