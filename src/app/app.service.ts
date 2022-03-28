import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { ProfileDetails, UserResponse } from './model.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
isProfile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  public isAuthenticated(): boolean {
     return this.isProfile.value;
  }

  saveUserDeatils(){
    return this.http.get<UserResponse>("https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d");
  }

  getProfileDetails(){
    return this.http.get<ProfileDetails>("https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2");
  }
}
