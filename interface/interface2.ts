interface Person2 {
    name: string;
    age?: number; // 있을수도 있고 없을수도 있어서 ? 붙임
}

function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name} 입니다`)
}

hello2({ name: "Mark", age: 39 })
hello2({ name: "Anna"})
