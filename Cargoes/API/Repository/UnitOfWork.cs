using API.Interfaces;
using CargoesDb;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        private readonly IRepository<Cargo> _cargoRepository;

        public UnitOfWork(ApplicationDbContext context, IRepository<Cargo> cargoRepository)
        {
            _context = context;
            _cargoRepository = cargoRepository;
        }

        public IRepository<Cargo> CargoRepository => _cargoRepository ?? new BaseRepository<Cargo>(_context);

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
