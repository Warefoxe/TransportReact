using CargoesDb;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API
{
    public static class SeederDatabase
    {
        public static void SeedData(IServiceProvider services,
          IWebHostEnvironment env,
          IConfiguration config)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
                SeedUsers(userManager, context);
                SeedCargo(context);
            }
        }

        private static void SeedUsers(UserManager<AppUser> userManager, ApplicationDbContext context)
        {
            if (!context.Users.Any())
            {
                AppUser user = new AppUser()
                {
                    Email = "ahmad@gmail.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = "Ahmad"
                };
                userManager.CreateAsync(user, "Ahmad@123");
            }
        }

        private static void SeedCargo(ApplicationDbContext dBContext)
        {
            List<Cargo> cargos = new List<Cargo>()
            {
                //new Cargo {Name="Грузоперевозка Переезд", Date=DateTime.Now.AddMonths(8),Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)", Image="https://ktonanovenkogo.ru/image/tovar-chto-takoe-korobka.jpg", Weight="300" },
                //new Cargo {Name="Грузоперевозка Ящик", Date=DateTime.Now.AddMonths(8),Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)", Image="https://ktonanovenkogo.ru/image/tovar-chto-takoe-korobka.jpg", Weight="300" },
                //new Cargo {Name="Грузоперевозка Квартирный переезд", Date=DateTime.Now.AddMonths(8),Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)", Image="https://ktonanovenkogo.ru/image/tovar-chto-takoe-korobka.jpg", Weight="300" },
                new Cargo {Name="Грузоперевозка Переезд", Weight="300", Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
                new Cargo {Name="Грузоперевозка Ящик", Weight="300", Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
                new Cargo {Name="Грузоперевозка Квартирный переезд", Weight="300", Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
            };

            for (int i = 0; i < cargos.Count; i++)
            {
                if (dBContext.Cargos.SingleOrDefault(r => r.Name == cargos[i].Name) == null)
                {
                    dBContext.Cargos.Add(cargos[i]);
                    dBContext.SaveChanges();
                }
            }
        }
    }
}
