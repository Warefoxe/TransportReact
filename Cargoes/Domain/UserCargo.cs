using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class UserCargo : BaseEntity
    {
        public string AppUserId { get; set; }
        public virtual AppUser AppUser { get; set; }
        public int CargoId { get; set; }
        public virtual Cargo Cargo { get; set; }
        public DateTime DateJoined { get; set; }
        public bool isHost { get; set; }

    }
}
