using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.QueryFilters
{
    public class CargoQueryFilter
    {
        public string Name { get; set; }
        public string Weight { get; set; }
        public string Description { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
