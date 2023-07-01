import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../../service/story.service";
import {Story} from "../../../model/Story";
import {Chapter} from "../../../model/Chapter";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {CreateStoryComponent} from "../../contents/story/create-story/create-story.component";
import {HomeDetailComponent} from "../home-detail/home-detail.component";
import {ChapterService} from "../../../service/chapter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  storyRandom:Story[] = [];
  storyList:Story[] = [];
  storyTopList:Story [] = [];
  chapterListByStory:Chapter[] = [];
  constructor(public dialog: MatDialog
    ,private storyService:StoryService,
              private chapterService:ChapterService) {
  }
  getPageRequest(request:any){
    this.storyService.getPageStory(request).subscribe(data=>{
      this.storyList = data['content']
    })
  }

  ngOnInit(): void {
    const request = {page:0,size:5}
    this.getPageRequest(request);
    this.storyService.getTopStory().subscribe(data=>{
      this.storyTopList = data;
    })
    this.storyService.getRandomStory().subscribe(data=>{
      this.storyRandom = data;
    })
  }

  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }

}

