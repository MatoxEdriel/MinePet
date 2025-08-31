import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter, Output } from '@angular/core';
import player, { AnimationItem, LottiePlayer } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

export function playerFactory(): LottiePlayer {
  return player;
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule, LottieComponent],

  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  notificationAnimation!: AnimationItem;
  settingAnimation!: AnimationItem;

  onNotificationCreated(animation: AnimationItem) {
    this.notificationAnimation = animation;
  }

  onSettingsCreated(animation: AnimationItem) {
    this.settingAnimation = animation;
  }

  notificationOptions: AnimationOptions = {
    path: 'lottie/notification.json',
    loop: true,
    autoplay: false,
  };

  settingsOptions: AnimationOptions = {
    path: 'lottie/settings.json',
    loop: true,
    autoplay: false,
  };

  play(animation: AnimationItem) {
    animation?.play();
  }

  stop(animation: AnimationItem) {
    animation?.stop();
  }
}
