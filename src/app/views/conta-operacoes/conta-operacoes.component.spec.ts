import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaOperacoesComponent } from './conta-operacoes.component';

describe('ContaOperacoesComponent', () => {
  let component: ContaOperacoesComponent;
  let fixture: ComponentFixture<ContaOperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaOperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
