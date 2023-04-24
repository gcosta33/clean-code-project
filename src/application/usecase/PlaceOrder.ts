import Item from "../../domain/entity/Item";
import ItemRepository from "../../domain/repository/ItemRepository";
import Order from "../../domain/entity/Order";
import OrderRepository from "../../domain/repository/OrderRepository";
import PlaceOrderInput from "../dto/PlaceOrderInput";
import PlaceOrderOutput from "../dto/PlaceOrderOutput";

export default class PlaceOrder {

  constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository) {
  }
  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf, input.issueDate, 1);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem)
      order.addItem(item, orderItem.quantity)
    }
    this.orderRepository.save(order)
    const code = order.getCode().value;
    const total = order.getTotal();
    return new PlaceOrderOutput(code, total)
  }
}