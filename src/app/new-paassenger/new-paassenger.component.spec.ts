import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaassengerComponent } from './new-paassenger.component';

describe('NewPaassengerComponent', () => {
  let component: NewPaassengerComponent;
  let fixture: ComponentFixture<NewPaassengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPaassengerComponent]
    });
    fixture = TestBed.createComponent(NewPaassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
