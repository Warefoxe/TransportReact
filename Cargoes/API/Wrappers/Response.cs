using Domain.CustomEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Wrappers
{
    public class Response<T>
    {
        public Response(T data)
        {
            Data = data;
        }
        public T Data { get; set; }
        public Metadata meta { get; set; }

    }
}
