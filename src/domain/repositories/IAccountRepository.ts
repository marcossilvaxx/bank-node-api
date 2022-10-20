import { Account } from "../entities/Account";

interface IAccountRepository {
  findAll(): Account[];
  findById(id: number): Account | null;
  findByUserId(userId: number): Account | null;
}

export { IAccountRepository };