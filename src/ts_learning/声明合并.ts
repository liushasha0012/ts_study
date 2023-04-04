/**
 * 什么是声明合并？
 * 声明合并就是同一个名字的不同声明会合并在一起，成为一个结构体。这个结构体具有各个声明的特征。
 * 
 * 接口与接口的声明合并
 * 
 * 命名空间与函数的声明合并
 * 命名空间与类的声明合并
 * 命名空间与函数的声明及类的声明合并时，需要注意把命名空间声明放在后面
 * 
 * 命名空间与枚举的声明合并
 */

interface S {
    a: Number,
    foo(bar: number): number; // 5
    foo(bar: 'b'): number; // 2

}
interface S {
    b: number;
    foo(bar: string): string; // 3
    foo(bar: string[]): string[]; // 4
    foo(bar: 'a'): number; // 1
}

let s: S = {
    a: 1,
    b: 1,
    foo(bar: any) {
        return bar;
    }
}

// 命名空间和函数的合并
function Lib() {}
namespace Lib{
    export let version = '1.0.0';
}
console.log(Lib.version);

// 命名空间和类的合并
class C {
}

namespace C {
    export const state = 1;
}
console.log(C.state);

// 命名空间和枚举的合并
enum Color1 {
    red,
    blue,
    green
}

namespace Color1 {
    export function mix() {}
}
console.log(Color1);