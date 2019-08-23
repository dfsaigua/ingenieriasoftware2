import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatprincipalComponent } from './platprincipal.component';

describe('PlatprincipalComponent', () => {
  let component: PlatprincipalComponent;
  let fixture: ComponentFixture<PlatprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
