import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChapterService} from "../../../service/chapter.service";
import {Chapter} from "../../../model/Chapter";
import {Story} from "../../../model/Story";
import {ChapterImageService} from "../../../service/chapter-image.service";
import {ChapterImage} from "../../../model/ChapterImage";

@Component({
  selector: 'app-home-chapter-image',
  templateUrl: './home-chapter-image.component.html',
  styleUrls: ['./home-chapter-image.component.scss']
})
export class HomeChapterImageComponent implements OnInit{
  chapter?:Chapter;
  story?:Story;
  listChapter:Chapter[] = [];
  listChapterImage:ChapterImage [] = [];
  constructor(private activeRoute:ActivatedRoute,
              private chapterService:ChapterService,
              private chapterImageService:ChapterImageService,
              private router:Router) {
  }
  ngOnInit(): void {
    let chapterImageId = this.activeRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    let id = +chapterImageId;
    console.log(id)
    if (this.chapter == undefined){
      this.chapterService.getChapterById(id).subscribe(data=>{
        this.chapter = data;
      })
    }
    this.chapterService.getStoryByChapter(id).subscribe(data=>{
      this.story = data;
      // @ts-ignore
      this.chapterService.getChapterByStoryId(this.story?.id).subscribe(data=>{
        this.listChapter = data;
      })
    })

    this.chapterImageService.getListChapterImageByChapter(id).subscribe(data=>{
        this.listChapterImage = data;
    })

  }
  nextChapter() {
    for (let i = 0; i < this.listChapter.length; i++) {
      if (this.listChapter[i].id == this.chapter?.id){
        this.chapter = this.listChapter[i+1];
        this.router.navigate(['/homeChapterImage/'+this.listChapter[i+1].id]);
        break;
      }
    }
  }

  backChapter() {
    for (let i = 0; i < this.listChapter.length; i++) {
      if (this.listChapter[i].id == this.chapter?.id){
        this.chapter = this.listChapter[i-1];
        this.router.navigate(['/homeChapterImage/'+this.listChapter[i-1].id])
        break;
      }
    }
  }
}
