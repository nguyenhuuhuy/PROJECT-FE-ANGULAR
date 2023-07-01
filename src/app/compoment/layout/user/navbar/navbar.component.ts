import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../../service/token.service";
import {flatMap} from "rxjs";
import {Router} from "@angular/router";
import {CategoryService} from "../../../../service/category.service";
import {StoryService} from "../../../../service/story.service";
import {Category} from "../../../../model/Category";
import {AuthService} from "../../../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateAuthorComponent} from "../../../contents/author/create-author/create-author.component";
import {MatTableDataSource} from "@angular/material/table";
import {Author} from "../../../../model/Author";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name = '';
  avatar = '';
  checkLogin = false;
  checkRole = false;
  listCate:Category[] = [];
  searchName = '';
  form: any={};
  constructor(private tokenService: TokenService,
              private router:Router,
              private categoryService:CategoryService,
              private storyService:StoryService,
              private authService:AuthService
              ) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
    if (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN'])){
        this.checkRole = true;
    }
    this.categoryService.getListService().subscribe(data=>{
      this.listCate = data;
    })
  }

  logOut() {
    sessionStorage.clear();
    window.location.reload();
  }




  sreachByStory() {
    if (this.searchName == ''){
      // console.log("can viet gi do")
    } else {
    this.storyService.setValue(this.searchName);
    }
    // console.log(this.searchName)
  }
}
