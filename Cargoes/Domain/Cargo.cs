using System;
using System.Collections.Generic;
using System.Text;

namespace Domain
{
    public class Cargo : BaseEntity
    {
        public string Name { get; set; }
        //public DateTime? Date { get; set; }     
        public string Weight { get; set; }
        public string Description { get; set; }
        public virtual ICollection<UserCargo> UserCargos { get; set; }

        //public string Image { get; set; }
    }
}
