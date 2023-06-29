import {Component, OnInit, ViewChild} from '@angular/core';
import {Chapter} from "../../../../model/Chapter";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {ChapterService} from "../../../../service/chapter.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-detail-chapter',
  templateUrl: './detail-chapter.component.html',
  styleUrls: ['./detail-chapter.component.scss']
})
export class DetailChapterComponent implements OnInit{
  checkUserLogin = false;
  dataSource: any;
  listChapter?: Chapter[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'story'];
  constructor(
    public dialog: MatDialog,
    private tokenService: TokenService,
    private chapterService:ChapterService
  ) {
  }
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }

  }

  openDialog() {

  }
}
