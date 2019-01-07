import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';
import { posts } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string;
  description: string;
  constructor(private postService: PostService) { }
  ngOnInit() {
  }
  
  getpost(){

  }
  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.description);
    form.resetForm();

  }
  
    
  

}
