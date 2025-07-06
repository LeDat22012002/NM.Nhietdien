using System;
using System.Collections.Generic;

namespace Server.Models;

public partial class Tuabin
{
    public int TuabinId { get; set; }

    public string TenTuabin { get; set; } = null!;

    public virtual ICollection<Bm11Qt0508> Bm11Qt0508s { get; set; } = new List<Bm11Qt0508>();
}
