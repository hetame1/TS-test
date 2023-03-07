class Parent {

  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다`);
  }

  protected printName(): void {
    console.log(this._name);
  }

}

// const p = new Parent('Mark', 30);
// p.print();

class Child extends Parent {
  public _name = "Mark Jr";

  public gender = "male";

  constructor(age: number) {
    // 자식의 생성자에는 super를 무조건 먼저 선언해야됨됨
    super("Mark Jr", age)

    this.printName();
  }
};

const c = new Child(1);

c.print()

