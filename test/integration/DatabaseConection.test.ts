import DatabaseConnectionAdapter from "../../src/infra/database/DatabaseConnectionAdapter"

test("Should create a database connection",async function(){
  const database = new DatabaseConnectionAdapter();
  const item = await database.query("select * from item where idItem = ? ",[1])
  expect(Array.isArray(item)).toBeTruthy()
})