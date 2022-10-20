import { users } from "./users.json";
import { accounts } from "./accounts.json";

type TFilterProps = { column: string; value: string | number; };
type TDatabase = { [key: string] : any[] }

let database: TDatabase = {
  users,
  accounts
};

class InMemoryDatabase {
  select(table: string, filter?: TFilterProps): any[] {
    return filter 
            ? database[table].filter(row => row[filter.column] === filter.value) 
            : database[table];
  }

  insert(table: string, data: any) {
    if (database[table]) {
      database[table].push(data)
    } else {
      database[table] = [data];
    }
  }

}

export { InMemoryDatabase };