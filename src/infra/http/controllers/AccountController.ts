import { Request, Response } from "express";
import { GetAccountBalanceSumByUser } from "../../../application/GetAccountBalanceSumByUser.usecase";
import { GetUserByName } from "../../../application/GetUserByName.usecase";
import { AccountRepository } from "../../db/AccountRepository";
import { UserRepository } from "../../db/UserRepository";

class AccountController {
  calculateBalanceSum(request: Request, response: Response) {
    const { user_name: userName } = request.query as { user_name: string };

    if (!isNaN(parseInt(userName))) {
      return response.status(400).json({ message: "User name is not a valid string" });
    }

    const getUserByName = new GetUserByName(new UserRepository());

    const user = getUserByName.execute(userName);

    if (!user) {
      return response.status(404).json({ message: "User not found"});
    }

    const getAccountBalanceSumByUser = new GetAccountBalanceSumByUser(new AccountRepository());

    const result = getAccountBalanceSumByUser.execute(user);

    return response.status(200).json({ result });
  }
}

export { AccountController };