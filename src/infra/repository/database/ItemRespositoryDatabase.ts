import DatabaseConnection from "../../database/DatabaseConnection";
import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryDatabase implements ItemRepository{

  constructor(readonly databaseConnection: DatabaseConnection){

  }

  async findById(idItem: number): Promise<Item> {
    const [databaseItem] = await this.databaseConnection.query("select * from item where idItem = ?", [idItem]);
    return new Item(databaseItem.idItem, databaseItem.category, databaseItem.description, databaseItem.price);
  }
}