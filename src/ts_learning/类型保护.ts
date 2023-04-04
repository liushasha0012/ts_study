interface Type {
    strong: boolean,
    weak: boolean;
}

class Java {
    helloJava() {
        console.log('hello Java');
    }
    java = 'java';
}

class JavaScript {
    helloJavaScript() {
        console.log('hello JavaScript');
    }
    javascript = 'javascript';
}

function sayHello(type: Type, id: string | number): void {
    let lang = type.strong ? new Java() : new JavaScript();
    // 使用 instanceof
    // if(lang instanceof Java) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // 使用 in 
    // if('java' in lang) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript();
    // }

    // 使用 typeof
    if(typeof id === 'string') {
        console.log(id.length);
    } else {
        console.log(id.toFixed(2));
    }

    // 使用自定义类型保护函数
    if(isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }
} 

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined;
} 