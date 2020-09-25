using API.QueryFilters;
using Domain;
using Domain.CustomEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface ICargoService
    {
        PagedList<Cargo> GetCargos(CargoQueryFilter filters);
        Task<Cargo> GetCargo(int id);
        Task InsertCargo(Cargo cargo);
    }
}
