import { Component } from '@angular/core';
import {AuthorService} from "../../../../service/author.service";
import {Author} from "../../../../model/Author";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent {
  form: any = {};
  author?: Author;
  status = ''
  constructor(private authorService:AuthorService) {
  }
  createAuthor() {
    this.author = new Author(
      this.form.name,
      this.form.alias
    );
    this.authorService.createAuthorService(this.author).subscribe( data=>{
      if (data.message == 'name_exist'){
        this.status = 'TRÙNG TÊN AUTHOR'
      } else if(data.message == 'create_author_success'){
        this.status = 'TẠO MỚI THÀNH CÔNG'
      } else if (data.message == 'access_denied'){
        this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!!!'
      }
    })
  }
}
