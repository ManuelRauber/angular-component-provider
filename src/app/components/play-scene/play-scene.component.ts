import { Component, OnInit } from '@angular/core';
import { PlaymodeService } from '../../services/playmode.service';

@Component({
  selector: 'app-play-scene',
  templateUrl: './play-scene.component.html',
  styleUrls: ['./play-scene.component.css'],
})
export class PlaySceneComponent implements OnInit {

  constructor(private readonly playmodeService: PlaymodeService) {
  }

  ngOnInit() {
    this.playmodeService.log();
  }

}
