import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySceneComponent } from './play-scene.component';

describe('PlaySceneComponent', () => {
  let component: PlaySceneComponent;
  let fixture: ComponentFixture<PlaySceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
