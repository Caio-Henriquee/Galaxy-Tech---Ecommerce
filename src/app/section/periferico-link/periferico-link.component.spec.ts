import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericoLinkComponent } from './periferico-link.component';

describe('PerifericoLinkComponent', () => {
  let component: PerifericoLinkComponent;
  let fixture: ComponentFixture<PerifericoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerifericoLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerifericoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
