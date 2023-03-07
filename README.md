# TypeScript

**= Language**

**= Typed Superset of Javascript**

**= compiles to plain Javascript**

# Type

Static Types

set during development

```jsx
// JavaScript
function add(n1, n2) {
	 if(typeof n1 !== 'number' || typeof n2 !== 'number') {
			throw new Error('Incorrect input!')
	 }
	return n1 + n2;
}

const result = add(39, 28)

// TypeScript

function add(n1: number, n2: number) {
	return n1 + n2;
}

const result = add(39, 28); 
```

### boolean

`boolean`은 논리값을 나타내는 자료형으로, `true`와 `false` 중 하나의 값을 가짐

TypeScript에서는 `boolean` 키워드를 사용해 boolean 값을 표현

```tsx
let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // 'boolean'

let isOk: Boolean = true;

let isNotOk: boolean = new Boolean(true);
```

`isNotOk` 변수는 `boolean` 자료형이 아닌 `Boolean` 객체 자료형을 가짐.

이러한 방식은 JavaScript에서 권장되지 않는 방법 중 하나이며, TypeScript에서도 `boolean` 자료형을 

사용하는 것이 권장됨.

### number

`number`은 TypeScript에서 숫자 값을 나타내는 기본 자료형

정수와 소수점 숫자를 모두 나타낼 수 있음

```tsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let notANumber: number = NaN;
let underscoreNum: number = 1_000_000
```

`number` 타입의 여러 변수를 선언

`decimal` 변수는 10진수 값 6을 할당, `hex` 변수는 16진수 값 0xf00d를 할당, `binary` 변수

는 2진수 값 0b1010을 할당, `octal` 변수는 8진수 값 0o744를 할당, `notANumber` 변수는 `NaN`을 할당

`underscoreNum` 변수는 백만을 나타내는 숫자 1000000을 할당

### string

`string`은 텍스트를 나타내기 위한 TypeScript의 기본 데이터 타입

```tsx
let name: string = 'John Doe';
let message: string = "Hello, world!";

let sentence: string = `hello, my name is ${name}`;
```

위 코드에서 변수 `name`은 문자열 값인 `'John Doe'`가 할당되고, 변수 `message`는 문자열 값인 `"Hello, world!"`가 할당

### symbol

`symbol`은 TypeScript에서 고유 식별자를 나타내는 원시 데이터 타입

객체 속성의 키로 사용되어 이름 충돌을 피하는 데 자주 사용

```tsx
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false
```

위 코드에서 `id1`과 `id2`는 모두 심볼

하지만 서로 다른 설명으로 생성되었기 때문에 서로 같지 않음

### null & undefined

`null`과 `undefined`는 TypeScript에서 모든 타입의 서브타입

즉, `string`, `number`, `boolean` 등 다른 타입의 변수에 `null` 또는 `undefined` 값을 

할당할 수 있음

하지만, `strictNullChecks` 옵션을 활성화하면, `null` 또는 `undefined` 값을 할당할 수 있는 변수를 

명시적으로 선언해야 함

```tsx
let name: string = null;
let age: number = undefined;
```

위 코드에서 변수 `name`은 `null` 값을 할당하고, 변수 `age`는 `undefined` 값을 할당

### object

`object`는 TypeScript에서 객체를 나타내는 데이터 타입

JavaScript 객체는 `{}`를 사용하여 생성되며, 객체의 속성은 `key: value` 형태로 정의

```tsx
let user: { name: string, age: number } = {
	name: 'John Doe',
	age: 30
};
```

위 코드에서 `user` 변수는 객체 타입으로 선언되었으며, `name`과 `age` 속성을 가지고 있음

### 배열(Array)

`array`는 요소(element)들의 모임을 나타내기 위한 데이터 타입

TypeScript에서 배열은 대괄호를 사용하여 선언 가능

```tsx
let fruits: string[] = ['apple', 'banana', 'orange'];
```

위 코드에서 `fruits` 변수는 문자열(string) 요소를 가진 배열(array)

또한, TypeScript에서는 Array 제네릭 타입을 사용하여 배열을 선언할 수도 있음

```tsx
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

위 코드에서 `numbers` 변수는 숫자(number) 요소를 가진 배열(array)

### tuple

`tuple`은 TypeScript에서 고정된 요소 수를 가진 배열을 표현하는 데 사용

배열과 달리 각 요소의 타입은 다를 수 있음

```tsx
let x: [string, number]

x = ["hello", 39];

// x[2]; Error

const person1: [string, number] = ["Mark", 39];

