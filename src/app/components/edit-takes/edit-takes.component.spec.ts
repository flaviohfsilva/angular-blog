import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTakesComponent } from './edit-takes.component';

describe('EditTakesComponent', () => {
  let component: EditTakesComponent;
  let fixture: ComponentFixture<EditTakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTakesComponent]
    });
    fixture = TestBed.createComponent(EditTakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
