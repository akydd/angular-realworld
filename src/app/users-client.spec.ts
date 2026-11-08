import { TestBed } from '@angular/core/testing';
import { UsersClient } from './users-client';

describe('UsersClient', () => {
  let service: UsersClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
