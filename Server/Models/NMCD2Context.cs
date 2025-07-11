using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Server.Models;

public partial class NMCD2Context : DbContext
{
    public NMCD2Context()
    {
    }

    public NMCD2Context(DbContextOptions<NMCD2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<BmBomCdq12> BmBomCdq12s { get; set; }

    public virtual DbSet<BmBomCdq3> BmBomCdq3s { get; set; }

    public virtual DbSet<BmCdq1> BmCdq1s { get; set; }

    public virtual DbSet<BmCdq2> BmCdq2s { get; set; }

    public virtual DbSet<BmCdq3> BmCdq3s { get; set; }

    public virtual DbSet<BmKtx> BmKtxes { get; set; }

    public virtual DbSet<BmLb1> BmLb1s { get; set; }

    public virtual DbSet<BmLb10> BmLb10s { get; set; }

    public virtual DbSet<BmLb2> BmLb2s { get; set; }

    public virtual DbSet<BmLb3> BmLb3s { get; set; }

    public virtual DbSet<BmLb4> BmLb4s { get; set; }

    public virtual DbSet<BmLb5> BmLb5s { get; set; }

    public virtual DbSet<BmLb6> BmLb6s { get; set; }

    public virtual DbSet<BmLb7> BmLb7s { get; set; }

    public virtual DbSet<BmLb8> BmLb8s { get; set; }

    public virtual DbSet<BmLb9> BmLb9s { get; set; }

    public virtual DbSet<BmNh1> BmNh1s { get; set; }

    public virtual DbSet<BmNh10> BmNh10s { get; set; }

    public virtual DbSet<BmNh2> BmNh2s { get; set; }

    public virtual DbSet<BmNh3> BmNh3s { get; set; }

    public virtual DbSet<BmNh4> BmNh4s { get; set; }

    public virtual DbSet<BmNh5> BmNh5s { get; set; }

    public virtual DbSet<BmNh6> BmNh6s { get; set; }

    public virtual DbSet<BmNh7> BmNh7s { get; set; }

    public virtual DbSet<BmNh8> BmNh8s { get; set; }

    public virtual DbSet<BmNh9> BmNh9s { get; set; }

    public virtual DbSet<BmNhkt1Bm1> BmNhkt1Bm1s { get; set; }

    public virtual DbSet<BmNhkt1Bm2> BmNhkt1Bm2s { get; set; }

    public virtual DbSet<BmNhkt2Bm1> BmNhkt2Bm1s { get; set; }

    public virtual DbSet<BmNhkt2Bm2> BmNhkt2Bm2s { get; set; }

    public virtual DbSet<BmNhkt3Bm1> BmNhkt3Bm1s { get; set; }

    public virtual DbSet<BmNhkt3Bm2> BmNhkt3Bm2s { get; set; }

    public virtual DbSet<BmQh10> BmQh10s { get; set; }

    public virtual DbSet<BmQh12> BmQh12s { get; set; }

    public virtual DbSet<BmQh34> BmQh34s { get; set; }

    public virtual DbSet<BmQh56> BmQh56s { get; set; }

    public virtual DbSet<BmQh78> BmQh78s { get; set; }

    public virtual DbSet<BmQh9> BmQh9s { get; set; }

    public virtual DbSet<BmQhNhkt1> BmQhNhkt1s { get; set; }

    public virtual DbSet<BmQhNhkt2> BmQhNhkt2s { get; set; }

    public virtual DbSet<BmQhNhkt3> BmQhNhkt3s { get; set; }

    public virtual DbSet<BmRo135> BmRo135s { get; set; }

    public virtual DbSet<BmRo90> BmRo90s { get; set; }

    public virtual DbSet<BmTbt1> BmTbt1s { get; set; }

    public virtual DbSet<BmTbt2> BmTbt2s { get; set; }

    public virtual DbSet<BmTram1100> BmTram1100s { get; set; }

    public virtual DbSet<BmXlntt1> BmXlntt1s { get; set; }

    public virtual DbSet<BmXlntt2> BmXlntt2s { get; set; }

    public virtual DbSet<NguoiDung> NguoiDungs { get; set; }

    public virtual DbSet<NhanVien> NhanViens { get; set; }

    public virtual DbSet<PhongBan> PhongBans { get; set; }

    public virtual DbSet<Quyen> Quyens { get; set; }

    public virtual DbSet<Scada1Bm1> Scada1Bm1s { get; set; }

    public virtual DbSet<Scada1Bm2> Scada1Bm2s { get; set; }

    public virtual DbSet<Scada1Bm3> Scada1Bm3s { get; set; }

    public virtual DbSet<Scada1Bm4> Scada1Bm4s { get; set; }

    public virtual DbSet<Scada2Bm1> Scada2Bm1s { get; set; }

    public virtual DbSet<Scada2Bm2> Scada2Bm2s { get; set; }

    public virtual DbSet<Scada2Bm3> Scada2Bm3s { get; set; }

    public virtual DbSet<Scada2Bm4> Scada2Bm4s { get; set; }

    public virtual DbSet<Scada3Bm1> Scada3Bm1s { get; set; }

    public virtual DbSet<Scada3Bm2> Scada3Bm2s { get; set; }

    public virtual DbSet<Scada3Bm3> Scada3Bm3s { get; set; }

    public virtual DbSet<Scada3Bm4> Scada3Bm4s { get; set; }

    public virtual DbSet<Tb1Bm1> Tb1Bm1s { get; set; }

    public virtual DbSet<Tb1Bm2> Tb1Bm2s { get; set; }

    public virtual DbSet<Tb1Bm3> Tb1Bm3s { get; set; }

    public virtual DbSet<Tb2Bm1> Tb2Bm1s { get; set; }

    public virtual DbSet<Tb2Bm2> Tb2Bm2s { get; set; }

    public virtual DbSet<Tb2Bm3> Tb2Bm3s { get; set; }

    public virtual DbSet<Tb3Bm1> Tb3Bm1s { get; set; }

    public virtual DbSet<Tb3Bm2> Tb3Bm2s { get; set; }

    public virtual DbSet<Tb3Bm3> Tb3Bm3s { get; set; }

    public virtual DbSet<Tb4Bm1> Tb4Bm1s { get; set; }

    public virtual DbSet<Tb4Bm2> Tb4Bm2s { get; set; }

    public virtual DbSet<Tb4Bm3> Tb4Bm3s { get; set; }

    public virtual DbSet<Tb5Bm1> Tb5Bm1s { get; set; }

    public virtual DbSet<Tb5Bm2> Tb5Bm2s { get; set; }

    public virtual DbSet<Tb5Bm3> Tb5Bm3s { get; set; }

    public virtual DbSet<Tb6Bm1> Tb6Bm1s { get; set; }

    public virtual DbSet<Tb6Bm2> Tb6Bm2s { get; set; }

    public virtual DbSet<Tb6Bm3> Tb6Bm3s { get; set; }

//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
//         => optionsBuilder.UseSqlServer("Server=PCNTT-HPDQ34864\\DAT2025;Database=NMCD2;User ID=sa;Password=Ronaldat@2026;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BmBomCdq12>(entity =>
        {
            entity.ToTable("BM_BOM_CDQ12");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmBomCdq3>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_CDQ3");

            entity.ToTable("BM_BOM_CDQ3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmCdq1>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_CDQ1");

            entity.ToTable("BM_CDQ1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmCdq2>(entity =>
        {
            entity.ToTable("BM_CDQ2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmCdq3>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_BM_BOM_CDQ3");

            entity.ToTable("BM_CDQ3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmKtx>(entity =>
        {
            entity.ToTable("BM_KTX");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb1>(entity =>
        {
            entity.ToTable("BM_LB1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb10>(entity =>
        {
            entity.ToTable("BM_LB10");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb2>(entity =>
        {
            entity.ToTable("BM_LB2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb3>(entity =>
        {
            entity.ToTable("BM_LB3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb4>(entity =>
        {
            entity.ToTable("BM_LB4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb5>(entity =>
        {
            entity.ToTable("BM_LB5");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb6>(entity =>
        {
            entity.ToTable("BM_LB6");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb7>(entity =>
        {
            entity.ToTable("BM_LB7");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb8>(entity =>
        {
            entity.ToTable("BM_LB8");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmLb9>(entity =>
        {
            entity.ToTable("BM_LB9");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh1>(entity =>
        {
            entity.ToTable("BM_NH1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh10>(entity =>
        {
            entity.ToTable("BM_NH10");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh2>(entity =>
        {
            entity.ToTable("BM_NH2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh3>(entity =>
        {
            entity.ToTable("BM_NH3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh4>(entity =>
        {
            entity.ToTable("BM_NH4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh5>(entity =>
        {
            entity.ToTable("BM_NH5");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh6>(entity =>
        {
            entity.ToTable("BM_NH6");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh7>(entity =>
        {
            entity.ToTable("BM_NH7");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh8>(entity =>
        {
            entity.ToTable("BM_NH8");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNh9>(entity =>
        {
            entity.ToTable("BM_NH9");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt1Bm1>(entity =>
        {
            entity.ToTable("BM_NHKT1_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt1Bm2>(entity =>
        {
            entity.ToTable("BM_NHKT1_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt2Bm1>(entity =>
        {
            entity.ToTable("BM_NHKT2_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt2Bm2>(entity =>
        {
            entity.ToTable("BM_NHKT2_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt3Bm1>(entity =>
        {
            entity.ToTable("BM_NHKT3_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmNhkt3Bm2>(entity =>
        {
            entity.ToTable("BM_NHKT3_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh10>(entity =>
        {
            entity.ToTable("BM_QH10");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh12>(entity =>
        {
            entity.ToTable("BM_QH12");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh34>(entity =>
        {
            entity.ToTable("BM_QH34");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh56>(entity =>
        {
            entity.ToTable("BM_QH56");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh78>(entity =>
        {
            entity.ToTable("BM_QH78");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQh9>(entity =>
        {
            entity.ToTable("BM_QH9");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQhNhkt1>(entity =>
        {
            entity.ToTable("BM_QH_NHKT1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQhNhkt2>(entity =>
        {
            entity.ToTable("BM_QH_NHKT2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmQhNhkt3>(entity =>
        {
            entity.ToTable("BM_QH_NHKT3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmRo135>(entity =>
        {
            entity.ToTable("BM_RO135");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmRo90>(entity =>
        {
            entity.ToTable("BM_RO90");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmTbt1>(entity =>
        {
            entity.ToTable("BM_TBT1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmTbt2>(entity =>
        {
            entity.ToTable("BM_TBT2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmTram1100>(entity =>
        {
            entity.ToTable("BM_Tram_1100");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmXlntt1>(entity =>
        {
            entity.ToTable("BM_XLNTT1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<BmXlntt2>(entity =>
        {
            entity.ToTable("BM_XLNTT2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<NguoiDung>(entity =>
        {
            entity.HasKey(e => e.IdnguoiDung);

            entity.ToTable("NguoiDung");

            entity.Property(e => e.IdnguoiDung).HasColumnName("IDNguoiDung");
            entity.Property(e => e.Idquyen).HasColumnName("IDQuyen");
            entity.Property(e => e.MatKhau).HasMaxLength(50);
            entity.Property(e => e.NhanVienId).HasColumnName("NhanVienID");
            entity.Property(e => e.RefreshToken).HasMaxLength(255);
            entity.Property(e => e.TenDangNhap)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.NhanVien).WithMany(p => p.NguoiDungs)
                .HasForeignKey(d => d.NhanVienId)
                .HasConstraintName("FK_NguoiDung_NhanVien");
        });

        modelBuilder.Entity<NhanVien>(entity =>
        {
            entity.ToTable("NhanVien");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.DiaChi).HasMaxLength(150);
            entity.Property(e => e.HoTen).HasMaxLength(50);
            entity.Property(e => e.HoTenKhongDau).HasMaxLength(50);
            entity.Property(e => e.IdphongBan).HasColumnName("IDPhongBan");
            entity.Property(e => e.IdtinhTrangLv).HasColumnName("IDTinhTrangLV");
            entity.Property(e => e.MaNv)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("MaNV");

            entity.HasOne(d => d.IdphongBanNavigation).WithMany(p => p.NhanViens)
                .HasForeignKey(d => d.IdphongBan)
                .HasConstraintName("FK_NhanVien_PhongBan");
        });

        modelBuilder.Entity<PhongBan>(entity =>
        {
            entity.HasKey(e => e.IdphongBan);

            entity.ToTable("PhongBan");

            entity.Property(e => e.IdphongBan)
                .ValueGeneratedNever()
                .HasColumnName("IDPhongBan");
            entity.Property(e => e.Pchn).HasColumnName("PCHN");
            entity.Property(e => e.TenPhongBan).HasMaxLength(50);
        });

        modelBuilder.Entity<Quyen>(entity =>
        {
            entity.HasKey(e => e.Idquyen);

            entity.ToTable("Quyen");

            entity.Property(e => e.Idquyen).HasColumnName("IDQuyen");
            entity.Property(e => e.TenQuyen).HasMaxLength(50);
        });

        modelBuilder.Entity<Scada1Bm1>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_SCADA1_BM01");

            entity.ToTable("SCADA1_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada1Bm2>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_SCADA1_BM02");

            entity.ToTable("SCADA1_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada1Bm3>(entity =>
        {
            entity.ToTable("SCADA1_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada1Bm4>(entity =>
        {
            entity.ToTable("SCADA1_BM4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada2Bm1>(entity =>
        {
            entity.ToTable("SCADA2_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada2Bm2>(entity =>
        {
            entity.ToTable("SCADA2_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada2Bm3>(entity =>
        {
            entity.ToTable("SCADA2_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada2Bm4>(entity =>
        {
            entity.ToTable("SCADA2_BM4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada3Bm1>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_SCADA1_BM1");

            entity.ToTable("SCADA3_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada3Bm2>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_SCADA1_BM2");

            entity.ToTable("SCADA3_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada3Bm3>(entity =>
        {
            entity.ToTable("SCADA3_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Scada3Bm4>(entity =>
        {
            entity.ToTable("SCADA3_BM4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb1Bm1>(entity =>
        {
            entity.ToTable("TB1_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb1Bm2>(entity =>
        {
            entity.ToTable("TB1_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb1Bm3>(entity =>
        {
            entity.ToTable("TB1_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb2Bm1>(entity =>
        {
            entity.ToTable("TB2_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb2Bm2>(entity =>
        {
            entity.ToTable("TB2_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb2Bm3>(entity =>
        {
            entity.ToTable("TB2_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb3Bm1>(entity =>
        {
            entity.ToTable("TB3_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb3Bm2>(entity =>
        {
            entity.ToTable("TB3_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb3Bm3>(entity =>
        {
            entity.ToTable("TB3_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb4Bm1>(entity =>
        {
            entity.ToTable("TB4_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb4Bm2>(entity =>
        {
            entity.ToTable("TB4_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb4Bm3>(entity =>
        {
            entity.ToTable("TB4_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb5Bm1>(entity =>
        {
            entity.ToTable("TB5_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb5Bm2>(entity =>
        {
            entity.ToTable("TB5_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb5Bm3>(entity =>
        {
            entity.ToTable("TB5_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb6Bm1>(entity =>
        {
            entity.ToTable("TB6_BM1");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb6Bm2>(entity =>
        {
            entity.ToTable("TB6_BM2");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        modelBuilder.Entity<Tb6Bm3>(entity =>
        {
            entity.ToTable("TB6_BM3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time).HasColumnType("smalldatetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
