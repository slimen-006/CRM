import { TestBed } from '@angular/core/testing';
import { RendezService } from './rendez.service';


describe('RendezService', () => {
  let service: RendezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
