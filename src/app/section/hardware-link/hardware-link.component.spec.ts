import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareLinkComponent } from './hardware-link.component';

describe('HardwareLinkComponent', () => {
  let component: HardwareLinkComponent;
  let fixture: ComponentFixture<HardwareLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardwareLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
