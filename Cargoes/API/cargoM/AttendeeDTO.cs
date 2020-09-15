using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.cargoM
{
    public class AttendeeDTO
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        //public string Image { get; set; }
        public bool IsHost { get; set; }
    }
}
