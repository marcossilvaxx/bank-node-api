
class Account {
  public readonly id: number;
  public readonly userId: number;

  constructor(id: number, userId: number, name: string, currency: string, balance: number) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.currency = currency;
    this.balance = balance;
  }
  
  public get name(): string {
    return this.name;
  }
  
  public set name(value: string) {
    this.name = value;
  }

  public get currency(): string {
    return this.currency;
  }
  
  public set currency(value: string) {
    this.currency = value;
  }

  public get balance(): number {
    return this.balance;
  }
  
  public set balance(value: number) {
    this.balance = value;
  }
}

export { Account };