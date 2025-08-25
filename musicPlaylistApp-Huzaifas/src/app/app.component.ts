import { Component } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

interface Song {
  name: string;
  artist: string;
  album: string;
  image:string;
  duration: string;
  rating: number; 
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
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'musicPlaylistApp-Huzaifa';

  songs: Song[] = [
  {
    name: 'Lyrical | Saiyaara Title Song ',
    artist: 'Bagchi, Faheem Abdullah, Arslan',
    image: 'https://i.ytimg.com/vi/FudfVyYWNxQ/maxresdefault.jpg',
    album: 'Saiyaara',
    duration: '4:45',
    rating: 5
  },
  {
    name: 'Aasa Kooda',
    artist: 'Sai Abhyankkar and Sai Smriti',
    image: 'https://i.ytimg.com/vi/a3Ue-LN5B9U/maxresdefault.jpg',
    album: ' Aasa Kooda from Think Indie',
    duration: '4:32',
    rating: 5
  },
  {
    name: 'Shubh - Supreme',
    artist: 'Shubh',
    image: 'https://i.ytimg.com/vi/fgbcH5DkUsk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCBsCdEHQeKSw2oMy8ypy9BMLpQKg',
    album: 'Shuhb',
    duration: '5:55',
    rating: 5
  },
  {
    name: 'Shape of You',
    artist: 'Ed Sheeran',
    image:'https://i.ytimg.com/vi/JGwWNGJdvx8/sddefault.jpg',
    album: 'Divide',
    duration: '4:24',
    rating: 3
  },
  
];


  selectedArtist: string = 'All';
  selectedAlbum: string = 'All';

  get artists(): string[] {
    return ['All', ...Array.from(new Set(this.songs.map(s => s.artist)))];
  }

  get albums(): string[] {
    return ['All', ...Array.from(new Set(this.songs.map(s => s.album)))];
  }

  get filteredSongs(): Song[] {
    return this.songs.filter(song =>
      (this.selectedArtist === 'All' || song.artist === this.selectedArtist) &&
      (this.selectedAlbum === 'All' || song.album === this.selectedAlbum)
    );
  }

  get averageRating(): number {
    const total = this.filteredSongs.reduce((sum, s) => sum + s.rating, 0);
    return this.filteredSongs.length ? total / this.filteredSongs.length : 0;
  }
}
