import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './compoment/layout/user/navbar/navbar.component';
import {FooterComponent} from './compoment/layout/user/footer/footer.component';
import {HomeComponent} from './compoment/pages/home/home.component';
import {CustomBtnComponent} from './compoment/customs/custom-btn/custom-btn.component';
import {RegisterComponent} from './compoment/pages/form-login/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './compoment/pages/form-login/login/login.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.development";
import {UploadAvatarComponent} from './compoment/upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChildInputComponent} from './compoment/input-output/@input/child-input/child-input.component';
import {DadInputComponent} from './compoment/input-output/@input/dad-input/dad-input.component';
import {ChildOutputComponent} from './compoment/input-output/@output/child-output/child-output.component';
import {DadOutputComponent} from './compoment/input-output/@output/dad-output/dad-output.component';
import {ChangeAvatarComponent} from './compoment/pages/form-login/change-avatar/change-avatar.component';
import {AuthInterceptor} from "./service/auth.interceptor";
import {ListCategoryComponent} from './compoment/contents/category/list-category/list-category.component';
import {CreateCategoryComponent} from './compoment/contents/category/create-category/create-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { UpdateCategoryComponent } from './compoment/contents/category/update-category/update-category.component';
import { ListAuthorComponent } from './compoment/contents/author/list-author/list-author.component';
import { CreateAuthorComponent } from './compoment/contents/author/create-author/create-author.component';
import { UpdateAuthorComponent } from './compoment/contents/author/update-author/update-author.component';
import { DeleteAuthorComponent } from './compoment/contents/author/delete-author/delete-author.component';
import { DeleteCategoryComponent } from './compoment/contents/category/delete-category/delete-category.component';
import { CreateStoryComponent } from './compoment/contents/story/create-story/create-story.component';
import { PageStoryComponent } from './compoment/contents/story/page-story/page-story.component';
import {MatSelectModule} from "@angular/material/select";
import { UpdateStoryComponent } from './compoment/contents/story/update-story/update-story.component';
import { BlockStoryComponent } from './compoment/contents/story/block-story/block-story.component';
import { ListChapterComponent } from './compoment/contents/chapter/list-chapter/list-chapter.component';
import { CreateChapterComponent } from './compoment/contents/chapter/create-chapter/create-chapter.component';
import { UpdateChapterComponent } from './compoment/contents/chapter/update-chapter/update-chapter.component';
import { DetailChapterComponent } from './compoment/contents/story/detail-chapter/detail-chapter.component';
import { CreateChapterImageComponent } from './compoment/contents/chapterImage/create-chapter-image/create-chapter-image.component';
import { ListChapterImageComponent } from './compoment/contents/chapterImage/list-chapter-image/list-chapter-image.component';
import { RenderPageStoryComponent } from './compoment/contents/story/render-page-story/render-page-story.component';
import { HomeDetailComponent } from './compoment/pages/home-detail/home-detail.component';
import { HomeChapterImageComponent } from './compoment/pages/home-chapter-image/home-chapter-image.component';
import {CheckLoginGuard} from "./service/CheckLoginGuard";
import {CheckRoleUser} from "./service/CheckRoleUser";
import { HomeDetailCategoryComponent } from './compoment/pages/home-detail-category/home-detail-category.component';
import { UpdateChapterImageComponent } from './compoment/contents/chapterImage/update-chapter-image/update-chapter-image.component';
import { DeleteChapterImageComponent } from './compoment/contents/chapterImage/delete-chapter-image/delete-chapter-image.component';
import { SearchStoryComponent } from './compoment/pages/search-story/search-story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomBtnComponent,
    RegisterComponent,
    LoginComponent,
    UploadAvatarComponent,
    ChildInputComponent,
    DadInputComponent,
    ChildOutputComponent,
    DadOutputComponent,
    ChangeAvatarComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    ListAuthorComponent,
    CreateAuthorComponent,
    UpdateAuthorComponent,
    DeleteAuthorComponent,
    DeleteCategoryComponent,
    CreateStoryComponent,
    PageStoryComponent,
    UpdateStoryComponent,
    BlockStoryComponent,
    ListChapterComponent,
    CreateChapterComponent,
    UpdateChapterComponent,
    DetailChapterComponent,
    CreateChapterImageComponent,
    ListChapterImageComponent,
    RenderPageStoryComponent,
    HomeDetailComponent,
    HomeChapterImageComponent,
    HomeDetailCategoryComponent,
    UpdateChapterImageComponent,
    DeleteChapterImageComponent,
    SearchStoryComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CheckLoginGuard,
    CheckRoleUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
