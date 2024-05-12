import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDreases() {
        const fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncreases() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDreases() {
        const fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
const { player } = await inquirer.prompt([
    {
        name: "player",
        type: "input",
        message: "enter your name",
    },
]);
const { opponent } = await inquirer.prompt([
    {
        name: "opponent",
        type: "list",
        choices: ["Skeleton", "Alien", "Zombie"],
        message: "select your Opponent",
    },
]);
const p1 = new Player(player);
const o1 = new Opponent(opponent);
while (true) {
    // skeleton portion //
    if (opponent === "Skeleton") {
        const { opt } = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your life"],
                message: "what would you like to do",
            },
        ]);
        if (opt === "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel === 0) {
                    console.log(`you loose better luck next time`);
                    break;
                }
            }
            else if (num <= 0) {
                o1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel === 0) {
                    console.log(`conguratulation! you win`);
                    break;
                }
            }
        }
        if (opt === "Drink Portion") {
            p1.fuelIncreases();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (opt === "Run for your life") {
            console.log(`you loose better luck next time`);
            break;
        }
    }
    // Alien Portion
    if (opponent === "Alien") {
        const { opt } = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your life"],
                message: "what would you like to do",
            },
        ]);
        if (opt === "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel === 0) {
                    console.log(`you loose better luck next time`);
                    break;
                }
            }
            else if (num <= 0) {
                o1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel === 0) {
                    console.log(`conguratulation! you win`);
                    break;
                }
            }
        }
        if (opt === "Drink Portion") {
            p1.fuelIncreases();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (opt === "Run for your life") {
            console.log(`you loose better luck next time`);
            break;
        }
    }
    // Zombie Portion//
    if (opponent === "Zombie") {
        const { opt } = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your life"],
                message: "what would you like to do",
            },
        ]);
        if (opt === "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel === 0) {
                    console.log(`you loose better luck next time`);
                    break;
                }
            }
            else if (num <= 0) {
                o1.fuelDreases();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel === 0) {
                    console.log(`conguratulation! you win`);
                    break;
                }
            }
        }
        if (opt === "Drink Portion") {
            p1.fuelIncreases();
            console.log(`your drink health portion your fuel is ${p1.fuel}`);
        }
        if (opt === "Run for your life") {
            console.log(`you loose better luck next time`);
            break;
        }
    }
}
