import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../../shared/services/storage.service';
import { IUser } from '../../../../../interfaces/IUser.interface';
import { StorageKeys } from '../../../../../interfaces/IFeedBack.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: IUser | null = null;
 
  avatarInitial : string = '';
  avatarBgColor : string ='';
  constructor(
    private readonly _storage : StorageService
  ) { }

  ngOnInit() {
    this.user = this._storage.get<IUser>(StorageKeys.ACCESS_USER)
    
    
    if(this.user){
      this.avatarInitial = this.getInitialsFromAlias(this.user?.alias)
    }
  }

  private getInitialsFromAlias(alias?: string): string{

    if(!alias) return '?';
  const parts = alias.trim().split(/\s+/);
  const initials = parts.map(word => word[0].toUpperCase());
  return initials.join('');

  }

}
