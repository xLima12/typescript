//classes

class Character {
    name: string;
    strength: number;
    skill?: number;

    constructor(name: string, strength: number, skill?: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public attack(): void {
        console.log(`Attack with  ${this.strength} points`);
    }
}

const p1 = new Character("Felipe", 45, 88)
console.log(p1.attack());

// modificadores (data modifiers) public, private, protected

class Magician extends Character {
    magicPoints: number

    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }

}