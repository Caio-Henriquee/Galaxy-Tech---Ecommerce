import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLiksComponent } from './section-liks.component';

describe('SectionLiksComponent', () => {
  let component: SectionLiksComponent;
  let fixture: ComponentFixture<SectionLiksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLiksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionLiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
