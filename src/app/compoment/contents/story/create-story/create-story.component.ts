import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Author} from "../../../../model/Author";
import {AuthorService} from "../../../../service/author.service";
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";
import {Story} from "../../../../model/Story";
import {StoryService} from "../../../../service/story.service";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit{

  status = '';
  form: any = {};
  validateAuthor: any = new FormControl('',[Validators.required]);
  authorList?:Author[] = [];
  categoryList?: Category[] = [];
  story?:Story;
  constructor(private authorService:AuthorService,
              private categoryService:CategoryService,
              private storyService:StoryService) {
  }
  createStory() {
    if (this.form.avatar == undefined){
      this.status = 'CAN THEM ANH'
    }
    if (this.form.author == undefined){
      this.status = 'CAN THEM TAC GIA'
    }
    if (this.form.category == undefined){
      this.status = 'CAN THEM THE LOAI'
    }
   this.story = new Story(
     this.form.name,
     this.form.image,
     this.form.content,
     this.form.author,
     this.form.categoryList
   )
    this.storyService.createStoryService(this.story).subscribe(data=>{
      if (data.message == "create_success"){
        this.status = "TẠO MỚI THÀNH CÔNG"
      } else if (data.message =='name_existed'){
        this.status = 'TRÙNG TÊN STORY'
      }else if (data.message == 'access_denied'){
        this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!'
      }
    })
  }

  onUploadImage($event: string) {
      this.form.image = $event
  }
  ngOnInit(): void {
    this.authorService.getListAuthor().subscribe(data=>{
      this.authorList = data;
    })
    this.categoryService.getListService().subscribe(data=>{
      this.categoryList = data;
    })

  }

}
