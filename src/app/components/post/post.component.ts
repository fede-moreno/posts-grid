import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;
  isClicked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.isClicked = !this.isClicked;
  }
}
