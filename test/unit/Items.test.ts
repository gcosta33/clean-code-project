import Item from "../../src/domain/entity/Item"

test("Should create a item", function () {
  const item = new Item(1, "Musical Instruments", "Guitar", 1000);
  expect(item.idItem).toBe(1);
});

test("Should create a item and calculate the volume", function () {
  const item = new Item(1, "Musical Instruments", "Guitar", 1000, 100, 30, 10);
  const volume = item.getVolume();
  expect(volume).toBe(0.03);
});

test("Should create a item and calculate the density", function () {
  const item = new Item(1, "Musical Instruments", "Guitar", 1000, 100, 30, 10, 3);
  const density = item.getDensity();
  expect(density).toBe(100);
});

test("Should create a item and calculate the freight", function () {
  const item = new Item(1, "Musical Instruments", "Guitar", 1000, 100, 30, 10, 3);
  const freight = item.getFreight();
  expect(freight).toBe(30);
});

test("Should create a item and calculate a minimal freight", function () {
  const item = new Item(3, "Musical Instruments", "Cable", 30, 10, 10, 10, 0.9);
  const freight = item.getFreight();
  expect(freight).toBe(10);
});