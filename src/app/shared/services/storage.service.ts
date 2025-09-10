import { Injectable } from '@angular/core';
import { StorageKeys } from '../../interfaces/IFeedBack.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {



constructor() { }



 set<T>(key: StorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }


  get<T>(key: StorageKeys): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  remove(key: StorageKeys): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }




}
