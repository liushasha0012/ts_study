// 命名空间可以避免全局污染的问题
/**
 * 命名空间用 namespace 声明
 * 命名空间内可以定义无限个变量，这些变量只能命名空间内可见。如果需要对外部可见，则需要使用 export 暴露给外面
 */
var Shape;
(function (Shape) {
    var pi = Math.PI;
    function circleLength(r) {
        return 2 * r * pi;
    }
    Shape.circleLength = circleLength;
})(Shape || (Shape = {}));
