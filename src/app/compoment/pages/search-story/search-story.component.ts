import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../../service/story.service";
import {Story} from "../../../model/Story";

@Component({
  selector: 'app-search-story',
  templateUrl: './search-story.component.html',
  styleUrls: ['./search-story.component.scss']
})
export class SearchStoryComponent implements OnInit {
  valueSearch = '';
  storyList?: Story [] = [];
  status = false;
  ngOnInit(): void {
    this.storyService.getValue().subscribe(data => {
      if (data == '') {
        this.storyService.getListStoryService().subscribe(data => {
          this.storyList = data;
        })
      } else {
        this.valueSearch = data;
        this.storyService.searchStoryByName(this.valueSearch).subscribe(data => {
          if (data.message == 'not_found') {
            this.status = true;
          } else {
            this.storyList = data
          }
        })
      }
    });

  }

  constructor(private storyService: StoryService) {
  }
}
