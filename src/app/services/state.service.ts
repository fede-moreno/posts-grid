import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // tslint:disable-next-line:variable-name
  private readonly _state = new BehaviorSubject<Post[]>([]);
  readonly states$ = this._state.asObservable();
  constructor(private apiService: ApiService) {
    this.apiService.getPosts().pipe(take(1)).subscribe((posts: Post[]) => {
      // Sets active status to false to every post
      const mappedPosts: Post[] = posts.map((p) => {
        return {...p, active: false};
      });
      this.updatePosts(mappedPosts);
    });
  }

  /**
   * Retrieves and returns the current state of the stored posts.
   * @return current state.
   */
  get state(): Post[] {
    return this._state.getValue();
  }

  /**
   * Updates the entire store with the new posts state
   * @param posts new state
   */
  updatePosts(posts: Post[]): void {
    this._state.next(posts);
  }

  /**
   * Toggles active status for the post and submits the new state
   * @param post Post to be updated
   */
  updatePostStatus(post: Post): void {
    const newState = this.state.map((p) => {
      return p.id === post.id ? {...p, active: !post.active} : p;
    });
    this._state.next(newState);
  }
}
