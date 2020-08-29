using API.cargoM;
using API.Filter;
using API.Helpers;
using API.Services;
using API.Wrappers;
using CargoesDb;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ApplicationDbContext context;
        private readonly IUriService uriService;

        public CargoController(IMediator mediator, ApplicationDbContext context, IUriService uriService)
        {
            _mediator = mediator;
            this.context = context;
            this.uriService = uriService;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAll()
        //{
        //    var cargos = await context.Cargos.ToListAsync();
        //    if (cargos == null) return NotFound();
        //    return Ok(cargos);
        //}

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] PaginationFilter filter)
        {
            var route = Request.Path.Value;
            var validFilter = new PaginationFilter(filter.PageNumber, filter.PageSize);
            var pagedData = await context.Cargos
                .Skip((validFilter.PageNumber - 1) * validFilter.PageSize)
                .Take(validFilter.PageSize)
                .ToListAsync();
            var totalRecords = await context.Cargos.CountAsync();
            var pagedReponse = PaginationHelper.CreatePagedReponse<Cargo>(pagedData, validFilter, totalRecords, uriService, route);
            return Ok(pagedReponse);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var cargo = await context.Cargos.Where(a => a.Id == id).FirstOrDefaultAsync();
            return Ok(new Response<Cargo>(cargo));
        }

        [HttpPost]
        public async Task<IActionResult> Create(Cargo cargo)
        {
            context.Cargos.Add(cargo);
            await context.SaveChangesAsync();
            return Ok(cargo.Id);
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

