import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../../service/story.service";
import {Story} from "../../../model/Story";

@Component({
  selector: 'app-search-story',
  templateUrl: './search-story.component.html',
  styleUrls: ['./search-story.component.scss']
})
export class SearchStoryComponent implements OnInit{
  valueSearch='';
  storyList?:Story [] = [];

  ngOnInit(): void {
    this.storyService.getValue().subscribe(data=>{
      this.valueSearch = data;
      this.storyService.searchStoryByName(this.valueSearch).subscribe(data=>{
        this.storyList = data
        console.log(this.storyList)
      })
    });

  }
constructor(private storyService:StoryService) {
}
}
