// // 定义静态类型
// let count: number = 1;  // count 这个变量永远是数据类型，count 继承了 Number 上的属性和方法

// let b: any; // 设置为任意类型，相当于对该变量关闭了类型检测
// b=1;
// b='male';
// b=false;
// b = {};

// let b1; // 隐式 any
// b1 = 10;

// let a: "male" | "female";
// a='male'
// a='female'


// count = b1;
// let b2: unknown;
// b2 = 100;

// count = b2 as number; // 类型断言
// count = <number>b2;

// // 限制对象属性的类型

// let obj: {
//     name: string,
//     [propName: string]: any
// }
// obj = {
//     name: 'lss',
//     age: 20,
//     sayHi() {
//         console.log('hi');
//     }
// }

// // 限制函数
// let fn: (a: number, b: number) => number;
// fn = function(n1, n2) {
//     return n1 + n2;
// }

// type MyType = 1|2|3|4|5|6
// let t1: MyType;
// t1 = 1;
// let t2: MyType;
// t2 =2;