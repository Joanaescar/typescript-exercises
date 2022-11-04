/* function getDaysToLocation(kilometersAway: number) {
    let milesPerKilometer: number = 0.621;
    let speedMph: number = 17500;
    let milesAway: number = (kilometersAway * milesPerKilometer);
    let hoursToLocation: number = (milesAway / speedMph);
    let daysToLocation: number = (hoursToLocation / 24);
    return daysToLocation;
};

getDaysToLocation(225000000);

let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

let milesToMars: number = (kilometersToMars * milesPerKilometer);
let hoursToMars: number = (milesToMars / speedMph);
let daysToMars: number = (hoursToMars / 24);

//console.log(`${spacecraftName} ${daysToMars} `);

console.log(`${getDaysToLocation(kilometersToMars)} ${spacecraftName}`);
console.log(`${getDaysToLocation(kilometersToTheMoon)} ${spacecraftName}`); */

let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

class SpaceLocation {
    kilometersAway: number;
    name: string;

    constructor(name: string, kilometersAway: number) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
}

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number) {
        let milesAway: number = (kilometersAway * this.milesPerKilometer);
        let hoursToMars: number = (milesAway / this.speedMph);
        return hoursToMars / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`[Spacecraft]${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
};

let spaceShuttle = new Spacecraft('Determination', 17500);

console.log(`${spaceShuttle.getDaysToLocation(kilometersToMars)} ${spaceShuttle.name}`);
console.log(`${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} ${spaceShuttle.name}`);

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));


