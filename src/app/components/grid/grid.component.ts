import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { take } from 'rxjs/operators';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  posts: Post[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().pipe(take(1)).subscribe((posts) => this.posts = posts);
  }
}
