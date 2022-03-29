// 定义泛型函数
function identity<T>(arg: T) : T {
    return arg;
}

let i1 = identity('wo shi string');  // 类型推论：编译器将 i1 判定为 string 类型

let i2 = identity<string>('string');  // 显式传入类型参数（既显式传入 T）

// 泛型类型



