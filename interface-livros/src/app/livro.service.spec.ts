import { TestBed } from '@angular/core/testing';

import { LivroService } from './service/livro.service';

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});