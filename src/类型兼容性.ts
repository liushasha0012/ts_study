let a: string = 's';
a = null;  // 字符串类型兼容了 null 类型

// 接口的兼容性
interface X {
    a: any,
    b: any
}
interface Y {
    a: any,
    b: any,
    c: any
}

let x1:X = {
    a: 1,
    b: 2
}
let y1: Y = {
    a: 2,
    b: 3,
    c: 4
}
x1 = y1;

// 函数兼容：判断函数是否兼容发生在两个函数相互赋值的情况
// 函数的参数个数固定，参数少的可以兼容参数多的。
type handler = (x: number, y: number) => void;
function hof(handler: handler) {
    return handler;
}

let handler1 = (x:number, y: number) => {}
hof(handler1);

let handler2 = (a: number) => {}
hof(handler2);

let handler3 = (a:number, b: number, c: number) => {}
hof(handler3);

// 可选参数和剩余参数
let handler4 = (p1: number, p2: number) => {}
let handler5 = (p1?: number, p2?:number) => {}
let handler6 = (...args: number[]) => {}
handler4 = handler5; // 固定参数兼容可选参数
handler4 = handler6; // 固定参数兼容剩余参数
handler5 = handler4
handler6 = handler4; // 剩余参数兼容固定参数
handler6= handler5; // 剩余参数兼容可选参数

let handler7 = (a: string) => {}
hof(handler7);

interface p1 {
    x: number,
    y: number,
    z: number
}
interface p2 {
    x: number,
    y: number
}
let fp1 = (p: p1) => {}
let fp2 = (p: p2) => {}

fp1 = fp2;
fp2 = fp1;
// 返回值类型
let f1 = () => ({name: 'lss'});
let f2 = () => ({name: 'lss1', age: 26});

f1= f2; // 子类兼容父类

// 函数重载
function overload(a:number, b: number): number;
function overload(a: string, b: string): string;

function overload(a: any, b: any): any {};

// 枚举类型的兼容性
enum Fruit{
    Apple,
    Banana
}
enum Color {
    Red,
    Blue
}

let fruit: Fruit.Apple = 1; // 枚举类型和数字类型兼容
let no: number = Fruit.Apple;
let co: Color.Blue = Fruit.Apple;  // 不同枚举类型之间不兼容
let num: number = 0;
num = Color.Blue; // 数字类型和枚举类型兼容

// 类的兼容性：只比较实例属性
class A {
    constructor(a: number, b: number) {}
    static xingming = 'lss';
    id: number = 1;
    age = 18;
    // private age = 18;
}

class B {
    id: number = 2;
    age = 19;
    // private age = 19;
}
let aa = new A(1,2);
let bb = new B();
aa = bb;
bb = aa;
class Achild extends A {}
class BChild extends B {}

let achild = new Achild(2,3);
let bchild = new BChild();
achild = aa;
bchild = bb;
bb = bchild;
aa = achild;





// 泛型兼容性
interface F1<T> {
    // value: T
}
interface F2<T>{}

let f11: F1<string> = {}
let f21: F2<number> = {}
f11 = f21;
f21 = f11;

// 泛型接口
let  F3 =  <T>(value: T) => {
    console.log('x');
    return value;
}
let F4 = <U>(value: U) => {
    console.log('y');
    return value;
}

F3 = F4;
F4 = F3;

interface Named {
    name: string
}

class Person {
    name = 'lss'
}

let name1: Named;
name1 = new Person();
let name2 = {name: 'ss', age: 18};
name1 = name2;

function greet(n: Named) {
    console.log(n.name);
}
greet(name2);

let fn1 = (x: number) => 0;
let fn2 = (x: number, y: number) => 1;
fn2 = fn1; // 函数参数多的可以兼容函数参数少的

let fn3 = (a: string, b: string) => ({name: 'lss', age: 18});
let fn4 = (a: string) => ({name: 'lss', age: 18, location: 'Zhejiang Hangzhou'});

fn3 = fn4;


