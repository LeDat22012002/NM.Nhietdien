using System;
using System.Collections.Generic;

namespace Server.Models;

public partial class BmKtx
{
    public int Id { get; set; }

    public DateTime? Time { get; set; }

    public double? Tag1 { get; set; }

    public double? Tag2 { get; set; }

    public double? Tag3 { get; set; }
}
