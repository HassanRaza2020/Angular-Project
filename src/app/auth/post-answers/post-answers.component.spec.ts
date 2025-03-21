import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnswersComponent } from './post-answers.component';

describe('PostAnswersComponent', () => {
  let component: PostAnswersComponent;
  let fixture: ComponentFixture<PostAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAnswersComponent]
    });
    fixture = TestBed.createComponent(PostAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
