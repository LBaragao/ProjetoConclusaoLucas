import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseboardNavigationComponent } from './baseboard-navigation.component';

describe('BaseboardNavigationComponent', () => {
  let component: BaseboardNavigationComponent;
  let fixture: ComponentFixture<BaseboardNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseboardNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseboardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
