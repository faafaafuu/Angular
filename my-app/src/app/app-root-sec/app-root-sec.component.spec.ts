import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRootSecComponent } from './app-root-sec.component';

describe('AppRootSecComponent', () => {
  let component: AppRootSecComponent;
  let fixture: ComponentFixture<AppRootSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRootSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRootSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
