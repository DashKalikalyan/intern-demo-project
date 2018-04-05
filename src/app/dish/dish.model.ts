export class Dish
{
  public title : string;
  public href : string;
  public ingredients : string;
  public thumbnail : string;


  constructor(title:string, href:string, ingredients:string, thumbnail:string)
  {
    this.title=title;
    this.href=href;
    this.ingredients=ingredients;
    this.thumbnail=thumbnail;
  }
}
