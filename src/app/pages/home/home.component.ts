import { Component, OnInit } from '@angular/core';
import { ISlider } from 'src/app/interfaces/slider-interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cover : ISlider = {
    tipo : '',
    cards : []
  }
  

  sliders : ISlider[] = []

  constructor( public moviesService : MoviesService ) { }

  ngOnInit(): void {
    this.cover = this.moviesService.cover
    this.sliders = this.moviesService.sliders
  }

}
