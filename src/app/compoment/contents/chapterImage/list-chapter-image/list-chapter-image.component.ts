import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateStoryComponent} from "../../story/create-story/create-story.component";
import {MatTableDataSource} from "@angular/material/table";
import {Story} from "../../../../model/Story";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {CreateChapterImageComponent} from "../create-chapter-image/create-chapter-image.component";
import {ChapterImageService} from "../../../../service/chapter-image.service";
import {ChapterImage} from "../../../../model/ChapterImage";
import {Chapter} from "../../../../model/Chapter";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateChapterComponent} from "../../chapter/update-chapter/update-chapter.component";
import {UpdateChapterImageComponent} from "../update-chapter-image/update-chapter-image.component";
import {DeleteCategoryComponent} from "../../category/delete-category/delete-category.component";
import {Category} from "../../../../model/Category";
import {DeleteChapterImageComponent} from "../delete-chapter-image/delete-chapter-image.component";

@Component({
  selector: 'app-list-chapter-image',
  templateUrl: './list-chapter-image.component.html',
  styleUrls: ['./list-chapter-image.component.scss']
})
export class ListChapterImageComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['position', 'id', 'image', 'edit','delete'];
  checkUserLogin = false;
  chapterImageList: ChapterImage[] = [];

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              public chapterImageService: ChapterImageService) {
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateChapterImageComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.chapterImageService.getListChapterImage().subscribe(data => {
          this.chapterImageList = data;
          this.dataSource = new MatTableDataSource<ChapterImage>(this.chapterImageList);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.chapterImageService.getListChapterImage().subscribe(data => {
      this.chapterImageList = data;
      this.dataSource = new MatTableDataSource<ChapterImage>(this.chapterImageList);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateChapterImageComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.chapterImageService.getListChapterImage().subscribe(data => {
          this.chapterImageList = data;
          this.dataSource = new MatTableDataSource<ChapterImage>(this.chapterImageList);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id:any) {
    const dialogRef = this.dialog.open(DeleteChapterImageComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.chapterImageService.deleteChapterImageById(id).subscribe(()=>{
          this.chapterImageService.getListChapterImage().subscribe(data => {
            this.chapterImageList = data;
            this.dataSource = new MatTableDataSource<ChapterImage>(this.chapterImageList);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }
}
