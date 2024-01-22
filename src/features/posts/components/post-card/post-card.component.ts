import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {ExpandableCardComponent} from "../../../../components/expandable-card/expandable-card.component";
import {CommonModule} from "@angular/common";
import {Post, PostBody} from "../../model/post";
import {Comment} from "../../../comments/model/comment";
import {ListComponent} from "../../../../components/list/list.component";
import {ListItemComponent} from "../../../../components/list-item/list-item.component";
import {CommentsService} from "../../../../services/comments.service";
import {MatListItem, MatListItemTitle} from "@angular/material/list";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    CommonModule,
    ExpandableCardComponent,
    ListComponent,
    ListItemComponent,
    MatListItem,
    MatListItemTitle
  ],
  template: `
    <app-expandable-card (cardOpened)="getRelatedComment()">
      <div title class="title-wrapper">
        <div>{{ cardBody?.id }}</div>
        <div>-</div>
        <div>{{ post.title }}</div>
      </div>

      <app-list description>
        <div class="list-title">UserId</div>
        <app-list-item>{{ cardBody?.userId }}</app-list-item>

        <div class="list-title">Body</div>
        <app-list-item>{{ cardBody?.body }}</app-list-item>

        <div class="list-title">Comments ({{ cardBody?.comments?.length }})</div>
        <app-list-item *ngIf="cardBody?.comments?.length === 0; else filledComments">-</app-list-item>
        <ng-template #filledComments>
          <div class="comment-wrapper" *ngFor="let comment of cardBody?.comments">
            <app-list-item>name: {{ comment.name }}</app-list-item>
            <app-list-item>email: {{ comment.email }}</app-list-item>
            <app-list-item>body: {{ comment.body }}</app-list-item>
          </div>
        </ng-template>
      </app-list>
    </app-expandable-card>
  `,
  styles: [
    `
      .title-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .list-title {
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
      }

      .comment-wrapper {
        margin-top: 10px;
      }
    `
  ]
})

export class PostCardComponent implements OnInit {
  @Input() post!: Post

  cardBody: PostBody | null = null

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.cardBody = {
      id: this.post.id,
      userId: this.post.userId,
      body: this.post.body,
      comments: []
    }
  }

  getRelatedComment(): void {
    if (this.cardBody?.id === undefined) return console.log('No card id!')

    this.commentsService.getComments(this.cardBody.id).subscribe({
      next: (response: Comment[]) => {
        if (this.cardBody) {
          this.cardBody.comments = response
        }
      },
      error: (message) => {
        console.log(message)
      }
    })
  }
}
