import {Component, OnInit} from '@angular/core';
import {StoryService} from "../../../service/story.service";
import {ActivatedRoute} from "@angular/router";
import {Story} from "../../../model/Story";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {NavbarComponent} from "../../layout/user/navbar/navbar.component";

@Component({
  selector: 'app-home-detail-category',
  templateUrl: './home-detail-category.component.html',
  styleUrls: ['./home-detail-category.component.scss']
})
export class HomeDetailCategoryComponent implements OnInit{
  listStoryByCate: Story [] = [];
  category?:Category;
  constructor(private storyService:StoryService,
              private activeRoute: ActivatedRoute,
              private categoryService:CategoryService) {
  }
  ngOnInit(): void {
    let storyId = this.activeRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    let id = +storyId;
    this.storyService.getListStoryByCategory(id).subscribe(data=>{
      this.listStoryByCate = data;
    })
    this.categoryService.getCategoryById(id).subscribe(data=>{
      this.category = data;
    })
  }
}
