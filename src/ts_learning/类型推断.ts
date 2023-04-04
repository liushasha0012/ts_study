let x = 1;
let y = (x: number) => x + 1;
let z = [1];
let y2 = (x = 1) => x;

// 最佳通用类型推断
let x2 = 1 || 's' || [];

let x3 = [1, '2', [3], null];

// 上下文类型推断
window.onmousedown = function(event) {
    console.log(event.button)
}

