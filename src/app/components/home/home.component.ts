import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayMode, SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private readonly settingService: SettingsService, private readonly router: Router) {

  }

  singlePlay() {
    this.settingService.playMode = PlayMode.Single;
    this.router.navigate(['/frame/play']);
  }

  multiPlay() {
    this.settingService.playMode = PlayMode.Multiplayer;
    this.router.navigate(['/frame/play']);
  }

  ngOnInit() {
  }

}
