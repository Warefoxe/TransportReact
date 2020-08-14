using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Filter;
using WebApplication1.Helpers;
using WebApplication1.Models;
using WebApplication1.Services;
using WebApplication1.Wrappers;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IUriService uriService;

        public CargoController(ApplicationDbContext context, IUriService uriService)
        {
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
    }
}
