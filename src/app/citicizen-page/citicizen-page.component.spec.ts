import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiticizenPageComponent } from './citicizen-page.component';

describe('CiticizenPageComponent', () => {
  let component: CiticizenPageComponent;
  let fixture: ComponentFixture<CiticizenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiticizenPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiticizenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
