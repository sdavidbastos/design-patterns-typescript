interface User {
  name: string;
  age: number;
}
export class Database {
  private static _instance: Database | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): Database {
    if (Database._instance === null) {
      Database._instance = new Database();
    }
    return Database._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.slice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
