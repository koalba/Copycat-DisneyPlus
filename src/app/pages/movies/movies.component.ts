import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/slider-interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { ISlider } from 'src/app/interfaces/slider-interfaces';
import { IPeliculas } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  url : string = ''
  pelicula : any = []

  sugerencias : ISlider = {
    tipo : '',
    cards : []
  }

  constructor( 
    private moviesService : MoviesService,  
    private activatedRoute : ActivatedRoute) { }

  numero : number = 0

  ngOnInit(): void {
    this.load()  
  }

  setNumero( valor : number ) : void {
    this.numero = valor
  }

  setRating() : string {
    return `/assets/rating/${this.pelicula.details.rating}.png`
  }

  load() : void {
    this.activatedRoute.params.subscribe(( { nombre } ) => { this.url = nombre })

    this.pelicula = this.moviesService.peliculas.find( ( pelicula : IPeliculas ) => pelicula.url === this.url )

    this.sugerencias = {
      tipo : 'slider',
      cards : this.moviesService.peliculas.filter( ( pelicula : IPeliculas ) => {

        for( let genre of this.pelicula.details.genre ){
          if ( pelicula.details.genre.includes( genre ) && this.pelicula.titulo !== pelicula.titulo ){
            return pelicula
          }
        }
        return false
      } )
    }

    this.setRating()
  } 

}
