import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Pokemon } from 'src/models/Pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public pokemonList: Pokemon;
  public ionicForm: FormGroup;
  public loading: boolean;
  public imageSrc: string;

  constructor(
    public formBuilder: FormBuilder,
    public pokemonService: PokemonService
  ) { 
    this.ionicForm = new FormGroup({
      pokemon: new FormControl()
    });
    this.loading = false;
  }

  setResponse(response) {
    this.pokemonList = response
    if (this.pokemonList.success) {
      this.imageSrc = this.pokemonList.sprites.other['official-artwork'].front_default
      console.log(this.pokemonList.sprites.other['official-artwork'].front_default)
    } else {
      this.imageSrc = ''
      this.pokemonList.name = response.error
    }
  }

  submitForm() {
    this.loading = true;
    const { pokemon } = this.ionicForm.value;
    console.log(this.ionicForm.value)
    this.pokemonService.findPokemon(pokemon)
      .subscribe(response => {
        this.setResponse(response);
        this.loading = false;
      })
  }
}
