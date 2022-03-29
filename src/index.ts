import './dataType';
import './interface';

let hello: string = 'hello world';
let app = document.getElementById("app");
if(app) {
    app.innerHTML = hello;
}