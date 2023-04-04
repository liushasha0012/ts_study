import $ from 'jquery';
import moduleLib from './module-lib.js';
import umdLib from './umd-lib.js';
$('#app').css('color', 'red');

globalLib({x: 2});
globalLib.doSomething();
moduleLib.doSomething();
console.log('****', moduleLib.version, '****')
console.log(umdLib.doSomething());

// 通过模块化插件给第三方类库拓展自己的属性和方法
import m from 'moment';
declare module 'moment' {
    export function myFunction(): void;
}


m.myFunction = () => {};

// 全局插件，会对全局命名空间造成污染
declare global {
    namespace globalLib {
        function doAnything(): void;
    }
}
globalLib.doAnything = function() {
    console.log('do any thing');
}