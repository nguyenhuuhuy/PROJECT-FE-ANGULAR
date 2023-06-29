import {SignUpForm} from "./SignUpForm";
import {Story} from "./Story";

export class Likes{
  public id?:number;
  public story?:Story;
  public date?:Date;

  constructor(story: Story | undefined) {
    this.story = story;
  }
}
