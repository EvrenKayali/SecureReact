using Microsoft.AspNetCore.Mvc;
using SecureReact.Api.Controllers;
using SecureReact.Api.Models;
using System.Collections.Generic;
using Xunit;

namespace SecureReact.Tests
{
    public class ItemsControllerTests
    {
        private ItemsController _itemsController;
        public ItemsControllerTests()
        {
            _itemsController = new ItemsController();
        }

        [Fact]
        public void Get_Shoul_Return_SuccessResult()
        {
            var actual = _itemsController.Get();
            Assert.IsType<OkObjectResult>(actual.Result);
        }

        [Fact]
        public void Get_Should_Return_ItemList()
        {
            var actual = _itemsController.Get().Result as OkObjectResult;
            Assert.IsAssignableFrom<IEnumerable<ItemModel>>(actual.Value);
            Assert.NotEmpty(actual.Value as IEnumerable<ItemModel>);
        }
    }
}
