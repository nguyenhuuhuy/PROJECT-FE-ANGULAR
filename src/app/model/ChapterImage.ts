import {Chapter} from "./Chapter";

export class ChapterImage{
  public id?:number;
  public image?:string;
  public chapter?:Chapter

  constructor(image: string, chapter: Chapter) {
    this.image = image;
    this.chapter = chapter;
  }
}
