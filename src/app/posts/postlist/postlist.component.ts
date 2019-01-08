import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { posts } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts: posts[]=[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getServerpost()
    .subscribe(
      (data1: any[]) => this.posts = data1,
        (error) => console.log(error),
    );
   
  // this.posts = this.postService.getPosts();
  }
  
 
  Upvoted(i:number) {
    this.posts[i].upvotes = this.posts[i].upvotes + 1;
    this.postService.putPost(this.posts[i])
    .subscribe(
      (data1: any) => console.log( data1),
        (error) => console.log(error),
    );
    // this.postService.storePost(this.posts)
    // .subscribe((posts: posts[i]) => {
    //   this.posts[i].upvotes = this.posts[i].upvotes + 1;
    // });
  }
 
}
