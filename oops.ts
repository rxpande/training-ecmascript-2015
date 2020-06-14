class Animal {
    public name: string;
    protected constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Horse extends Animal {
    public constructor(name: string) { super(name); }
    public move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let tom: Animal = new Horse("Tommy the Palomino");
tom.move(34);