import { PlayMode, SettingsService } from './settings.service';

export const playmodeServiceFactory = (settingsService: SettingsService) => {
  if (settingsService.playMode === PlayMode.Single) {
    return new SinglePlayerService();
  }

  return new MultiPlayerService();
};

export const playmodeServiceFactoryDeps = [SettingsService];

export abstract class PlaymodeService {
  log() {
    console.log((this as any).constructor.name);
  }
}

export class SinglePlayerService extends PlaymodeService {
}

export class MultiPlayerService extends PlaymodeService {
}
