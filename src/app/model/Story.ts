import {Author} from "./Author";
import {Category} from "./Category";
import {Chapter} from "./Chapter";
import {Comments} from "./Comments";
import {SignInForm} from "./SignInForm";
import {Likes} from "./Likes";

export class Story{
  public id?:number;
  public name?: string;
  public image?:string;
  public status?:boolean = false;
  public content?:string;
  public author?:Author;
  public user?:SignInForm;
  public date?:Date;
  public categoryList: Category [] = [];
  public chapterList: Chapter[] = [];
  public commentList?:Comments[] = [];
  public likeList?:Likes [] = [];
  public totalView?:number;
  constructor(name: string, image: string, content: string, author: Author, categoryList: Category[]) {
    this.name = name;
    this.image = image;
    this.content = content;
    this.author = author;
    this.categoryList = categoryList;
  }

}
