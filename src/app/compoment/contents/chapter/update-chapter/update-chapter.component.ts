import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ChapterService} from "../../../../service/chapter.service";
import {Chapter} from "../../../../model/Chapter";

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.scss']
})
export class UpdateChapterComponent implements OnInit{
  status = '';
  // @ts-ignore
  chapter= new Chapter();

constructor(@Inject(MAT_DIALOG_DATA)
            public data: any,
            private chapterService:ChapterService) {
}

  ngOnInit(): void {
    this.chapterService.getChapterId(this.data.dataKey).subscribe(data=>{
      this.chapter = data;
    })
  }

  updateChapter() {
    // @ts-ignore
    this.chapterService.updateChapter(this.chapter.id,this.chapter).subscribe(data=>{
      if(data.message=='access_denied'){
        this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!'
      } else if(data.message == 'no_change'){
        this.status ='KHÔNG THAY ĐỔI'
      } else if(data.message == 'update_success'){
        this.status = 'SỬA THÀNH CÔNG!!!'
      }

    })
  }
}
