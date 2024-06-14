import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregadorLinkComponent } from './carregador-link.component';

describe('CarregadorLinkComponent', () => {
  let component: CarregadorLinkComponent;
  let fixture: ComponentFixture<CarregadorLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarregadorLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarregadorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
