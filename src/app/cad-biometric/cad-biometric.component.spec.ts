import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadBiometricComponent } from './cad-biometric.component';

describe('CadBiometricComponent', () => {
  let component: CadBiometricComponent;
  let fixture: ComponentFixture<CadBiometricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadBiometricComponent]
    });
    fixture = TestBed.createComponent(CadBiometricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
