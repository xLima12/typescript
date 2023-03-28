//Interfaces (type x interface)

type robot = {
    readonly id: number | string;
    name: string;
};

const bot: robot = {
    id: 1,
    name: 'megaman'
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 = {
    id: 1,
    name: 'megaman',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Pessoa implements robot2 {
    readonly id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello my name is ${this.name}`;
    }

}

const pessoa  = new Pessoa(1, "Felipe");
console.log(pessoa.sayHello());