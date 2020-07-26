import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  apiURL = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) {}

  public init(): void {
    // In case we need to fetch information the moment we instantiate a screen/component.
  }

  public getRandomCharacter(): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiURL}/people/1`);
  }

  public listCharacters(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/people/`);
  }
}
