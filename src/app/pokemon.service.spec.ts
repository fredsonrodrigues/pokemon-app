import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import PokemonMock from '../mocks/pokemon';

describe('PokemonServiceService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a valid response', () => {
  //   let name = 'pikachu';
  //   service.findPokemon(name);
  //   const mockReq = httpMock.expectOne(`http://192.168.100.193:8000/pokemon/${name}`);
  //   mockReq.flush(PokemonMock);
  //   expect(mockReq.request.method).toBe("GET");
  // });
});
