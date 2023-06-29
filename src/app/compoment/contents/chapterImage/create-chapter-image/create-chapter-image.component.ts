import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Chapter} from "../../../../model/Chapter";
import {ChapterImageService} from "../../../../service/chapter-image.service";
import {ChapterService} from "../../../../service/chapter.service";
import {ChapterImage} from "../../../../model/ChapterImage";

@Component({
  selector: 'app-create-chapter-image',
  templateUrl: './create-chapter-image.component.html',
  styleUrls: ['./create-chapter-image.component.scss']
})
export class CreateChapterImageComponent implements OnInit{

  status = '';
  form: any = {};
  chapterList: Chapter[] = [];
  chapterImage?:ChapterImage;
  validateChapter: any = new FormControl('',[Validators.required]);
  constructor(private chapterImageService:ChapterImageService,
              private chapterService:ChapterService) {
  }
  createChapterImage() {
    this.chapterImage = new ChapterImage(
      this.form.image,
      this.form.story
    )
    this.chapterImageService.createChapterImage(this.chapterImage).subscribe(data=>{
      if (data.message == "create_success"){
        this.status = "CHEN ANH VAO CHAP THANH CONG"
      }
    })
  }

  onUpload($event: string) {
  this.form.image = $event
  }
  ngOnInit(): void {
    this.chapterService.getListChapter().subscribe(data=>{
      this.chapterList = data;
      console.log(this.chapterList)
    })
  }
}
