import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareaFechaComponent } from './lista-tarea-fecha.component';

describe('ListaTareaFechaComponent', () => {
  let component: ListaTareaFechaComponent;
  let fixture: ComponentFixture<ListaTareaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTareaFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
