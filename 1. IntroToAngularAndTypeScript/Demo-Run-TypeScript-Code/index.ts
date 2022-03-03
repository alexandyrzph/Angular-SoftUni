class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} say hello!`;
    }
}

const user = new User('John Doe'); 
console.log(user.sayHello());