import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionesListComponent } from './asignaciones-list.component';

describe('AsignacionesListComponent', () => {
  let component: AsignacionesListComponent;
  let fixture: ComponentFixture<AsignacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
