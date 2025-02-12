import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestquestionComponent } from './latestquestion.component';

describe('LatestquestionComponent', () => {
  let component: LatestquestionComponent;
  let fixture: ComponentFixture<LatestquestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestquestionComponent]
    });
    fixture = TestBed.createComponent(LatestquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
