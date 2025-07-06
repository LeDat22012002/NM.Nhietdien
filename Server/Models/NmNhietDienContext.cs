using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Server.Models;

public partial class NmNhietDienContext : DbContext
{
    public NmNhietDienContext()
    {
    }

    public NmNhietDienContext(DbContextOptions<NmNhietDienContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Bm11Qt0508> Bm11Qt0508s { get; set; }

    public virtual DbSet<Tuabin> Tuabins { get; set; }

//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
//         => optionsBuilder.UseSqlServer("Server=DESKTOP-EA44RJV;Database=NM_NhietDien;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.MaNv).HasName("PK__Account__2725D76A9429231C");

            entity.ToTable("Account");

            entity.Property(e => e.MaNv).HasMaxLength(50);
            entity.Property(e => e.ChucVu).HasMaxLength(100);
            entity.Property(e => e.Password).HasMaxLength(200);
            entity.Property(e => e.RefreshToken).HasMaxLength(200);
            entity.Property(e => e.RefreshTokenExpiryTime).HasColumnType("datetime");
            entity.Property(e => e.Role).HasMaxLength(50);
            entity.Property(e => e.UserName).HasMaxLength(100);
        });

        modelBuilder.Entity<Bm11Qt0508>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BM.11-QT__3214EC07ECC3B7B2");

            entity.ToTable("BM.11-QT.05.08");

            entity.Property(e => e.TagName).HasMaxLength(100);
            entity.Property(e => e.ThoiGian).HasColumnType("datetime");

            entity.HasOne(d => d.Tuabin).WithMany(p => p.Bm11Qt0508s)
                .HasForeignKey(d => d.TuabinId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__BM.11-QT.__Tuabi__5EBF139D");
        });

        modelBuilder.Entity<Tuabin>(entity =>
        {
            entity.HasKey(e => e.TuabinId).HasName("PK__Tuabin__E541034DE7DD0AD6");

            entity.ToTable("Tuabin");

            entity.Property(e => e.TenTuabin).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
