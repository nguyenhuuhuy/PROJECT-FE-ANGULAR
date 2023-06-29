import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Story} from "../../../../model/Story";
import {StoryService} from "../../../../service/story.service";
import {ChapterService} from "../../../../service/chapter.service";
import {Chapter} from "../../../../model/Chapter";

@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.scss']
})
export class CreateChapterComponent implements OnInit{

  status = '';
  form: any = {};
  storyList: Story[] = [];
  chapter?:Chapter;
  validateStory: any = new FormControl('',[Validators.required]);
  displayedColumns: string[] = ['position', 'id', 'name', 'alias','edit','delete'];

  constructor(private storyService:StoryService,
              private chapterService:ChapterService) {
  }
  createChapter() {
    this.chapter = new Chapter(
      this.form.name,
      this.form.story
    )
    console.log(this.chapter)
    this.chapterService.createChapter(this.chapter).subscribe(data=>{
      if (data.message == "access_denied"){
        this.status = "KHÔNG PHẢI ADMIN KHÔNG CÓ QUYỀN SỬA"
      }else if (data.message == 'name_existed'){
        this.status = "TRÙNG TÊN CHAPTER"
      } else if (data.message == 'not_found_story'){
        this.status = 'CẦN THÊM TRUYỆN CHO CHAPTER'
      } else if (data.message == 'create_success'){
        this.status = 'TẠO MỚI THÀNH CÔNG'
      }
    })
  }

  ngOnInit(): void {
    this.storyService.getListStoryService().subscribe(data=>{
      this.storyList = data
    })
  }
}
