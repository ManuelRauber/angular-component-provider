import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeComponent } from './components/home/home.component';
import { PlaySceneComponent } from './components/play-scene/play-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaySceneComponent,
    HomeComponent,
    FrameComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'frame',
        component: FrameComponent,
        children: [
          {
            path: 'play',
            component: PlaySceneComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