const [first, second] = person1
```

`x` 변수는 첫 번째 요소로 문자열(string) 값을, 두 번째 요소로 숫자(number) 값을 가지고 있음 

`person1` 변수는 문자열과 숫자 요소를 가진 튜플로 선언

`first`와 `second` 변수는 각각 `person1` 튜플의 첫 번째 요소와 두 번째 요소를 할당

### any

`any`는 TypeScript에서 모든 타입을 나타내는 특수한 데이터 타입

`any` 타입을 사용하면 변수의 타입을 명시적으로 선언하지 않아도 됨

```tsx
function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({ num: 0 })
// c.indexof("0");
```

`returnAny` 함수는 `any` 타입을 매개변수와 반환값으로 가짐

`any1` 변수는 `returnAny` 함수의 반환값으로 할당되며, `toString()` 메소드를 호출

`looselyTyped` 변수는 `any` 타입으로 선언되며, `d` 변수는 `looselyTyped` 객체의 속성 중

존재하지 않는 속성에 접근을 시도하여 `undefined` 값을 할당

`leakingAny` 함수는 `obj` 매개변수의 `num` 속성에 1을 더한 값을 반환

`c` 변수는 `leakingAny` 함수의 반환값으로 할당되며, `indexof()` 메소드는 정의되어 있지 않아 에러 

```
declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;

    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
}declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;

    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
}declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;

    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
}발생
```

### unknown

`unknown`은 TypeScript 3.0에서 새로 추가된 데이터 타입으로, `any`와 유사하지만 약간 다름

`unknown` 타입은 `any`와 같이 모든 타입의 값을 가질 수 있지만, 다른 점은 `unknown` 타입의 변수를

다른 변수에 할당할 때 명시적인 타입 검사가 필요

```tsx
declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;

    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
}
```

위 코드에서 `maybe` 변수는 `unknown` 타입으로 선언되어 있음

`unknown` 타입은 `any`와 마찬가지로 모든 타입의 값을 가질 수 있음 

하지만, `unknown` 타입의 변수를 다른 변수에 할당할 때는 명시적으로 타입 검사를 해주어야 함

따라서, `aNumber` 변수에 `maybe` 변수를 할당할 때는 명시적으로 타입을 `number`로 지정해주어야 함 

`maybe` 변수가 `true`인 경우 `aBoolean` 변수를 `boolean` 타입으로 선언하여 할당할 수 있음

그러나 `maybe` 변수가 `string`인 경우에는 `aString` 변수를 `string` 타입으로 선언하여 할당할 수 

있음

```
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while(true) {

    }
}

declare const a: string | number;

if(typeof a != "string") {
    a; // number
}

declare const b: string;

if(typeof b != "string") {
    b; // never
}
```

### never

`never`는 TypeScript에서 절대 발생하지 않는 값을 나타내는 데이터 타입

`never` 타입의 변수는 어떤 값도 가질 수 없으며, 항상 예외, 오류 등의 결과를 반환

```tsx
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while(true) {

    }
}

declare const a: string | number;

if(typeof a != "string") {
    a; // number
}

declare const b: string;

