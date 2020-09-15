using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface ICargoRepository
    {
        Task<IEnumerable<Cargo>> GetCargos();
        Task<Cargo> GetCargo(int id);
    }
}
