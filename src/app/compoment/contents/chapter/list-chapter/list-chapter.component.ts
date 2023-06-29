import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {MatTableDataSource} from "@angular/material/table";
import {Category} from "../../../../model/Category";
import {CreateChapterComponent} from "../create-chapter/create-chapter.component";
import {ChapterService} from "../../../../service/chapter.service";
import {Chapter} from "../../../../model/Chapter";
import {Author} from "../../../../model/Author";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateCategoryComponent} from "../../category/update-category/update-category.component";
import {UpdateChapterComponent} from "../update-chapter/update-chapter.component";

@Component({
  selector: 'app-list-chapter',
  templateUrl: './list-chapter.component.html',
  styleUrls: ['./list-chapter.component.scss']
})
export class ListChapterComponent implements OnInit{
  checkUserLogin = false;
  dataSource: any;
  listChapter?: Chapter[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'edit'];

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private chapterService:ChapterService) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateChapterComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.chapterService.getListChapter().subscribe(data=>{
          this.listChapter = data;
          this.dataSource = new MatTableDataSource<Chapter>(this.listChapter);
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
    this.chapterService.getListChapter().subscribe(data=>{
      this.listChapter = data;
      this.dataSource = new MatTableDataSource<Chapter>(this.listChapter);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogUpdate(id:any) {
    const dialogRef = this.dialog.open(UpdateChapterComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.chapterService.getListChapter().subscribe(data=>{
          this.listChapter = data;
          this.dataSource = new MatTableDataSource<Chapter>(this.listChapter);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }
}
