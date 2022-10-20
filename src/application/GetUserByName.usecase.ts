import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

class GetUserByName {
  private userRepository: IUserRepository;

  constructor(
    userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  execute(name: string): User | null {
    const result = this.userRepository.findByName(name);

    return result;
  }
}

export { GetUserByName };