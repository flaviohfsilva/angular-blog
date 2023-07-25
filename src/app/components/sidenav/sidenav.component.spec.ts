import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLeftComponent } from './sidenav.component';

describe('SidenavLeftComponent', () => {
  let component: SidenavLeftComponent;
  let fixture: ComponentFixture<SidenavLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavLeftComponent]
    });
    fixture = TestBed.createComponent(SidenavLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
