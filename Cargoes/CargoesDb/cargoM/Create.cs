using CargoesDb;
using Domain;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.cargoM
{
    public class Create
    {
        public class Command : IRequest
        {
            public int CargoId { get; set; }
            public string Name { get; set; }
            public DateTime? Date { get; set; }
            public string Description { get; set; }
            public string Image { get; set; }
            public string Weight { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Name).NotEmpty();
                RuleFor(x => x.Date).NotEmpty();
                RuleFor(x => x.Description).NotEmpty();
                RuleFor(x => x.Image).NotEmpty();
                RuleFor(x => x.Weight).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly ApplicationDbContext _context;

            public Handler(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var cargo = new Cargo
                {
                    Id = request.CargoId,
                    Name = request.Name,
                    //Date = request.Date,
                    Weight = request.Weight,
                    Description = request.Description,
                    //Image = request.Image,
                };

                _context.Cargos.Add(cargo);
                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return Unit.Value;
                }
                else
                {
                    throw new Exception("some error");
                }
            }
        }
    }
}
