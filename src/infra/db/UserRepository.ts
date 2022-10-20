import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { InMemoryDatabase } from "../../shared/infra/database/InMemoryDatabase";

class UserRepository implements IUserRepository {
  private inMemoryDatabase;
  private TABLE_NAME = "users";

  constructor() {
    this.inMemoryDatabase = new InMemoryDatabase();
  }

  findAll() {
    const users: User[] = this.inMemoryDatabase.select(this.TABLE_NAME);

    return users;
  }

  findByName(name: string): User | null {
    const result = this.inMemoryDatabase.select(this.TABLE_NAME, { column: "name", value: name });

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }
}

export { UserRepository };