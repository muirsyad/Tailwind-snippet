import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBasicComponent } from './side-basic.component';

describe('SideBasicComponent', () => {
  let component: SideBasicComponent;
  let fixture: ComponentFixture<SideBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
