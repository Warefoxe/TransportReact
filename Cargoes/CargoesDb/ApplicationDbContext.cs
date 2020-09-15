using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CargoesDb
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                    : base(options)
        {

        }
        public DbSet<Cargo> Cargos { get; set; }
        public DbSet<UserCargo> UserCargos { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserCargo>(x => x.HasKey(uc =>
            new { uc.AppUserId, uc.CargoId }));

            builder.Entity<UserCargo>()
                .HasOne(u => u.AppUser)
                .WithMany(c => c.UserCargos)
                .HasForeignKey(u => u.AppUserId);

            builder.Entity<UserCargo>()
              .HasOne(c => c.Cargo)
              .WithMany(u => u.UserCargos)
              .HasForeignKey(c => c.CargoId);
        }
    }
}
