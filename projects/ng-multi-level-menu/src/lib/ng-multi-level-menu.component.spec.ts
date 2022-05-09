import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiLevelMenuComponent } from './ng-multi-level-menu.component';

describe('NgMultiLevelMenuComponent', () => {
  let component: NgMultiLevelMenuComponent;
  let fixture: ComponentFixture<NgMultiLevelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMultiLevelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiLevelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
