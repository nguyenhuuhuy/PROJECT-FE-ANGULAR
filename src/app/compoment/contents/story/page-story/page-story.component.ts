import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateStoryComponent} from "../create-story/create-story.component";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../../service/token.service";
import {StoryService} from "../../../../service/story.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Author} from "../../../../model/Author";
import {Story} from "../../../../model/Story";
import {Category} from "../../../../model/Category";
import {UpdateAuthorComponent} from "../../author/update-author/update-author.component";
import {UpdateStoryComponent} from "../update-story/update-story.component";
import {DeleteAuthorComponent} from "../../author/delete-author/delete-author.component";
import {BlockStoryComponent} from "../block-story/block-story.component";


@Component({
  selector: 'app-page-story',
  templateUrl: './page-story.component.html',
  styleUrls: ['./page-story.component.scss']
})
export class PageStoryComponent implements OnInit {
  checkUserLogin = false;
  listStory: Story[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'image', 'author', 'category', 'status', 'edit', 'block'];
  dataSource: any;
  story?: Story;
  status = '';

  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private storyService: StoryService) {
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateStoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.storyService.getListStoryService().subscribe(data => {
          this.listStory = data;
          this.dataSource = new MatTableDataSource<Story>(this.listStory);
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
    this.storyService.getListStoryService().subscribe(data => {
      this.listStory = data;
      this.dataSource = new MatTableDataSource<Story>(this.listStory);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateStoryComponent, {
      data: {
        dataKey: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined) {
        this.storyService.getListStoryService().subscribe(data => {
          this.listStory = data;
          this.dataSource = new MatTableDataSource<Story>(this.listStory);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogBlock(id: any) {
    const dialogRef = this.dialog.open(BlockStoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storyService.getStoryById(id).subscribe(data => {
          this.storyService.blockStoryById(id).subscribe(data => {
            if (data.message == 'block_success') {
              this.status = 'khóa thành công';
              this.ngOnInit()
            } else if (data.message == 'un_block_success') {
              this.status = 'mở khóa thành công';
              this.ngOnInit()
            }
          })
        })
      }
    });
  }
}
