# Class

**object 를 만드는 blueprint (청사진, 설계도)**

**OOP 를 위한 초석**

### Constructor & initialize

```tsx
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

const p1 = new Person("Mark");

console.log(p1);
```

`Person` 클래스를 정의하며, 이 클래스는 `name` 속성과 이름을 설정하는 생성자를 갖고 있음

클래스는 객체를 만드는 청사진 또는 설계도로, 객체 지향 프로그래밍에서 매우 중요한 개념

클래스를 사용하면 코드를 더욱 구조화하고 유지보수가 용이해짐

- 생성자 함수가 없으면, 디폴트 생성자가 불린다
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 ! 를 붙여서
    
    위험을 표현한다
    
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다
- 생성자에는 async를 설정할 수 없다

```tsx
class Person {
  name: string = "Mark";
   age!: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
  async init() { }

} 

const p1 = new Person(39);

// p1.age = 30;
console.log(p1);
```

`Person` 클래스의 `init` 메서드는 객체를 추가 데이터로 초기화하거나 필요한 모든 설정을 

수행하는 데 사용할 수 있음

그러나 이 메서드는 `async` 메서드가 될 수 없으므로, 비동기 작업이 필요한 경우 메서드 외부에서 

처리해야 함

또한, 클래스 프로퍼티가 선언되거나 생성자에서 값이 할당되지 않으면, 프로퍼티는 `undefined`로 

초기화 

### Access Modifiers

- 접근 제어자에서 public, private, protected 가 있다
- 설정하지 않으면 public 이다
- 클래스 내부의 모든 곳에(생성자, 프로퍼티, 메서드) 설정 가능하다
- private 으로 설정하면 클래스 외부에서 접근할 수 없다

```tsx
class Person {

  public constructor(public name: string, private _age?: number) {
    
  }
} 

const p1 = new Person("Makr", 39);

console.log(p1.name);
```

Js에서 `private` 을 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 _를 붙여 표현 했음

이 클래스에는 사람의 `이름`과 `나이`를 설정하는 생성자가 있음 `이름` 속성은 공개(public)되어 

있으며, `나이` 속성은 비공개(private)

### Getters & Settters

```tsx
class Person {

  public constructor(public _name: string, private age: number) {}

  get name() {
    //
    console.log("get")
    return this._name;
  }

  set name(n: string) {
    console.log("set")
    this._name = n;
  }

} 

const p1 = new Person("Makr", 39);

console.log(p1.name); // get 을 하는 함수를 getter
p1.name = "Jihoon"; // set 을 하는 함수를 setter
```

`"name"`이라는 `getter` 함수와 `"_name"` 매개변수를 설정하는 `setter` 함수가 있음

클래스 내부에 `get` 키워드와 함께 getter 함수를 작성하면, 해당 프로퍼티를 호출할 때마다 getter 

함수를 실행 getter 함수는 `return` 키워드를 통해 값을 반환하며, 클래스 외부에서는 일반 프로퍼티

처럼 접근할 수 있음

`set` 키워드와 함께 setter 함수를 작성하면, 해당 프로퍼티에 값을 할당할 때마다 setter 함수가 실행

setter 함수는 파라미터를 받아들이며, 이를 통해 값을 설정

### readonly

```tsx
class Person {

  public readonly name = 'Mark';
  private readonly country: string = 'Korea';

  public constructor(private _name: string, private age: number) {
    this.country = "Korea";
  }

  hello() {
    this.country = 'China';
  }

} 

const p1 = new Person("Makr", 39);

console.log(p1.name); 
p1.name = "Jihoon";
```

`readonly` 키워드를 사용하여 클래스 내에서 읽기 전용 프로퍼티를 만들 수 있음

`readonly` 프로퍼티는 생성자에서만 초기화 가능

`hello` 함수에서 `country` 값을 변경하려고 하면, `readonly` 키워드 때문에 컴파일 에러가 발생함

### Index Signatures

```tsx
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female, alex: 'male', anna: 'female'}

class Students {
  [index: string]: "male" | "female";

  mark: "male" = "male";
}

const a = new Students();

a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);
```

`Students` 클래스에는 문자열 값 키와 "male" 또는 "female" 값 중 하나를 가진 속성을 만들 수있는

 인덱스 시그니처가 있습니다. 

`mark` 속성은 "male"의 값을 명시 적으로 선언합니다. 

`Students` 클래스의 두 인스턴스가 만들어지고 속성이 도트 표기법과 대괄호 표기법을 사용하여 할

당됩니다. 

이러한 방식으로 인덱스 시그니처를 사용하면 문자열 키와 제한된 값 집합을 가진 속성을 포함 할 수

있는 유연하고 동적인 클래스를 만들 수 있습니다.

### Static Properties & Methods

```tsx
class Person {
  private static CITY = "Seoul";
  public static hello() {
    console.log('안녕하세요', Person.CITY)
  }
  public change() {
    Person.CITY = "La";
  }
}

const p1 = new Person();
Person.hello();

const p2 = new Person();

p1.change();
```

위 코드에서 `Person` 클래스는 `CITY`라는 `static` 프로퍼티를 가지고 있음

`static` 프로퍼티는 클래스의 인스턴스가 생성되기 전에 호출 가능하며, 모든 인스턴스들이 공유

`hello()` 메서드는 `static` 메서드로 선언되어 있기 때문에 클래스에서 직접 호출 가능

`p1.change()` 메서드를 통해 `CITY` 값을 "La"로 변경한 후, `Person.hello()`를 호출하면 "안녕하세요 La"가 출력

### Singletons

```tsx
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance() {
     // ClassName 으로부터 만든 object가 있으면 그걸 리턴
     // ClassName 으로부터 만든 object가 없으면, 만들어서 리턴

     if (ClassName.instance === null) {
      ClassName.instance = new ClassName;
     }

     return ClassName.instance;
  }
  private constructor() {}
}

const a = ClassName.getInstance();
const b = ClassName.getInstance();
```

싱글톤 패턴은 클래스의 인스턴스를 하나만 생성하고 전역적으로 접근 가능하게 하는 디자인 패턴

### 상속(Inheritance)

```tsx
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
```

Parent 클래스는 `name`과 `age`를 받는 생성자와 `name`과 `age`를 로그에 출력하는 `print` 메서드, 그

리고 `protected`로 지정된 `printName` 메서드를 가지고 있음

Child 클래스는 Parent 클래스를 상속하며, 자체적으로 `_name`과 `gender` 인스턴스 변수를 가지고 있

고 Child 클래스는 `age` 매개변수를 받는 생성자를 가지며, `Parent` 클래스의 생성자를 호출

호출 시 `Mark Jr`이라는 기본 이름과 매개변수로 받은 `age`를 전달 그 후 `printName` 메서드를 호출

하고, 마지막으로 `Parent` 클래스로부터 상속받은 `print` 메서드를 호출

`protected` 접근 제한자는 `printName` 메서드가 `Child` 클래스에서는 접근 가능하지만 외부 클래스

에서는 접근 불가능하도록 함 즉, 상속을 받은 자식 클래스에서만 접근 가능

`super` 키워드는 부모 클래스의 생성자를 호출하기 위해 사용하며, 자식 클래스에서 생성자를 사용

할 경우 반드시 사용

`extends` 키워드를 사용하여 상속을 구현 자식 클래스에서 `super` 키워드를 사용하여 부모 클래스의 

프로퍼티와 메서드를 호출 

자식 클래스의 생성자에서는 부모 클래스의 생성자를 호출하기 위해 `super()`를 호출해야 하며, 이

후에 부모 클래스의 프로퍼티와 메서드에 접근할 수 있음