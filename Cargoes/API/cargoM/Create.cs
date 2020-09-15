//using API.Interfaces;
//using CargoesDb;
//using Domain;
//using FluentValidation;
//using MediatR;
//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading;
//using System.Threading.Tasks;

//namespace API.cargoM
//{
//    public class Create
//    {
//        public class Command : IRequest
//        {
//            public int Id { get; set; }
//            public string Name { get; set; }
//            //public DateTime? Date { get; set; }     
//            public string Weight { get; set; }
//            public string Description { get; set; }
//        }

//        public class CommandValidator : AbstractValidator<Command>
//        {
//            public CommandValidator()
//            {
//                RuleFor(x => x.Name).NotEmpty();
//                RuleFor(x => x.Weight).NotEmpty();
//                RuleFor(x => x.Description).NotEmpty();
//            }
//        }

//        public class Handler : IRequestHandler<Command>
//        {
//            private readonly ApplicationDbContext _context;
//            private readonly IUserAccessor _userAccessor;

//            public Handler(ApplicationDbContext context, IUserAccessor userAccessor)
//            {
//                _context = context;
//                _userAccessor = userAccessor;
//            }

//            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
//            {
//                var cargoes = new Cargo
//                {
//                    Id = request.Id,
//                    Name = request.Name,
//                    Weight = request.Weight,
//                    Description = request.Description,
//                };


//                _context.Cargos.Add(cargoes);

//                //string id = User.Claims.ToList()[0].Value;


//                //var user = _context.Users.SingleOrDefault(x => x.Id == id);
//                //var user =  await _context.Users.SingleOrDefaultAsync(x => x.Id == _userAccessor.GetCurrentUserName());


//                //var user = await _context.Users.SingleOrDefaultAsync(x =>
//                //    x.UserName == _userAccessor.GetCurrentUserName());

//                //var user = await _context.Users.SingleOrDefaultAsync(x =>
//                //    x.UserName == _userAccessor.GetCurrentUserName());


//                //var attendee = new UserCargo
//                //{
//                //    AppUser = user,
//                //    Cargo = cargoes,
//                //    isHost = true,
//                //    DateJoined = DateTime.Now
//                //};

//                //_context.UserCargos.Add(attendee);

//                //var success = await _context.SaveChangesAsync() > 0;

//                //if (success) return Unit.Value;

//                //throw new Exception("Problem");
//            }
//        }
//    }
//}
