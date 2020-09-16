using API.cargoM;
using API.Filter;
using API.Interfaces;
using API.QueryFilters;
using API.Services;
using API.Wrappers;
using AutoMapper;
using CargoesDb;
using Domain;
using Domain.CustomEntities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;
        private readonly ICargoService _cargoService;
        private readonly IUriService _uriService;
        private readonly IUserAccessor _userAccessor;

        public CargoController(IMediator mediator, ApplicationDbContext context,
            IUriService uriService, IUserAccessor userAccessor,
            IConfiguration configuration, IMapper mapper, ICargoService cargoService)
        {
            _mediator = mediator;
            _context = context;
            _uriService = uriService;
            _userAccessor = userAccessor;
            _configuration = configuration;
            _mapper = mapper;
            _cargoService = cargoService;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAll()
        //{
        //    var cargos = await context.Cargos.ToListAsync();
        //    if (cargos == null) return NotFound();
        //    return Ok(cargos);
        //}

        //[HttpGet]
        //public async Task<IActionResult> GetAll([FromQuery] PaginationFilter filter)
        //{
        //    var route = Request.Path.Value;
        //    var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
        //    var pagedData = await _context.Cargos
        //        .Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
        //        .Take(validFilter.PageSize)
        //        .ToListAsync();
        //    var totalRecords = await _context.Cargos.CountAsync();
        //    var pagedReponse = PaginationHelper.CreatePagedReponse<Cargo>(pagedData, validFilter, totalRecords, _uriService, route);
        //    return Ok(pagedReponse);
        //}

        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetById(int id)
        //{
        //    var cargo = await _context.Cargos.Include(x => x.UserCargos).ThenInclude(x => x.AppUser).Where(a => a.Id == id).FirstOrDefaultAsync();
        //    //var cargo = await _context.Cargos.Where(a => a.Id == id).FirstOrDefaultAsync();
        //    return Ok(new Response<Cargo>(cargo));
        //}


        //[HttpGet]
        //public async Task<ActionResult<List<CargoDTO>>> GetAll([FromQuery] PaginationFilter filter)
        //{
        //    var route = Request.Path.Value;
        //    var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
        //    var quareble = _context.Cargos.AsQueryable();

        //    var pagedData = await quareble
        //        .Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
        //        .Take(validFilter.PageSize)
        //        .ToListAsync();
        //    var totalRecords = await quareble.CountAsync();
        //    var pagedReponse = PaginationHelper.CreatePagedReponse(pagedData, validFilter, totalRecords, _uriService, route);
        //    //return Ok(pagedReponse);
        //    return _mapper.Map<List<Cargo>, List<CargoDTO>>(pagedReponse);

        //    //return await _mediator.Send(new List.Query());
        //}

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult GetAll([FromQuery] CargoQueryFilter filters)
        {
            var cargoes = _cargoService.GetCargos(filters);
            var cargoesDTO = _mapper.Map<IEnumerable<CargoDTO>>(cargoes);

            var metadata = new Metadata
            {
                TotalCount = cargoes.TotalCount,
                PageSize = cargoes.PageSize,
                CurrentPage = cargoes.CurrentPage,
                TotalPages = cargoes.TotalPages,
                HasNextPage = cargoes.HasNextPage,
                HasPreviousPage = cargoes.HasPreviousPage,
            };

            var response = new Response<IEnumerable<CargoDTO>>(cargoesDTO)
            {
                meta = metadata
            };

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CargoDTO>> Details(int id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }

        //[HttpPost]
        //public async Task<ActionResult<Unit>> Create(Create.Command command)
        //{
        //    return await _mediator.Send(command);
        //}

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Cargo cargo)
        {
            var cargoes = new Cargo
            {
                Id = cargo.Id,
                Name = cargo.Name,
                Weight = cargo.Weight,
                Description = cargo.Description,
            };

            _context.Cargos.Add(cargoes);


            //string id = User.Claims.ToList()[0].Value;
            //var user = _context.Users.SingleOrDefault(x => x.UserName == id);

            //var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetCurrentUserName());

            //var attendee = new UserCargo
            //{
            //    AppUser = user,
            //    Cargo = cargoes,
            //    isHost = true,
            //    DateJoined = DateTime.Now
            //};

            //_context.UserCargos.Add(attendee);

            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem");
            //return await _mediator.Send(command);
        }


        ////[Authorize(AuthenticationSchemes = "Bearer")]
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Cargo>> Details(int id)
        //{
        //    return await _mediator.Send(new Details.Query { CargoId = id });
        //}

        //[HttpPost]
        //public async Task<ActionResult<Unit>> Create(Create.Command command)
        //{
        //    return await _mediator.Send(command);
    }
}

