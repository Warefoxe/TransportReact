using API.Error;
using AutoMapper;
using CargoesDb;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace API.cargoM
{
    public class Details
    {
        public class Query : IRequest<CargoDTO>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, CargoDTO>
        {
            private readonly ApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(ApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<CargoDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var cargo = await _context.Cargos.
                   FindAsync(request.Id);

                if (cargo == null)
                {
                    throw new RestException(HttpStatusCode.NotFound, new { cargo = "Not found" });
                }

                var cargoToReturn = _mapper.Map<Cargo, CargoDTO>(cargo);

                return cargoToReturn;
            }
        }
    }
}
