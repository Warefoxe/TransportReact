using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1
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
                SeedCargo(context);
            }
        }

        private static void SeedCargo(ApplicationDbContext dBContext)
        {
            List<Cargo> cargos = new List<Cargo>()
            {
                new Cargo {Name="Грузоперевозка Переезд",Weight="300",Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
                new Cargo {Name="Грузоперевозка Кабіна камаз",Weight="500",Description="Кабіна камаза" },
                new Cargo {Name="Грузоперевозка Ящик",Weight="70",Description="габариты: длина 1,2, ширина 0,6, высота 0,7" },
                new Cargo {Name="Грузоперевозка Квартирный переезд",Weight="1500",Description="Немає" },
                new Cargo {Name="Грузоперевозка Будматеріали",Weight="5000",Description="пиломатеріал 4,5м довжина" },
                new Cargo {Name="Грузоперевозка Пластиковая труба",Weight="75",Description="Необходимо доставить пластиковые трубы в днепр" },
                new Cargo {Name="Грузоперевозка спорттовары",Weight="900",Description="спорттовары" },
                new Cargo {Name="Грузоперевозка Южный-Киев",Weight="800",Description="На каждый день ищем довоз груза Южный-Одесса,европалеты,800 кг" },
                new Cargo {Name="Грузоперевозка Частная",Weight="400",Description="Нужно доставить не габаритную домашнюю мебель" },
                new Cargo {Name="Грузоперевозка грузоперевозка",Weight="160",Description="лодка обь м" },
                new Cargo {Name="Грузоперевозка Переезд",Weight="300",Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
                new Cargo {Name="Грузоперевозка Кабіна камаз",Weight="500",Description="Кабіна камаза" },
                new Cargo {Name="Грузоперевозка Ящик",Weight="70",Description="габариты: длина 1,2, ширина 0,6, высота 0,7" },
                new Cargo {Name="Грузоперевозка Квартирный переезд",Weight="1500",Description="Немає" },
                new Cargo {Name="Грузоперевозка Будматеріали",Weight="5000",Description="пиломатеріал 4,5м довжина" },
                new Cargo {Name="Грузоперевозка Пластиковая труба",Weight="75",Description="Необходимо доставить пластиковые трубы в днепр" },
                new Cargo {Name="Грузоперевозка спорттовары",Weight="900",Description="спорттовары" },
                new Cargo {Name="Грузоперевозка Южный-Киев",Weight="800",Description="На каждый день ищем довоз груза Южный-Одесса,европалеты,800 кг" },
                new Cargo {Name="Грузоперевозка Частная",Weight="400",Description="Нужно доставить не габаритную домашнюю мебель" },
                new Cargo {Name="Грузоперевозка грузоперевозка",Weight="160",Description="лодка обь м" },
                new Cargo {Name="Грузоперевозка Переезд",Weight="300",Description="Нужна помощь в перевозке бытовых вещей при переезде. Если при перевозке поместятся ещё 2 пассажира - будет отлично!)" },
                new Cargo {Name="Грузоперевозка Кабіна камаз",Weight="500",Description="Кабіна камаза" },
                new Cargo {Name="Грузоперевозка Ящик",Weight="70",Description="габариты: длина 1,2, ширина 0,6, высота 0,7" },
                new Cargo {Name="Грузоперевозка Квартирный переезд",Weight="1500",Description="Немає" },
                new Cargo {Name="Грузоперевозка Будматеріали",Weight="5000",Description="пиломатеріал 4,5м довжина" },
                new Cargo {Name="Грузоперевозка Пластиковая труба",Weight="75",Description="Необходимо доставить пластиковые трубы в днепр" },
                new Cargo {Name="Грузоперевозка спорттовары",Weight="900",Description="спорттовары" },
                new Cargo {Name="Грузоперевозка Южный-Киев",Weight="800",Description="На каждый день ищем довоз груза Южный-Одесса,европалеты,800 кг" },
                new Cargo {Name="Грузоперевозка Частная",Weight="400",Description="Нужно доставить не габаритную домашнюю мебель" },
                new Cargo {Name="Грузоперевозка грузоперевозка",Weight="160",Description="лодка обь м" },
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
