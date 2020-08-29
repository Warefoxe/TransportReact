using API.Error;
using CargoesDb;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CargoesDb.User
{
    public class Login
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}