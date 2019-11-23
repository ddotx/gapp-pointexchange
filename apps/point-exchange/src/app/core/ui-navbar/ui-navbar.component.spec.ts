import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNavbarComponent } from './ui-navbar.component';

describe('UiNavbarComponent', () => {
  let component: UiNavbarComponent;
  let fixture: ComponentFixture<UiNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
