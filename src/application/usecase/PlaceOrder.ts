import Item from "../../domain/entity/Item";
import ItemRepository from "../../domain/repository/ItemRepository";
import Order from "../../domain/entity/Order";
import OrderRepository from "../../domain/repository/OrderRepository";

export default class PlaceOrder {

  constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {

  }

  async execute(input: any) {
    const order = new Order(input.cpf);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem)
      order.addItem(item, orderItem.quantity)
    }
    this.orderRepository.save(order)
    return {
      total: order.getTotal()
    }
  }
}