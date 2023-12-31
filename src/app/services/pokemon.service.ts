
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private url = "https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

    getPokemon(name: string){
    return this.http.get(`${this.url}/pokemon/${name}`)

  } 
}
