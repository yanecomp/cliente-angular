import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaSaqueComponent } from './conta-saque.component';

describe('ContaSaqueComponent', () => {
  let component: ContaSaqueComponent;
  let fixture: ComponentFixture<ContaSaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaSaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
