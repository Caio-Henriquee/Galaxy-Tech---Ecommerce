import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGerenciarComponent } from './card-gerenciar.component';

describe('CardGerenciarComponent', () => {
  let component: CardGerenciarComponent;
  let fixture: ComponentFixture<CardGerenciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGerenciarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardGerenciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
