import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

class GetUserById {
  private userRepository: IUserRepository;

  constructor(
    userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  execute(id: number): User | null {
    const result = this.userRepository.findById(id);

    return result;
  }
}

export { GetUserById };