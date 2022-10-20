import { User } from "../entities/User";

interface IUserRepository {
  findById(id: number): User | null;
  findAll(): User[];
}

export { IUserRepository };