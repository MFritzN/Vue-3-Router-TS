export class User {

    public name: string;

    public description: string;

    public id: number = -1;

    constructor(name: string, description: string,) {
        this.name = name;
        this.description = description;
    }
}