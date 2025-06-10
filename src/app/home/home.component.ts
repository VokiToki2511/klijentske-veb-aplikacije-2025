import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [JsonPipe,NgIf,NgFor,MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: any [] | null = null;
  error: string | null = null

  constructor(){
    MovieService.getMovies()
      .then(rsp=>this.movies = rsp.data)
      .catch((e: AxiosError) => this.error = `${e.code}: ${e.message}`)

  }

}
