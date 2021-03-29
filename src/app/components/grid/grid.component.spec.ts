import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { PostComponent } from '../post/post.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent, PostComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
