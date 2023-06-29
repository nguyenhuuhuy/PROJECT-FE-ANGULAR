import {Component} from '@angular/core';
import {CategoryService} from "../../../../service/category.service";
import {Category} from "../../../../model/Category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {
  form: any = {};
  category?: Category;
  status: string = ''

  constructor(private categoryService: CategoryService) {
  }

  onUpload($event: string) {
    this.form.avatar = $event
  }

  createCategory() {
    this.category = new Category(
      this.form.name,
      this.form.avatar
    )
    if (this.form.avatar == undefined) {
      this.status = "Avatar is required! Please choose upload avatar"
    } else {
      this.categoryService.createCategoryService(this.category).subscribe(data => {
        if (data.message == 'name_exist') {
          this.status = 'The name is existed! Please try again!'
        } else if (data.message == 'create_success') {
          this.status = 'Create Category Success!'
        } else if (data.message == 'access_denied'){
          this.status = 'BẠN KHÔNG PHẢI ADMIN,TỪ CHỐI TẠO!!!!'
        }
      })
    }
  }
}
