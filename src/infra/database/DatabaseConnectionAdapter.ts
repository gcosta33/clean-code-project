import DatabaseConnection from "./DatabaseConnection";
import mysql, { Connection } from 'mysql'

export default class DatabaseConnectionAdapter implements DatabaseConnection {
  mysql: Connection;
  constructor() {
    this.mysql = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ccca'
    })
    this.mysql.connect();
  }

  async query(statement: string, params: any): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.mysql.query(statement, params, (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      });
    });
  }
}