interface Human {
	name: string,
    activity(): void
}
    
class Female implements Human {
	name: string
  	constructor(name: string) {
    	this.name = name;
    }
  	activity() {}
  	sleep() {}
}

interface Man extends Human {
    run() : void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {

}

let boy: Boy = {
    name: 'putao',
    activity() {},
    run() {},
    cry() {}
}

// 接口继承类
 class Auto {
     state = 1;
     private state2 = 2;
 }

 interface AutoInterface extends Auto {}

//  class Bus implements AutoInterface {
//     state = 2;
//  }

 // 子类也可以实现接口
 class AutoChild extends Auto implements AutoInterface {} // 这种时候不需要显示声明 state，因为子类继承了超类 Auto 中的属性