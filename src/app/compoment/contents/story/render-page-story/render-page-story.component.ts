import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../../../service/story.service";
import {Story} from "../../../../model/Story";

@Component({
  selector: 'app-render-page-story',
  templateUrl: './render-page-story.component.html',
  styleUrls: ['./render-page-story.component.scss']
})
export class RenderPageStoryComponent implements OnInit{

  storyList:Story[] = [];
  constructor(private storyService:StoryService) {
  }
getPageRequest(request:any){
  this.storyService.getPageStory(request).subscribe(data=>{
    this.storyList = data['content']
    console.log('content----->',this.storyList)
  })
}

  ngOnInit(): void {
    const request = {page:0,size:2}
    this.getPageRequest(request);
  }
}
