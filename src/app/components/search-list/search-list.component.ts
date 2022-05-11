import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/slider-interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  cards : ICard[] = []
  valor : string = ''

  constructor( private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.cards = this.moviesService.peliculas
  }

}
