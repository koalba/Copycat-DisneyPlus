import { Component, Input, OnInit } from '@angular/core';
import { IPeliculas } from 'src/app/interfaces/pelicula.interface';
import { ICard } from 'src/app/interfaces/slider-interfaces';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() data   : IPeliculas = {
    type:        
      {
        cover  : false,
        new    : false,
        coming : false
      },
    url         : '',
    src         : '',
    cover       : '',
    titulo      : '',
    logo        : '',
    description : '',
    details     : 
      {
        releaseDate:      '',
        genre:            [],
        rating:           0,
        subtitles:        false,
        audioDescription: false,
        photosensitive:   false,
        sinopsis:         ''
      }
  }

  @Input() tipo   : string = ''
  @Input() height : boolean = false

  constructor() { }

  ngOnInit(): void { }

}
