using System;
using System.Collections.Generic;

namespace Server.Models;

public partial class Bm11Qt0508
{
    public int Id { get; set; }

    public int TuabinId { get; set; }

    public string TagName { get; set; } = null!;

    public double Value { get; set; }

    public DateTime ThoiGian { get; set; }

    public virtual Tuabin Tuabin { get; set; } = null!;
}
