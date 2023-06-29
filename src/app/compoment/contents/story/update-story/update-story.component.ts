import {Component, Inject, OnInit} from '@angular/core';
import {Author} from "../../../../model/Author";
import {FormControl, Validators} from "@angular/forms";
import {Category} from "../../../../model/Category";
import {StoryService} from "../../../../service/story.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Story} from "../../../../model/Story";
import {AuthorService} from "../../../../service/author.service";
import {CategoryService} from "../../../../service/category.service";

@Component({
  selector: 'app-update-story',
  templateUrl: './update-story.component.html',
  styleUrls: ['./update-story.component.scss']
})
export class UpdateStoryComponent implements OnInit{

  status = '';
  form: any = {};
  validateAuthor: any = new FormControl('',[Validators.required]);
  authorList: Author[] = [];
  categoryList: Category[] = [];
  // @ts-ignore
  story = new Story();

constructor(private storyService:StoryService,
            private authorService:AuthorService,
            private categoryService:CategoryService,
            @Inject(MAT_DIALOG_DATA)
            public data:any) {
}
  onUploadImage($event: string) {
    this.story.image = $event
  }

  updateStory() {
  this.storyService.updateStory(this.story?.id,this.story).subscribe(data=>{
    if (data.message == 'no_change'){
      this.status = "khong thay doi"
    } else if (data.message == 'name_existed'){
      this.status ='TÊN STORY ĐANG BỊ TRÙNG'
    } else if (data.message == 'update_success'){
      this.status = 'SỬA THÀNH CÔNG!!!'
    }
  })
  }

  ngOnInit(): void {
    this.authorService.getListAuthor().subscribe(data=>{
      this.authorList = data;
    })
    this.categoryService.getListService().subscribe(data=>{
      this.categoryList = data;
    })
    this.storyService.getStoryById(this.data.dataKey).subscribe(data=>{
      this.story = data;
    })
  }
}
