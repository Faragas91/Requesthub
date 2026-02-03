import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAvailableComponent } from './request-available.component';

describe('RequestAvailableComponent', () => {
  let component: RequestAvailableComponent;
  let fixture: ComponentFixture<RequestAvailableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAvailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
