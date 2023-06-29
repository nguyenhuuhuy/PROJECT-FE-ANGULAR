import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AuthorService} from "../../../../service/author.service";
import {Author} from "../../../../model/Author";

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit{
  form: any = {};
  status = ''
  // @ts-ignore
  author = new Author();
constructor(private authorService:AuthorService
  ,@Inject(MAT_DIALOG_DATA)
            public data:any) {
}
  updateAuthor() {
    // @ts-ignore
    this.authorService.updateAuthor(this.author?.id,this.author).subscribe(data=>{
      if (data.message == 'no_change'){
        this.status = "THÔNG TIN KHÔNG THAY ĐỔI"
      } else if (data.message == 'name_existed'){
        this.status ='TÊN AUTHOR ĐANG BỊ TRÙNG'
      } else if (data.message == 'update_success'){
        this.status = 'SỬA THÀNH CÔNG!!!'
      } else if (data.message == 'update_alias_success') {
        this.status = 'SỬA ALIAS THÀNH CÔNG!!!'
      } else if (data.message == 'access_denied'){
        this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!'
      }
    })
  }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.data.dataKey).subscribe(data=>{
      this.author = data;
    })
  }
}
