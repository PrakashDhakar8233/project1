import { Injectable } from '@angular/core';
import { posts } from 'src/app/models/posts.model';
import 'rxjs/Rx';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: posts[] = []
  

  constructor(private http: Http) { }

  getPosts(){
    return this.posts;
    
  }

  addPost(title: string, content: string){
    const post: posts = {title: title, description: content,
    creationDate: Date(), upvotes:0};
    this.posts.push(post);
    this.storePost(this.posts)
    .subscribe(
      // (response) => console.log(response),
      // (error) => console.log(error)
    );
    
  }
  storePost(strPost: any[]){
   return this.http.post('https://myjtcproject.firebaseio.com/post.json',strPost)
  }
  getServerpost(){
    return this.http.get('https://myjtcproject.firebaseio.com/post.json')
    .map(
      (response: Response) =>{
        const data =response.json();
        return data
      }
    )
  }
  
}
