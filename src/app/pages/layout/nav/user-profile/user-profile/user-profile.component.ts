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

  constructor(
    private readonly _storage : StorageService
  ) { }

  ngOnInit() {
    this.user = this._storage.get<IUser>(StorageKeys.ACCESS_USER)

    console.log("que tiro xd " +  JSON.stringify(this.user))
    console.log(this.user?.email)
    console.log(this.user?.alias)
  }
}
