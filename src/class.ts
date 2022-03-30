class Animals {
    name: string
    constructor(name: string) {
        this.name = name; // name 属性在实例上而不是在原型上
    }
    run() {}
    private eat() {}
    protected sleep() {}
}
const animal1 = new Animals('cat');
// animal1.sleep(); // 属性“sleep”受保护，只能在类“Animals”及其子类中访问。


// 类的继承
class Cat extends Animals {
    // age?: number;
    constructor(name: string, public age: number) { // 在构造函数的参数前使用 public，表示这个属性是在实例上的属性。且不需要在类中声明属性类型，使代码更简洁。
        super(name);
        this.age = age;
        this.sleep();
    }
}
const cat = new Cat('小葡萄', 2);
// cat.eat()
// 类的成员修饰符
/**
 * public: 对所有成员都可见。类中的成员默认是 public 的。也可以在成员前显示加上 public
 * private: 表示私有成员，仅仅可以被类本身调用，不可以被实例或子类调用。但是这种私有只是在编译时起到作用，在运行时并没有实现私有属性。
 *      如果在 constructor 前加上 private，表示这个类既不可以被实例化，也不可以被继承
 * protected： 受保护的成员只能在类或子类中访问，实例中不能访问
 * static：静态属性，只能通过类自身调用。
 * readonly：表示只读属性，不可以更改
 */

// 抽象类实现多态
abstract class Animals2 {
    name: string
    age?: number
    constructor(name: string, age?: number) {
        this.name = name;
        age && (this.age = age);
    }
    abstract sleep(): void
}
class Dog extends Animals2 {
    constructor(name: string, age?:number) {
        super(name, age);
        this.name = name;
        age && (this.age = age);
    }
    sleep(): void {
        console.log('dog sleep');
    }
}

class Pig extends Animals2 {
    sleep(): void {
        console.log('pig sleep longer');
    }
}
const puppy = new Dog('wangwang', 1);
const piggy = new Pig('小猪猪', 2);
let animals: Animals2[] = [puppy, piggy]
animals.forEach((item) => {
    console.log(item.sleep());
})

// this 类型 —— 使用 this 类型，可以实现类方法中的链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

let workflow1 = new WorkFlow();
workflow1.step1().step2(); // 链式调用

// 当某一个子类继承 WorkFlow 的时候也可以实现 this 的多态：this既可以是父类，也可以是子类
class ChildWorkFlow extends WorkFlow {
    next() {
        return this;
    }
}
let childworkflow = new ChildWorkFlow();
childworkflow.next().step1().step2().next();
console.log(childworkflow.next().step1());
