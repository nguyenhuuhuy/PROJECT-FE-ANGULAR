export class Author{
  public id?:number;
  public name?:string;
  public authorAlias?:string;


  constructor(name: string, authorAlias: string) {
    this.name = name;
    this.authorAlias = authorAlias;
  }
}
