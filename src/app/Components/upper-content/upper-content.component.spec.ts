import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperContentComponent } from './upper-content.component';

describe('UpperContentComponent', () => {
  let component: UpperContentComponent;
  let fixture: ComponentFixture<UpperContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
