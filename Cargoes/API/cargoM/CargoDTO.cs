using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public string Image { get; set; }

        [JsonPropertyName("attendees")]
        public ICollection<AttendeeDTO> UserCargos { get; set; }
    }

    public class CargoCreateDTO
    {
        [Required(ErrorMessage = "Вкажіть назву вантажу")]
        public string name { get; set; }
        [Required(ErrorMessage = "Вкажіть вагу")]
        public string weight { get; set; }
        [Required(ErrorMessage = "Вкажіть опис")]
        public string description { get; set; }
        //[Required(ErrorMessage = "Вкажіть фото")]
        public string imageBase64 { get; set; }
    }
}
