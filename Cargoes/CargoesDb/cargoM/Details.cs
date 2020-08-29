using API.Error;
using CargoesDb;
using Domain;
using MediatR;
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
        public class Query : IRequest<Cargo>
        {
            public int CargoId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Cargo>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Cargo> Handle(Query request, CancellationToken cancellationToken)
            {
                var cargo = await _context.Cargos.FindAsync(request.CargoId);

                if (cargo == null)
                {
                    throw new RestException(HttpStatusCode.NotFound, new { cargo = "Not found" });
                }

                return cargo;
            }
        }
    }
}
