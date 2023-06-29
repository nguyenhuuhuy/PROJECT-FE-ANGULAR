import {Story} from "./Story";
import {ChapterImage} from "./ChapterImage";
export class Chapter{
  public id?:number;
  public name?:string;
  public story?:Story;
  public chapterView?:number;
  public date?:string;
  public chapterImageList:ChapterImage[] = [];
  constructor(name: string, story: Story) {
    this.name = name;
    this.story = story;
  }
}
