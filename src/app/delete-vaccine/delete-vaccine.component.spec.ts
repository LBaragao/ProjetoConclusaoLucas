import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVaccineComponent } from './delete-vaccine.component';

describe('DeleteVaccineComponent', () => {
  let component: DeleteVaccineComponent;
  let fixture: ComponentFixture<DeleteVaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteVaccineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
