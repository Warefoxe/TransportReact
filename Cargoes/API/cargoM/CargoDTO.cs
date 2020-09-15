using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.cargoM
{
    public class CargoDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //public DateTime? Date { get; set; }     
        public string Weight { get; set; }
        public string Description { get; set; }

        [JsonPropertyName("attendees")]
        public ICollection<AttendeeDTO> UserCargos { get; set; }
    }
}
