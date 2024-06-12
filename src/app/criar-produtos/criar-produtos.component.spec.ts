import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProdutosComponent } from './criar-produtos.component';

describe('CriarProdutosComponent', () => {
  let component: CriarProdutosComponent;
  let fixture: ComponentFixture<CriarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
