// 定义泛型函数
function identity<T>(arg: T) : T {
    return arg;
}

let i1 = identity('wo shi string');  // 类型推论：编译器将 i1 判定为 string 类型

let i2 = identity<string>('string');  // 显式传入类型参数（既显式传入 T）

// 泛型类
class Human1<T> {
    run(value: T): T {
        return value;
    }
}

const human1 = new Human1<number>();
human1.run(1);

// 泛型约束
// 先定义一个接口声明 length 属性，然后让泛型 T 继承 这个接口
interface Length {
    length: number
}
class Human2<T extends Length> {
    run(value: T) {
        return value.length;
    }
}

const human2 = new Human2();
human2.run({length: 4});