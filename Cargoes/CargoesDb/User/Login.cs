using API.Error;
using CargoesDb;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CargoesDb.User
{
    public class Login
    {
        [Required(ErrorMessage = "Поле не може бути пустим!")]

        public string Email { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]

        public string Password { get; set; }
    }
}