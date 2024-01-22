import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from "@angular/material/button";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {NgForOf, NgIf} from "@angular/common";
import {ExpandableCardComponent} from "../components/expandable-card/expandable-card.component";
import {PostService} from "../services/posts.service";
import {PostCardComponent} from "../features/posts/components/post-card/post-card.component";
import {Post} from "../features/posts/model/post";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, NavbarComponent, NgForOf, ExpandableCardComponent, NgIf, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  posts: Post[] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response
      },
      error: (message) => {
        console.log(message)
      }
    })
  }
}
