import { Account } from "../../domain/entities/Account";
import { IAccountRepository } from "../../domain/repositories/IAccountRepository";
import { InMemoryDatabase } from "../../shared/infra/database/InMemoryDatabase";

class AccountRepository implements IAccountRepository {
  private inMemoryDatabase;
  private TABLE_NAME = "accounts";

  constructor() {
    this.inMemoryDatabase = new InMemoryDatabase();
  }

  findAll() {
    const accounts: Account[] = this.inMemoryDatabase.select(this.TABLE_NAME);

    return accounts;
  }

  findById(id: number): Account | null {
    const result = this.inMemoryDatabase.select(this.TABLE_NAME, { column: "id", value: id });

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }

  findByUserId(userId: number): Account | null {
    const result = this.inMemoryDatabase.select(this.TABLE_NAME, { column: "userId", value: userId });

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }
}

export { AccountRepository };