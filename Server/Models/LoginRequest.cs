using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class LoginRequest
    {
        
        [Required]
        public string Manv { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;

    }
}