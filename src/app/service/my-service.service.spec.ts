/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServiceService]
    });
  });

  it('should ...', inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
