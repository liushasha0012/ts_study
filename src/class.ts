class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const animal1 = new Animal('cat');
// console.log(animal1.name)