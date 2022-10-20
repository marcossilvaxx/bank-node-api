import { User } from "../domain/entities/User";
import { IAccountRepository } from "../domain/repositories/IAccountRepository";
import { convertCurrency } from "../shared/utils/convertCurrency";

class GetAccountBalanceSumByUser {
  private accountRepository: IAccountRepository;

  constructor(
    accountRepository: IAccountRepository
  ) {
    this.accountRepository = accountRepository;
  }

  execute(user: User): number {
    const accounts = this.accountRepository.findByUserId(user.id);

    const balancesSum = accounts.reduce((acc, account) => acc += convertCurrency(account.currency, "USD", account.balance), 0);

    return balancesSum;
  }
}

export { GetAccountBalanceSumByUser };