import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesListComponent } from './secciones-list.component';

describe('SeccionesListComponent', () => {
  let component: SeccionesListComponent;
  let fixture: ComponentFixture<SeccionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