if(typeof b != "string") {
    b; // never
}
```

위 코드에서 `never` 타입은 함수에서 절대 반환되지 않음을 나타내는 특별한 데이터 타입

`error` 함수는 매개변수로 받은 문자열을 사용하여 `Error` 객체를 발생시키며, 함수의 반환값으로 

`never` 타입을 가짐

`fail` 함수는 `error` 함수를 호출하여 `never` 타입을 반환

`infiniteLoop` 함수는 무한 루프를 돌기 때문에 반환되지 않음을 명시적으로 표시하기 위해 `never` 

타입을 가짐

`a` 변수는 `string` 또는 `number` 타입으로 선언되어 있으며, `typeof` 연산자를 사용하여 `a` 변수의 

타입이 `string`이 아닌 경우 `number` 타입을 반환

`b` 변수는 `string` 타입으로 선언되어 있으며, `typeof` 연산자를 사용하여 `b` 변수의 타입이 

`string`이 아닌 경우 `never` 타입을 반환

### void

`void`는 TypeScript에서 함수의 반환 타입으로 사용

`void` 타입은 함수가 반환하는 값이 없음을 나타내며,

즉 함수가 실행되고 난 후에는 아무것도 반환하지 않음

```tsx
function logMessage(message: string): void {
  console.log(message);
}
```

위 코드에서 `logMessage` 함수는 `void` 타입을 반환하며,

`console.log` 함수를 호출하여 메시지를 출력

# System, Compiler

### 타입 호환성(Type Compatibility)

타입 호환성은 TypeScript 코드에서 타입 간의 호환 가능성을 말함

이는 TypeScript의 핵심 컨셉 중 하나이며, 코드의 유연성과 타입 안정성 간의 균형을 유지하는 데 중

요한 역할을 함

타입 호환성은 구조적 서브타이핑을 기반으로 함

구조적 서브타이핑은 타입 간의 구조가 서로 호환 가능한지 여부를 결정 

또한 TypeScript는 `extends` 키워드를 사용하여 타입 간의 상속 관계를 표현할 수 있음

타입 호환성에 대한 자세한 내용은 TypeScript 핸드북을 참조

http://json.schemastore.org/tsconfig

### 최상위 프로퍼티

- **compileOnSave**
- **extends**
- **compileOptions**
- **files**
- **include**
- **exclude**
- **references**

### files, include, exclude

- files
    - 상대 혹은 절대 경로의 리스트 배열입니다
    - exclude 보다 쎕니다
- include, exclude
    - glob 패턴 (마치. gitignore)
    - include
        - exclude 보다 약합니다
        - *같은걸 사용하면 .ts / .tsx / .d.ts만 include(allowJS)
    - exclude
        - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, <outDir>를
            
            default로 제외합니다.
            
        - <outDir>은 항상 제외합니다.(include에 있어도)
    

### typeRoots, types

`typeRoots`는 TypeScript 컴파일러가 타입 선언 파일을 찾는 위치를 지정하는 옵션

이 옵션을 사용하면 `node_modules/@types` 외에 다른 디렉토리에서도 타입 선언 파일을 

찾을 수 있음

`types` 설정은 `typeRoots` 설정으로부터 찾아내는 타입 선언 파일 중에서 

선택적으로 사용할 수 있는 파일을 명시하는 옵션

이 옵션을 사용하면 `typeRoots` 설정에 명시된 위치에서 타입 선언 파일 전체를 

사용하는 것이 아니라, 필요한 타입 선언 파일만 선택하여 사용할 수 있음

이를 통해 컴파일 시간을 단축 가능

**typeRoots와 types는 같이 사용하지 않음**

### target 과 lib

TypeScript에서 `target` 옵션은 컴파일된 JavaScript 코드가 어떤 버전의 ECMAScript 

명세를 따르는지를 설정

예를 들어, `target`을 ES5로 설정하면 TypeScript 컴파일러는 ES5 명세에 따라 호환되는 

자바스크립트 코드를 생성

`lib` 옵션은 TypeScript 컴파일러가 가져올 라이브러리를 지정

이 값은 `target` 옵션에 따라 자동으로 설정됩니다.

예를 들어, `target` 옵션을 ES5로 설정하고 `lib` 옵션을 ES6로 설정하면, TypeScript 컴파일러는

ES5 명세에 따라 호환되는 자바스크립트 코드를 생성하면서 ES6 라이브러리를 가져올 수 있습니다.

### outDir, outFile, rootDir

### outDir

`outDir`은 컴파일된 파일의 출력 디렉토리를 설정하는 옵션

 TypeScript 컴파일러는 여러 개의 TypeScript 소스 파일을 컴파일한 후, 

`outDir` 옵션에 지정된 디렉토리에 컴파일된 JavaScript 파일들을 저장

### outFile

`outFile`은 컴파일된 파일의 출력 파일 이름을 설정하는 옵션

TypeScript 컴파일러는 여러 개의 TypeScript 소스 파일을 컴파일한 후, 

`outFile` 옵션에 지정된 파일 이름으로 컴파일된 JavaScript 파일을 하나로 합쳐서 저장

### rootDir

`rootDir`은 TypeScript 소스 파일의 루트 디렉토리를 설정하는 옵션

TypeScript 컴파일러는 `rootDir` 옵션에 지정된 디렉토리를 기준으로 

상대 경로로 소스 파일을 찾음

따라서 `rootDir` 옵션을 사용하면 TypeScript 소스 파일의 상대 경로를 짧게 유지할 수 있음

### strict

TypeScript에서 `strict` 옵션은 다양한 타입 체킹 옵션을 활성화

 이 옵션을 사용하면 코드의 안정성과 가독성을 높일 수 있음

- `noImplicitAny`: 암시적 any 타입을 금지
- `strictNullChecks`: null과 undefined의 사용을 제한
- `strictFunctionTypes`: 함수 타입의 호환성을 검사
- `strictBindCallApply`: bind, call, apply 함수의 인자의 타입을 검사
- `strictPropertyInitialization`: 클래스의 멤버 변수의 초기화를 강제
- `alwaysStrict`: strict 모드를 항상 활성화

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