import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEvaluateComponent } from './request-evaluate.component';

describe('RequestEvaluateComponent', () => {
  let component: RequestEvaluateComponent;
  let fixture: ComponentFixture<RequestEvaluateComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestEvaluateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
