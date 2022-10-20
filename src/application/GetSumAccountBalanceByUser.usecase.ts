import { User } from "../domain/entities/User";
import { IAccountRepository } from "../domain/repositories/IAccountRepository";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { convertCurrency } from "../shared/utils/convertCurrency";

class GetSumAccountBalanceByUser {
  private accountRepository: IAccountRepository;

  constructor(
    accountRepository: IAccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  execute(user: User): number {
    const accounts = this.accountRepository.findByUserId(user.id);

    const sumBalances = accounts.reduce((acc, account) => acc += convertCurrency(account.currency, "USD", account.balance), 0);

    return sumBalances;
  }
}