# Interface

```tsx
interface Person1 {
    name: string;
    age: number;
}

function hello1 (person: Person1 ): void {
    console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p1: Person1 = {
    name: "Mark",
    age: 39.
};

hello1(p1)
```

TypeScript에서 인터페이스 (interface)는 다른 타입들을 추상화하여 필요한 부분만 

선언할 수 있도록 하는 기능을 제공

인터페이스는 클래스나 객체의 구조를 정의할 때 유용하게 사용 

위 코드에서 `Person1` 인터페이스는 `name`과 `age` 프로퍼티를 선언하고 있음

`Person1` 인터페이스를 사용하여 `hello1` 함수를 정의하고 `p1` 객체를 생성하여 

`hello1` 함수에 전달하고 있다

### Optional property

```tsx
interface Person2 {
    name: string;
    age?: number; // 있을수도 있고 없을수도 있어서 ? 붙임
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name} 입니다`)
}

hello2({ name: "Mark", age: 39 })
hello2({ name: "Anna"})
```

TypeScript에서는 인터페이스에 선택적 프로퍼티를 선언할 수 있음 

`Person2` 인터페이스에서는 `age` 프로퍼티에 `?`를 붙여서 있을 수도 있고 없을 수도 있도록 

선언하고 있음 

이렇게 선택적 프로퍼티를 사용하면 인터페이스의 일부 프로퍼티만 필수로 선언하여 

유연한 타입 체크가 가능

```tsx
interface Person3 {
    name: string;
    age?: number;
    [index: string]: any;
}

function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다`)
}

const p31: Person3 = {
    name: "Mark",
    age: 39,
};

const p32: Person3 = {
    name: "Anna",
    systers: ['Sung', "Chan"]
}

const p33: Person3 = {
    name: "Bokdangegi",
    father: p31,
    mother: p32,
}

hello3(p31)
```

`Person3` 인터페이스에서는 인덱스 시그니처를 사용하여 `[index: string]: any`와 같은 형태로

인덱스 시그니처를 선언할 수 있음

인덱스 시그니처를 사용하면 인터페이스에 정의되어 있지 않은 프로퍼티를 추가로

정의할 수 있다

`p32`와 같이 `systers`라는 프로퍼티를 추가로 선언하여 `p33`와 같이 `father`, `mother`와

같은 복잡한 객체도 정의 가능

### Function in interface

```tsx
interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    hello: function(): void {
        console.log(`안녕하세요! ${this.name} 입니다`)
    }
};

const p42: Person4 = {
    name: 'Mark',
    age: 39,
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다`)
    }
};

// const p43: Person4 = {
//     name: 'Mark',
//     age: 39,
//     hello: (): void => {
//         console.log(`안녕하세요! ${this.name} 입니다`)
//     }
// };

p41.hello();
p42.hello();
```

`Person4` 인터페이스는 `name`, `age`, `hello()` 프로퍼티를 선언하고 있음

`hello()`는 매개변수가 없으며 반환값이 없는 함수로, `console.log`를 사용

`p41`과 `p42`는 `Person4` 인터페이스를 구현한 객체로, `name`, `age`, `hello()` 프로퍼티를 가지고 있

으며, `hello()` 메서드를 호출할 수 있음

`p41`은 객체 리터럴을 사용하여 생성하였고, `p42`는 메서드 축약 표현을 사용하여 생성

`p43`은 화살표 함수를 사용하여 `hello()` 메서드를 구현하였고, `this`가 `undefined`이 되어 오류가

발생함

### class implements interface

```tsx
interface IPerson1 {
    name: string;
    age?: number | undefined;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: number | undefined;
    
    constructor(name: string) {
        this.name = name;
    }
   
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다`)
    }
}

const person: IPerson1 = new Person("Mark");
person.hello();
```

`Person` 클래스는 `name`과 `age` 프로퍼티를 선언하고 있으며, `IPerson1` 인터페이스에서 요구하는

`hello()` 메서드를 구현하고 있음

`Person` 클래스의 생성자에서는 `name` 매개변수를 받아 `name` 프로퍼티를 초기화

`person` 변수는 `IPerson1` 타입으로 선언되어 있으며, `Person` 클래스의 인스턴스를 생성하여

할당

`person` 변수의 `hello()` 메서드를 호출하면 `Person` 클래스에서 구현한 메서드가 실행

### interface extends interface

```tsx
interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: "김지훈",
    city: "구미",
};
```

위 코드에서는 인터페이스 상속을 보여줌

`IPerson2` 인터페이스가 `name`과 `age` 프로퍼티를 선언하고 있으며, `IKorean` 인터페이스는 

`IPerson2` 인터페이스를 상속하여 `city` 프로퍼티를 추가로 선언

`k` 객체는 `IKorean` 인터페이스를 따르는 객체로, `name`, `age`, `city` 프로퍼티를 가지고 있음

### function interface

```tsx
interface HelloPerson {
    (name: string, age?: number): void
}

const helloPerson: HelloPerson = function(name: string) {
    console.log(`안녕하세요! ${name} 입니다`)
}

helloPerson('Mark', 39);
```

`HelloPerson` 인터페이스는 `(name: string, age?: number): void`와 같은 형태로

함수 시그니처를 선언할 수 있음

`HelloPerson` 인터페이스를 구현하는 `helloPerson` 변수는 함수를 할당받는 변수로, `name` 매개변수

는 필수로 선언되어 있고, `age` 매개변수는 선택적으로 선언되어 있음

`helloPerson('Mark')`와 같이 `age` 매개변수 값을 생략해도 오류가 발생하지 않음

### Readonly interface Properties

```tsx
interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    gender: "male",
};

p81.gender = "female";`gender` 프로퍼티
```

는 `readonly`로 선언되어 있으므로, 값을 변경할 수 없음

`p81` 객체는 `name`과 `gender` 프로퍼티를 가지고 있으며, `gender` 프로퍼티의 값은 `"male"`로 할당

하지만 `gender` 프로퍼티는 `readonly`로 선언되어 있기 때문에, 값을 변경하려고 하면 컴파일 오류

가 발생

### type alias vs interface

```tsx
// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
    (food: string): void;
}

// type alias
type PersonList = string[];

// interface
interface IPersonList {
    [index: number]: string;
}

interface ErrorHandling {
    success: boolean;
    error?: { message: string }
}

interface ArtistsData {
    artists: { name: string }[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistResponse;
```

TypeScript에서 `type alias`와 `interface`는 유사한 역할을 하지만 몇 가지 차이점이 있음

1. `type alias`는 기존 타입을 참조하여 새로운 타입을 생성하는데 사용되고, `interface`는 새로운 
2. 타입을 선언하는데 사용됨
3. `type alias`는 유니온 타입 등의 복잡한 타입을 선언할 때 사용되며, `interface`는 객체나 클래스의 구조를 선언할 때 사용됨
4. `type alias`는 확장이 불가능하지만, `interface`는 확장이 가능함

따라서, `type alias`는 복잡한 타입 선언에 유용하고, `interface`는 객체나 클래스의 구조를 명확하

게 하기 위해서 사용됨