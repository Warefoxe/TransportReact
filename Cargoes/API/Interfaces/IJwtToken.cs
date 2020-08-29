using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IJwtToken
    {
        string CreateToken(AppUser user);
    }
}
