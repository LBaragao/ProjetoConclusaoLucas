import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalApplicationReportComponent } from './personal-application-report.component';

describe('PersonalApplicationReportComponent', () => {
  let component: PersonalApplicationReportComponent;
  let fixture: ComponentFixture<PersonalApplicationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalApplicationReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalApplicationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
