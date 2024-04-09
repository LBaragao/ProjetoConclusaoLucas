import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCiticizenComponent } from './update-citicizen.component';

describe('UpdateCiticizenComponent', () => {
  let component: UpdateCiticizenComponent;
  let fixture: ComponentFixture<UpdateCiticizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCiticizenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCiticizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
