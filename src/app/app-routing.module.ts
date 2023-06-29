import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./compoment/pages/home/home.component";
import {RegisterComponent} from "./compoment/pages/form-login/register/register.component";
import {LoginComponent} from "./compoment/pages/form-login/login/login.component";
import {DadInputComponent} from "./compoment/input-output/@input/dad-input/dad-input.component";
import {DadOutputComponent} from "./compoment/input-output/@output/dad-output/dad-output.component";
import {ChangeAvatarComponent} from "./compoment/pages/form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./compoment/contents/category/list-category/list-category.component";
import {UpdateCategoryComponent} from "./compoment/contents/category/update-category/update-category.component";
import {ListAuthorComponent} from "./compoment/contents/author/list-author/list-author.component";
import {PageStoryComponent} from "./compoment/contents/story/page-story/page-story.component";
import {ListChapterComponent} from "./compoment/contents/chapter/list-chapter/list-chapter.component";
import {DetailChapterComponent} from "./compoment/contents/story/detail-chapter/detail-chapter.component";
import {
  ListChapterImageComponent
} from "./compoment/contents/chapterImage/list-chapter-image/list-chapter-image.component";
import {HomeDetailComponent} from "./compoment/pages/home-detail/home-detail.component";
import {HomeChapterImageComponent} from "./compoment/pages/home-chapter-image/home-chapter-image.component";
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckRoleUser} from "./service/CheckRoleUser";
import {HomeDetailCategoryComponent} from "./compoment/pages/home-detail-category/home-detail-category.component";
import {SearchStoryComponent} from "./compoment/pages/search-story/search-story.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent,canActivate:[CheckLoginGuard]},
  {path: 'login', component: LoginComponent,canActivate:[CheckLoginGuard]},
  {path: 'input', component: DadInputComponent},
  {path: 'output', component: DadOutputComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'category', component: ListCategoryComponent, canActivate:[CheckRoleUser]},
  // {path: 'update-category/:id', component: UpdateCategoryComponent},
  {path: 'author', component: ListAuthorComponent, canActivate:[CheckRoleUser]},
  {path: 'page-story', component: PageStoryComponent, canActivate:[CheckRoleUser]},
  {path:'chapter',component:ListChapterComponent,  canActivate:[CheckRoleUser]},
  {path:'chapterImage',component:ListChapterImageComponent, canActivate:[CheckRoleUser]},
  {path:'detailChapter',component:DetailChapterComponent},
  {path:'detailCategory/:id',component:HomeDetailCategoryComponent},
  {path:'detailStory/:id',component:HomeDetailComponent},
  {path:'homeChapterImage/:id',component:HomeChapterImageComponent},
  {path:'searchStory',component:SearchStoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
