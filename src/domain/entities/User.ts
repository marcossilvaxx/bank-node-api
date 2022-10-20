
class User {
  public readonly id: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  
  public get name(): string {
    return this.name;
  }
  
  public set name(value: string) {
    this.name = value;
  }  
}

export { User };