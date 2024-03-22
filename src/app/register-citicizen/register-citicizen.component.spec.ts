import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCiticizenComponent } from './register-citicizen.component';

describe('RegisterCiticizenComponent', () => {
  let component: RegisterCiticizenComponent;
  let fixture: ComponentFixture<RegisterCiticizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCiticizenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterCiticizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
