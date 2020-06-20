import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaDepositoComponent } from './conta-deposito.component';

describe('ContaDepositoComponent', () => {
  let component: ContaDepositoComponent;
  let fixture: ComponentFixture<ContaDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
