import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    if (this.post) {
      this.stateService.updatePostStatus(this.post);
    }
  }
}
