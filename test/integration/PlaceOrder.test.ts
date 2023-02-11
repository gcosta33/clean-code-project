import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRespositoryDatabase";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/PlaceOrder";

test("Should place a order", async function () {
  const input = {
    cpf: "601.780.430-87",
    orderItems: [
      {
        idItem: 1,
        quantity: 1
      },
      {
        idItem: 2,
        quantity: 1
      },
      {
        idItem: 3,
        quantity: 3
      }
    ]
  };
  const placeOrder = new PlaceOrder(new ItemRepositoryDatabase(new DatabaseConnectionAdapter()), new OrderRepositoryMemory());
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(6090);
})