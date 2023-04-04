// 命名空间可以避免全局污染的问题
/**
 * 命名空间用 namespace 声明
 * 命名空间内可以定义无限个变量，这些变量只能命名空间内可见。如果需要对外部可见，则需要使用 export 暴露给外面
 */
namespace Shape {
    const pi = Math.PI;
    export function circleLength(r: number) {
        return 2 * r * pi;
    }
}