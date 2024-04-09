import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCiticizenComponent } from './search-citicizen.component';

describe('SearchCiticizenComponent', () => {
  let component: SearchCiticizenComponent;
  let fixture: ComponentFixture<SearchCiticizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCiticizenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCiticizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
