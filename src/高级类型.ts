// 交叉类型
interface Run {
    run(): void;
}
interface Jump {
    jump(): void;
}

let pet: Run & Jump = {
    run() { },
    jump() { }
}

// 字面量联合类型
let b: 'a' | 'b' | 'c';
b = 'c';

let c: 0 | 1 | 2;
c = 0;

// 对象联合类型
class Dogs implements Run {
    run() {}
    eat() {}
}
class Cats implements Jump {
    jump() {}
    eat() {}
}

enum Mater {
    Boy,
    Girl
}

function isPet(master: Mater) {
    let pet = master === Mater.Boy ? new Dogs() : new Cats();
    console.log(pet.eat()); // 只能访问共有成员
    return pet;
}

// 可区分的联合类型
interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle'
    r: number
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch(s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.r ** 2;
        default:
            return ((e: never) => {throw new Error('这里报错了')})(s);
    }
}

// 索引类型
// 索引查询操作符
interface Obj {
    a: number,
    b: number
}
let key: keyof Obj;
// 索引访问操作符
let value: Obj['a'];
value = 1;

let obj = {
    a: 1,
    b: 2,
    c: 3
};

function getValue(obj: any, keys:string[]) {
    return keys.map(key => obj[key]);
}

console.log(getValue(obj, ['a', 'b']));
console.log(getValue(obj, ['e', 'f']));  // 想让 TS 对obj 中没有的属性报错

function getValue2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
console.log(2, getValue2(obj, ['a', 'b']));
console.log(2, getValue2(obj, ['c']));

// 映射类型
interface OriginObj {
    a: number,
    b: number,
    c: number
}

type ReadonlyObj = Readonly<OriginObj>;  // 只读映射
type PartialObj = Partial<OriginObj>; // 可选映射
type PickObj = Pick<OriginObj, 'a'>

