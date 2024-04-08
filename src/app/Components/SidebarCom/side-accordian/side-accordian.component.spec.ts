import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAccordianComponent } from './side-accordian.component';

describe('SideAccordianComponent', () => {
  let component: SideAccordianComponent;
  let fixture: ComponentFixture<SideAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideAccordianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
