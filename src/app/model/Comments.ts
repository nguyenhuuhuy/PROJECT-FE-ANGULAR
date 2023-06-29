import {SignUpForm} from "./SignUpForm";
import {Story} from "./Story";

export class Comments {
  public id?: number;
  public story?:Story;
  public user?:SignUpForm;
  public comment?: string;
  public date?: string;


  constructor(story: Story | undefined, comment: string) {
    this.story = story;
    this.comment = comment;
  }
}
