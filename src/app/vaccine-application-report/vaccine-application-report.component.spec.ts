import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineApplicationReportComponent } from './vaccine-application-report.component';

describe('VaccineApplicationReportComponent', () => {
  let component: VaccineApplicationReportComponent;
  let fixture: ComponentFixture<VaccineApplicationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccineApplicationReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaccineApplicationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
