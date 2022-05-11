import { Injectable } from '@angular/core';
import { IChannels } from '../interfaces/channels.interface';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  channels : IChannels[] = [
    {
      logo  : '/assets/disney.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4',
      url   : '#',
      title : 'Disney'
    },
    {
      logo  : '/assets/pixar.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217992-pixar.mp4',
      url   : '#',
      title : 'Pixar'
    },
    {
      logo  : '/assets/marvel.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4',
      url   : '#',
      title : 'Marvel'
    },
    {
      logo  : '/assets/starwars.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4',
      url   : '#',
      title : 'Star Wars'
    },
    {
      logo  : '/assets/national.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217923-national-geographic.mp4',
      url   : '#',
      title : 'National Geographic'
    },
    {
      logo  : '/assets/star.png',
      video : 'https://vod-bgc-eu-west-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608170098-brand-star.mp4',
      url   : '#',
      title : 'Star'
    }
  ]

  constructor() { }
}
