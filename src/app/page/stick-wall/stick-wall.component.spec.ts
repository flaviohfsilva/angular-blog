import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickWallComponent } from './stick-wall.component';

describe('StickWallComponent', () => {
  let component: StickWallComponent;
  let fixture: ComponentFixture<StickWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickWallComponent]
    });
    fixture = TestBed.createComponent(StickWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
