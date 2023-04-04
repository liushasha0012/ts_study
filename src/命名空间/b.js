// 直接使用 tsc 编译这个文件会报错，因为命名空间的引用和模块是不一样的，直接运行的话会报找不到 Shape.circleLength 方法的错误。
// 解决：
/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function squre(w) {
        return Math.pow(w, 2);
    }
    Shape.squre = squre;
})(Shape || (Shape = {}));
console.log(Shape.circleLength(2));
console.log(Shape.squre(2));
