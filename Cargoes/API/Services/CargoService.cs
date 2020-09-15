using API.Interfaces;
using API.QueryFilters;
using Domain;
using Domain.CustomEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class CargoService : ICargoService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CargoService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public PagedList<Cargo> GetCargos(CargoQueryFilter filters)
        {
            var cargoes = _unitOfWork.CargoRepository.GetAll();

            if (filters.Name != null)
            {
                cargoes = cargoes.Where(x => x.Name.ToLower().Contains(filters.Name.ToLower()));
            }

            if (filters.Weight != null)
            {
                cargoes = cargoes.Where(x => x.Weight == filters.Weight);
            }

            if (filters.Description != null)
            {
                cargoes = cargoes.Where(x => x.Description.ToLower().Contains(filters.Description.ToLower()));
            }

            var pagedCargoes = PagedList<Cargo>.Create(cargoes, filters.PageNumber, filters.PageSize);

            return pagedCargoes;
        }

        public async Task<Cargo> GetCargo(int id)
        {
            return await _unitOfWork.CargoRepository.GetById(id);
        }
    }
}
