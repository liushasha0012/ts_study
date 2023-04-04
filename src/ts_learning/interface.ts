// 接口的定义
interface List {
    readonly id: number, // readonly 用来声明只读属性，只读属性不可以修改
    name: string
};
interface Result {
    data: List[]
}

function printData(result: Result) {
    result.data.map((item) => {
        console.log(item.id, item.name);
        // item.id++;
    })
}

let res = {
    data: [
        {id: 1, name: 'A', sex: 'male'}, // TS 自带鸭式类型判断，只要一个对象符合接口的必要条件，则类型检查不会报错，因此这里多出 sex 属性也没关系。
        {id:2, name: 'B'}
    ]
}
printData(res);

printData({
    data: [
        {id: 1, name: 'A', sex: 'male'}, // 如果是对象字面量的形式传入，则会进入类型判断，要规避的话，需要使用类型断言。
        {id:2, name: 'B'}
    ]
} as Result)

// 当不确定接口中有多少属性的时候，可以使用可索引类型
interface stringArray {
    [index: number]: string; // 表示stringArray 类型中用数字索引访问值时，返回的是一个字符串
}
let strArray: stringArray = ['x', 'y'];

// 字符串可索引类型
interface obj {
    [prop: string]: string,
}
let obj3: obj = {
    name: 'lss',
    age: '18'
}

// 使用接口定义一个函数
interface Add {
    (x: number, y: number): number
} 

// 使用类型别名定义一个函数
type Add2 = (x:number, y: number) => number;

let add2: Add = (a, b) => a+b;
let add3: Add2 = (a, b) => a + b;

add2(1,2);

// 混合接口，接口里面既可以定义函数，也可以像对象一样拥有属性和方法。
interface Lib {
    (): void; // Lib 是一个函数类型，且返回值为空
    version: number,
    doSomething(x: string): void;
}



// 要想创建 Lib 的多个实例，则可以使用函数封装一下
function getLib(version: number): Lib {
    let lib: Lib = (() => {}) as Lib; // 这个 Lib 是一个单例
    lib.version = version;
    lib.doSomething = (x) => {};
    return lib;
}

