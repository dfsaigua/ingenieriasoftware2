import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlattutoriaComponent } from './plattutoria.component';

describe('PlattutoriaComponent', () => {
  let component: PlattutoriaComponent;
  let fixture: ComponentFixture<PlattutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlattutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlattutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
