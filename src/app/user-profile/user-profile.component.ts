import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ProfileDetails } from '../model.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
profileDetails:ProfileDetails = {
  name:"",
  email:"",
  bio:"",
  img:""
}
  constructor(private app:AppService) { }

  ngOnInit(): void {
    this.getProfileDetails()
  }

  getProfileDetails(){
    this.app.getProfileDetails().subscribe(response => {
      this.profileDetails = response;
    })
  }
}
