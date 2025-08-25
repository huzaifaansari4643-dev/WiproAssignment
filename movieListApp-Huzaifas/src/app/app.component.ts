import { Component } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

interface Movie {
  title: string;
  poster: string;
  genre: string;
  rating: number; 
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    DecimalPipe,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movieListApp-Huzaifa';

  movies: Movie[] = [
    {
      title: 'F1',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png',
      genre: 'Action',
      rating: 5,
      description: 'An action-packed thriller...',
    },
    {
      title: 'Demon Slayer: Kimetsu no Yaiba',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg',
      genre: 'Anime',
      rating: 3,
      description: 'A hilarious adventure...',
    },
    {
      title: 'KURUP',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWRlN2I2YzYtYTVlZC00ZmQ2LTg4MzQtNmI4YzBhY2RmZDhhXkEyXkFqcGc@._V1_.jpg',
      genre: 'Action',
      rating: 4,
      description: 'An emotional journey...',
    },
    
  ];

  selectedGenre: string = 'All';

  get genres(): string[] {
    return ['All', ...Array.from(new Set(this.movies.map(m => m.genre)))];
  }

  get filteredMovies(): Movie[] {
    return this.selectedGenre === 'All'
      ? this.movies
      : this.movies.filter(m => m.genre === this.selectedGenre);
  }

  get averageRating(): number {
    const total = this.filteredMovies.reduce((sum, m) => sum + m.rating, 0);
    return this.filteredMovies.length ? total / this.filteredMovies.length : 0;
  }
}
