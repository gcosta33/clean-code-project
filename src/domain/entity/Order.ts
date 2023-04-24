import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderCode from "./OrderCode";
import OrderItem from "./OrderItem";

export default class Order {
  private cpf: Cpf;
  private orderItens: OrderItem[];
  private coupon: Coupon | undefined;
  private freight: number = 0;
  private code: OrderCode;

  constructor(cpf: string, readonly issueDate: Date = new Date(), sequence:number = 1) {
    this.cpf = new Cpf(cpf);
    this.orderItens = [];
    this.code = new OrderCode(issueDate, sequence)
  }

  addItem(item: Item, quantity: number) {
    this.freight += item.getFreight() * quantity;
    this.orderItens.push(new OrderItem(item.idItem, item.price, quantity))
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.issueDate)) return;
    this.coupon = coupon;
  }

  protected calculateDiscount(total: number) {
    let discount = 0;
    if (this.coupon) {
      return (total * this.coupon.percentage) / 100
    }
    return discount;
  }

  getFreight(){
    return this.freight;
  }

  getCode(){
    return this.code;
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