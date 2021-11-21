import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './view/blog/blog.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { LoginComponent } from './view/authentication/login.component';
import { RegisterComponent } from './view/register/register.component';
import { PasswordRecoverComponent } from './view/password-recover/password-recover.component';
import { PostComponent } from './view/post/post.component';
import { PostEditorComponent } from './view/post-editor/post-editor.component';
import { BlogPostFrameComponent } from './components/blog-post-frame/blog-post-frame.component';
import { PostInfoDetailsComponent } from './components/post-info-details/post-info-details.component';
import { PostPropertiesInfoComponent } from './components/post-properties-info/post-properties-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoverComponent,
    PostComponent,
    PostEditorComponent,
    BlogPostFrameComponent,
    PostInfoDetailsComponent,
    PostPropertiesInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
