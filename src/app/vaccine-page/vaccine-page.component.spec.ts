import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinePageComponent } from './vaccine-page.component';

describe('VaccinePageComponent', () => {
  let component: VaccinePageComponent;
  let fixture: ComponentFixture<VaccinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccinePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaccinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
