function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들이 생김

function hello(message: any): any {
  return message;
}

console.log(hello("mark").length);
console.log(hello(39).length);

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));