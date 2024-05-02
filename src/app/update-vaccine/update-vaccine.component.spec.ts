import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccineComponent } from './update-vaccine.component';

describe('UpdateVaccineComponent', () => {
  let component: UpdateVaccineComponent;
  let fixture: ComponentFixture<UpdateVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVaccineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
