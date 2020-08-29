using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CargoesDb;

namespace API.cargoM
{
    public class List
    {
        public class Query : IRequest<List<Cargo>> { }

        public class Handler : IRequestHandler<Query, List<Cargo>>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<List<Cargo>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cargoes = await _context.Cargos.ToListAsync();
                return cargoes;
            }
        }
    }
}
