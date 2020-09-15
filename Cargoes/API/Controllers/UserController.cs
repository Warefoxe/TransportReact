using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Error;
using API.Interfaces;
using CargoesDb;
using CargoesDb.User;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IJwtToken _jwtToken;
        private readonly ApplicationDbContext _context;
        private readonly IUserAccessor _userAccessor;

        public UserController(UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager,
        IJwtToken jwtToken, ApplicationDbContext context, IUserAccessor userAccessor)
        {
            _jwtToken = jwtToken;
            _context = context;
            _userAccessor = userAccessor;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(Login login)
        {
            var user = await _userManager.FindByEmailAsync(login.Email);

            if (user == null)
                throw new RestException(HttpStatusCode.Unauthorized);
            var result = await _signInManager
                .CheckPasswordSignInAsync(user, login.Password, false);

            if (result.Succeeded)
            {
                return new User
                {
                    DisplayName = user.DisplayName,
                    Token = _jwtToken.CreateToken(user),
                    UserName = user.UserName,
                };
            }
            throw new RestException(HttpStatusCode.Unauthorized);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(Register register)
        {
            if (await _context.Users.Where(x => x.Email == register.Email).AnyAsync())
            {
                throw new RestException(HttpStatusCode.BadRequest, new { Email = "Така електронна пошта вже існує" });
            }

            //if (await _context.Users.Where(x => x.UserName == register.UserName).AnyAsync())
            //{
            //    throw new RestException(HttpStatusCode.BadRequest, new { UserName = "Username alredy exists" });
            //}

            var user = new AppUser
            {
                DisplayName = register.DisplayName,
                Email = register.Email,
                UserName = register.UserName
            };


            var result = await _userManager.CreateAsync(user, register.Password);

            if (result.Succeeded)
            {
                return new User
                {
                    DisplayName = user.DisplayName,
                    Token = _jwtToken.CreateToken(user),
                    UserName = user.UserName,
                };
            }
            throw new Exception("Problem creating user");
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]

        public async Task<ActionResult<User>> CurrentUser()
        {
            var user = await _userManager.FindByNameAsync(_userAccessor.GetCurrentUserName());

            return new User
            {
                DisplayName = user.DisplayName,
                UserName = user.UserName,
                Token = _jwtToken.CreateToken(user),
            };
        }
    }
}
