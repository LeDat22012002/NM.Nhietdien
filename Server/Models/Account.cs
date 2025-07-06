using System;
using System.Collections.Generic;

namespace Server.Models;

public partial class Account
{
    public string MaNv { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string? RefreshToken { get; set; }

    public DateTime? RefreshTokenExpiryTime { get; set; }

    public string? UserName { get; set; }

    public string? ChucVu { get; set; }
}
