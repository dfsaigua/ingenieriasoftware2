import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosestudianteComponent } from './cursosestudiante.component';

describe('CursosestudianteComponent', () => {
  let component: CursosestudianteComponent;
  let fixture: ComponentFixture<CursosestudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosestudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
