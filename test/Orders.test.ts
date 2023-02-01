import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order'

test("Não deve criar um ordem com cpf invalido", function () {
  expect(() => new Order("111.111.11-111")).toThrow(new Error("Invalid cpf"));
})

test("Deve criar um pedido", function () {
  const order = new Order("601.780.430-87");
  expect(order).toBeDefined();
})

test("deve criar um pedido com 3 itens", function () {
  const order = new Order("601.780.430-87");
  order.addItem(new Item(1, "Instrumentos Musicais", "Gitarra", 1000), 1);
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
})

test("deve criar um pedido com 3 itens com cupom de desconto", function () {
  const order = new Order("601.780.430-87");
  order.addItem(new Item(1, "Instrumentos Musicais", "Gitarra", 1000), 1);
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20));
  const total = order.getTotal();
  expect(total).toBe(4872);
})