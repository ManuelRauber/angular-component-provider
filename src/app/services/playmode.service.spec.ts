import { TestBed, inject } from '@angular/core/testing';

import { PlaymodeService } from './playmode.service';

describe('PlaymodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaymodeService]
    });
  });

  it('should be created', inject([PlaymodeService], (service: PlaymodeService) => {
    expect(service).toBeTruthy();
  }));
});
