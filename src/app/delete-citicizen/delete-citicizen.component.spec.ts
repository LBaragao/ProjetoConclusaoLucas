import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCiticizenComponent } from './delete-citicizen.component';

describe('DeleteCiticizenComponent', () => {
  let component: DeleteCiticizenComponent;
  let fixture: ComponentFixture<DeleteCiticizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCiticizenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCiticizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
