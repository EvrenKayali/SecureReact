using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SecureReact.Api.Models;

namespace SecureReact.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<ItemModel>> Get()
        {
            var items = new List<ItemModel>
            {
                new ItemModel
                {
                    Id = 1,
                    Name = "Apple",
                    Description = "A delicious fruit."
                },
                new ItemModel
                {
                    Id = 2,
                    Name="Chest",
                    Description = "You can hide your items in it."
                },
                new ItemModel
                {
                    Id = 3,
                    Name = "Bed",
                    Description = "I am sleeping on it."
                }
            };

            return Ok(items);
        }
    }
}
