import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'',redirectTo:'user-registration',pathMatch:'full'},
  {path:'**',redirectTo:'user-registration',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
