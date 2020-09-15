using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CargoesDb;
using AutoMapper;

namespace API.cargoM
{
    public class List
    {
        public class CargoeEnvelope
        {
            public List<CargoDTO> Cargos { get; set; }
            public string validFilter { get; set; }
        }
        public class Query : IRequest<List<CargoDTO>> { }

        public class Handler : IRequestHandler<Query, List<CargoDTO>>
        {
            private readonly ApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(ApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<List<CargoDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cargoes = await _context.Cargos.ToListAsync();
                return _mapper.Map<List<Cargo>, List<CargoDTO>>(cargoes);
            }
        }
    }
}
