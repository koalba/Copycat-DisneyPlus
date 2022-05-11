import { Component, OnInit } from '@angular/core';
import { IChannels } from 'src/app/interfaces/channels.interface';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels : IChannels[] = [{ logo  : '', video : '', url   : '', title : '' }]

  constructor( private channelService : ChannelService ) { }

  ngOnInit() : void {

    this.channels = this.channelService.channels

  }

}
