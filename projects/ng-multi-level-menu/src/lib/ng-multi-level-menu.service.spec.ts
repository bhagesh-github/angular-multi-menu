import { TestBed } from '@angular/core/testing';

import { NgMultiLevelMenuService } from './ng-multi-level-menu.service';

describe('NgMultiLevelMenuService', () => {
  let service: NgMultiLevelMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMultiLevelMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
