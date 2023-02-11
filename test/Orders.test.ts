import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order'

test("Should not create a order with a invalid CPF'", function () {
  expect(() => new Order("111.111.11-111")).toThrow(new Error("Invalid cpf"));
})

test("Should create a order", function () {
  const order = new Order("601.780.430-87");
  expect(order).toBeDefined();
})

test("Should create a order with 3 items", function () {
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

test("deve criar um pedido com 3 itens com cupom de desconto expirado", function () {
  const order = new Order("601.780.430-87",new Date("2021-10-10"));
  order.addItem(new Item(1, "Instrumentos Musicais", "Gitarra", 1000), 1);
  order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
  order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
  order.addCoupon(new Coupon("VALE20", 20,new Date('2021-03-01')));
  const total = order.getTotal();
  expect(total).toBe(6090);
})