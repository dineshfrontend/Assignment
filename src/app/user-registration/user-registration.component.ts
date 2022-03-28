import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userRegister: FormGroup;

  constructor(private fb: FormBuilder,private app:AppService,public router:Router) { }

  ngOnInit(): void {
    this.userRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      bio: ['', [Validators.required]],
    });
  }

  register(){
    if (this.userRegister.valid) {
      this.app.saveUserDeatils().subscribe(response => {
      if(response.success){
          this.app.isProfile.next(true);
          this.router.navigateByUrl('/user-profile');
        }
      })
    }else{
      this.validateAllFormFields(this.userRegister);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {        
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }
}

