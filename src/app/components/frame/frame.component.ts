import { Component, OnInit } from '@angular/core';
import { PlaymodeService, playmodeServiceFactory, playmodeServiceFactoryDeps } from '../../services/playmode.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
  providers: [
    {
      provide: PlaymodeService,
      useFactory: playmodeServiceFactory,
      deps: playmodeServiceFactoryDeps,
    }
  ]
})
export class FrameComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
