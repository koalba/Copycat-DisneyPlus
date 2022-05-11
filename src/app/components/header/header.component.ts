import { Component, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/navigation-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation : INavigation[] = [
    { 
      title : 'Home', 
      url   : '', 
      svg   : '/assets/home.svg'
    },
    { 
      title : 'Search', 
      url   : '/search', 
      svg   : '/assets/search.svg'
    },
    { 
      title : 'Watchlist', 
      url   : '#', 
      svg   : '/assets/watchlist.svg'
    }
  ]

  secondary : INavigation[] = [
    { 
      title : 'Originals', 
      url   : '#', 
      svg   : '/assets/originals.svg'
    },
    { 
      title : 'Movies', 
      url   : '#', 
      svg   : '/assets/movies.svg'
    },
    { 
      title : 'Series', 
      url   : '#', 
      svg   : '/assets/series.svg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
