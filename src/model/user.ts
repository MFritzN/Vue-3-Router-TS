export default class User {
  public name: string;

  public description: string;

  public id = -1;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
