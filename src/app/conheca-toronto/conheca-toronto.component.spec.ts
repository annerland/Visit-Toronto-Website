import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaTorontoComponent } from './conheca-toronto.component';

describe('ConhecaTorontoComponent', () => {
  let component: ConhecaTorontoComponent;
  let fixture: ComponentFixture<ConhecaTorontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecaTorontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecaTorontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
