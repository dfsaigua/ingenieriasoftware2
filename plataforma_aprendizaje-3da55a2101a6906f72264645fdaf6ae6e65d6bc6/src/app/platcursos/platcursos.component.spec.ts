import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatcursosComponent } from './platcursos.component';

describe('PlatcursosComponent', () => {
  let component: PlatcursosComponent;
  let fixture: ComponentFixture<PlatcursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatcursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
