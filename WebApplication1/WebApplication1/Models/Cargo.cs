using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    [Table("tblCargo")]
    public class Cargo
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(maximumLength: 250)]
        public string Name { get; set; }

        //[Column(TypeName = "decimal(7,2)")]
        [Required, StringLength(1000)]
        public string Weight { get; set; }

        [Required, StringLength(maximumLength: 250)]
        public string Description { get; set; }
    }
}
