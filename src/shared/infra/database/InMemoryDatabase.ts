import { users } from "./users.json";
import { accounts } from "./accounts.json";

type TFilterProps = { column: string; value: string | number; };
type TDatabase = { [key: string] : any[] }

class InMemoryDatabase {
  private database : TDatabase;

  constructor() {
    this.database = {
      users,
      accounts
    }
  }

  select(table: string, filter: TFilterProps): any[] {
    return this.database[table].filter(row => row[filter.column] === filter.value);
  }

}