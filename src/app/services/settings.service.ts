import { Injectable } from '@angular/core';

export enum PlayMode {
  Single,
  Multiplayer
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  playMode: PlayMode;
}
