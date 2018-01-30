import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomepageComponent } from './body/homepage/homepage.component';
import { BlogpageComponent } from './body/blogpage/blogpage.component';
import { RegisterComponent } from './body/register/register.component';
import { LoginComponent } from './body/login/login.component';
import { FeaturedComponent } from './body/homepage/featured/featured.component';
import { BlogListComponent } from './body/homepage/blog-list/blog-list.component';
import { CommentsComponent } from './body/blogpage/comments/comments.component';
import { TitleComponent } from './body/blogpage/title/title.component';
import { ContentComponent } from './body/blogpage/content/content.component';
import { CommentComponent } from './body/blogpage/comments/comment/comment.component';
import { FeaturedItemComponent } from './body/homepage/blog-list/featured-item/featured-item.component';
import { BlogThumbComponent } from './body/homepage/blog-list/blog-thumb/blog-thumb.component';
import { SidelistComponent } from './shared/components/sidelist/sidelist.component';
import { BlogThumbSmallComponent } from './shared/components/sidelist/blog-thumb-small/blog-thumb-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomepageComponent,
    BlogpageComponent,
    RegisterComponent,
    LoginComponent,
    FeaturedComponent,
    BlogListComponent,
    CommentsComponent,
    TitleComponent,
    ContentComponent,
    CommentComponent,
    FeaturedItemComponent,
    BlogThumbComponent,
    SidelistComponent,
    BlogThumbSmallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
