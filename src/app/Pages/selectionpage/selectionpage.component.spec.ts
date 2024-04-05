import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionpageComponent } from './selectionpage.component';

describe('SelectionpageComponent', () => {
  let component: SelectionpageComponent;
  let fixture: ComponentFixture<SelectionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
