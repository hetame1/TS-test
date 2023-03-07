"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다`);
    }
    printName() {
        console.log(this._name);
    }
}
// const p = new Parent('Mark', 30);
// p.print();
class Child extends Parent {
    constructor(age) {
        // 자식의 생성자에는 super를 무조건 먼저 선언해야됨됨
        super("Mark Jr", age);
        this._name = "Mark Jr";
        this.gender = "male";
        this.printName();
    }
}
;
const c = new Child(1);
c.print();
