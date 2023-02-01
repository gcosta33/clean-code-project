import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: Cpf;
  orderItens: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItens = [];
  }

  addItem(item: Item, quantity: number) {
    this.orderItens.push(new OrderItem(item.idItem, item.price, quantity))
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  protected calculateDiscount(total: number) {
    let discount = 0;
    if (this.coupon) {
      return (total * this.coupon.percentage) / 100
    }
    return discount;
  }

  getTotal() {
    let total = 0;
    for (const ordemItem of this.orderItens) {
      total += ordemItem.getTotal();
    }
    total -= this.calculateDiscount(total)
    return total;
  }
}