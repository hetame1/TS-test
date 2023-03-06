# TypeScript

**= Language**

**= Typed Superset of Javascript**

**= compiles to plain Javascript**

## Type

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