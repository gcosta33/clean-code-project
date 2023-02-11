export default class Item {
  constructor(
    readonly idItem: number,
    readonly category: "Musical Instruments" | "Instrumentos Musicais",
    readonly description: string,
    readonly price: number,
    readonly width: number = 0,
    readonly height: number = 0,
    readonly length: number = 0,
    readonly weight: number = 0
  ) {
  }

  getVolume() {
    const { width, height, length } = this;
    return width / 100 * height / 100 * length / 100;
  }

  getDensity() {
    return this.weight / this.getVolume();
  }

  getFreight() {
    const freight = 1000 * this.getVolume() * (this.getDensity() / 100);
    return (freight < 10) ? 10 : freight;
  }
}