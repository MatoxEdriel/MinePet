import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EventEmitter, Output } from '@angular/core';
import player, { AnimationItem, LottiePlayer } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AuthService } from '../../../features/auth/services/Auth.service';
import {Router} from '@angular/router'
import { MatMenuModule } from '@angular/material/menu';


export function playerFactory(): LottiePlayer {
  return player;
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule, LottieComponent, MatMenuModule],

  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private readonly _authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  notificationAnimation!: AnimationItem;
  settingAnimation!: AnimationItem;

  onNotificationCreated(animation: AnimationItem) {
    this.notificationAnimation = animation;
  }

  onSettingsCreated(animation: AnimationItem) {
    this.settingAnimation = animation;
  }

  logout() {
  this._authService.logOut();
  this.router.navigate(['auth/login']);
}
//Considerar poner un perfil Uaser profile para la base de dato
goToProfile() {
  this.router.navigate(['/profile']); 
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
