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