import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChapterImageService} from "../../../../service/chapter-image.service";
import {ChapterImage} from "../../../../model/ChapterImage";

@Component({
  selector: 'app-update-chapter-image',
  templateUrl: './update-chapter-image.component.html',
  styleUrls: ['./update-chapter-image.component.scss']
})
export class UpdateChapterImageComponent implements OnInit {

  status = '';
  // @ts-ignore
  chapterImage = new ChapterImage();

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: any,
              private chapterImageService: ChapterImageService) {
  }

  updateChapterImage() {
    // @ts-ignore
    this.chapterImageService.updateChapterImageById(this.chapterImage.id,this.chapterImage).subscribe(data=>{
      if(data.message=='access_denied'){
        this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!'
      } else if(data.message == 'no_change'){
        this.status ='KHÔNG THAY ĐỔI'
      } else if(data.message == 'update_success'){
        this.status = 'SỬA THÀNH CÔNG!!!'
      }
    })
  }

  onUpload($event: string) {
      this.chapterImage.image = $event;
  }

  ngOnInit(): void {
    this.chapterImageService.getChapterImageById(this.data.dataKey).subscribe(data => {
      this.chapterImage = data;
    })
  }
}
