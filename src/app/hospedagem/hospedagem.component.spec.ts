import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemComponent } from './hospedagem.component';

describe('HospedagemComponent', () => {
  let component: HospedagemComponent;
  let fixture: ComponentFixture<HospedagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
