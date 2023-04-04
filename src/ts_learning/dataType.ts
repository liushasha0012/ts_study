// 函数
let add = (x: number,y: number) => x + y; // 使用 TS 类型推断，add 函数的返回值会被自动推断为 number 类型
let comput: (x: number, y: number) => number;  // 定义了函数类型，但是没有写具体的函数

// 对象
let obj1: {x: number, y: number} = {x:1, y: 2};
obj1.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// never：一个函数永远不会有返回值的类型
let error = () => { // 抛错终止执行的函数
    throw new Error('an error occured');
}

let endless = () => { // 具有死循环的函数
    while(true) {  

    }
}

// 枚举类型

// 数字枚举
enum SMType {
    text,
    symbol,
    slice,
    shape,
    group,
    hotspot,
}
console.log(SMType, SMType[0]);

enum fillTypeMap { // TS 编译之后使用了反向映射
    Color,  // 后面的成员会依次递增
    Gradient,
    Pattern = 4
};
console.log(fillTypeMap, fillTypeMap[4]);

// 字符串枚举
enum message {
    success = '恭喜你，闯关成功',
    fail = '很遗憾，闯关失败',
}

// 异构枚举：字符串枚举和数字枚举混合使用
enum Answer {
    N,
    Y = 'yes'
}
/**
 * 
 * Answer: {
 *      0: "N"
        N: 0
        Y: "yes"
    }
 */
console.log('Answer===', Answer);

// 枚举成员的性质
/**
 * 1. 枚举成员的值是只读类型
 * 2. 枚举成员的分类：常量枚举：编译时就得到确定的值
 *          computed number：需要计算的成员，在编译阶段不会计算，要执行阶段才会计算
 *      在 computed number 后面的成员一定要有初始值
 * 3. 常量枚举成员不会出现在编译后的代码中。
 */
// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

// 枚举类型，以下情况可以作为枚举类型
/**
 * 1. 所有成员没有初始值
 * 2. 所有成员都是 Number 类型
 * 3. 所有成员都是 String 类型
 * 
 * 
 * 两种不同的枚举类型不可以进行比较
 */

enum E {a, b}
enum F {a=0, b=1}
enum G {a='apple', b='orange'}

// 枚举类型
let e: E = 1;  // 可以给枚举类型赋值任意数值
let f: F = 3;

// 枚举成员类型
let e1: E.a = 0;
let e2: E.b = 3;
let e3: E.a = 5;
e1 === e3; // 相同的枚举成员类型才可以作比较

let g1: G = G.a;  // 字符串的枚举类型的值只能是枚举类型的成员
let g2: G.b = G.b;