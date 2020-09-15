using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Cargo> CargoRepository { get; }
        void SaveChanges();
        Task SaveChangesAsync();
    }
}
