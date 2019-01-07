import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import { PostlistComponent } from './posts/postlist/postlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
