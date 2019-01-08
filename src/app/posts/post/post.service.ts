import { Injectable } from '@angular/core';
import { posts } from 'src/app/models/posts.model';
import 'rxjs/Rx';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { post } from 'selenium-webdriver/http';

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
    creationDate: Date(), upvotes:0, id:''};
    //this.posts.push(post);
    this.storePost(post)
    .subscribe(
      // (response) => console.log(response),
      // (error) => console.log(error)
    );
    
  }
  storePost(strPost: any){
   return this.http.post('https://myjtcproject.firebaseio.com/post.json',strPost)
  }

  putPost(strPost: posts){
    var path = 'https://myjtcproject.firebaseio.com/post/' + strPost.id + '.json';
    return this.http.put(path,strPost)
   }
  getServerpost(){
    return this.http.get('https://myjtcproject.firebaseio.com/post.json')
    .map(
      (response: Response) =>{
        const data =response.json();
        let posts = [];
        if(data == null){
          return posts;
        }
        for(var prop in data) {
          let post : posts = data[prop];
          post.id = prop;
          posts.push(post);
        }
        return posts;
      }
    )
  }
  
}
