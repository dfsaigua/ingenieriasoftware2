import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepagoComponent } from './detallepago.component';

describe('DetallepagoComponent', () => {
  let component: DetallepagoComponent;
  let fixture: ComponentFixture<DetallepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
