import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../../category/create-category/create-category.component";
import {MatTableDataSource} from "@angular/material/table";
import {Category} from "../../../../model/Category";
import {CreateAuthorComponent} from "../create-author/create-author.component";
import {TokenService} from "../../../../service/token.service";
import {Author} from "../../../../model/Author";
import {AuthorService} from "../../../../service/author.service";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateAuthorComponent} from "../update-author/update-author.component";
import {DeleteAuthorComponent} from "../delete-author/delete-author.component";

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {
  checkUserLogin = false;
  listAuthor : Author[] = [];
  displayedColumns: string[] = ['position', 'id', 'name', 'alias','edit','delete'];
  dataSource: any;
  constructor(public dialog: MatDialog,
              private tokenService: TokenService,
              private authorService:AuthorService) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateAuthorComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined){
        this.authorService.getListAuthor().subscribe( data=>{
          this.listAuthor = data;
          this.dataSource = new MatTableDataSource<Author>(this.listAuthor);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateAuthorComponent,{
      data: {
        dataKey: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result || result == undefined){
        this.authorService.getListAuthor().subscribe( data=>{
          this.listAuthor = data;
          this.dataSource = new MatTableDataSource<Author>(this.listAuthor);
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeleteAuthorComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.authorService.deleteAuthorById(id).subscribe(()=>{
          this.authorService.getListAuthor().subscribe( data=>{
            this.listAuthor = data;
            this.dataSource = new MatTableDataSource<Author>(this.listAuthor);
            this.dataSource.paginator = this.paginator;
          })
        })
      }
    });
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.authorService.getListAuthor().subscribe( data=>{
      this.listAuthor = data;
      this.dataSource = new MatTableDataSource<Author>(this.listAuthor);
      this.dataSource.paginator = this.paginator;
    })
  }
}
