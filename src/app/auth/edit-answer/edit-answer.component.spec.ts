import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnswerComponent } from './edit-answer.component';

describe('EditAnswerComponent', () => {
  let component: EditAnswerComponent;
  let fixture: ComponentFixture<EditAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnswerComponent]
    });
    fixture = TestBed.createComponent(EditAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
