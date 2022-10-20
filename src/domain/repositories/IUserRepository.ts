import { User } from "../entities/User";

interface IUserRepository {
  findByName(name: string): User | null;
  findAll(): User[];
}

export { IUserRepository };