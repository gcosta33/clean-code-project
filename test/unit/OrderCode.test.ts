import OrderCode from "../../src/domain/entity/OrderCode";

test("Should create a order code", function () {
  const date = new Date('2023-04-23');
  const sequence = 1;
  const code = new OrderCode(date, sequence);
  expect(code.value).toBe('202300000001');
})