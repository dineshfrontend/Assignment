import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check name value before entering some value and validation' ,()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[0];
    const userNameValue = component.userRegister.get('name');
    expect(userRegisterFormElement.value).toEqual(userNameValue.value);
    expect(userNameValue?.errors).not.toBeNull();
    expect(userNameValue?.errors.required).toBeTruthy();
  });
  it('Check email value before entering some value and validation' ,()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[1];
    const userEmailValue = component.userRegister.get('email');
    expect(userRegisterFormElement.value).toEqual(userEmailValue.value);
    expect(userEmailValue?.errors).not.toBeNull();
    expect(userEmailValue?.errors.required).toBeTruthy();
  });
  it('Check bio value before entering some value and validation' ,()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('textarea')[0];
    const userBioValue = component.userRegister.get('bio');
    expect(userRegisterFormElement.value).toEqual(userBioValue.value);
    expect(userBioValue?.errors).not.toBeNull();
    expect(userBioValue?.errors.required).toBeTruthy();
  });
  it('Check password value before entering some value and validation' ,()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[2];
    const userPasswordValue = component.userRegister.get('password');
    expect(userRegisterFormElement.value).toEqual(userPasswordValue.value);
    expect(userPasswordValue?.errors).not.toBeNull();
    expect(userPasswordValue?.errors.required).toBeTruthy();
  });
  it("Check name errors after entering values",()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[0];
    userRegisterFormElement.value = "King Julien";
    userRegisterFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    const userNameValue = component.userRegister.get('name');
    expect(userRegisterFormElement.value).toEqual(userNameValue.value);
    expect(userNameValue?.errors).toBeNull();
    })
  })
  it("Check email errors after entering values",()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[1];
    userRegisterFormElement.value = "kingj@email.com";
    userRegisterFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    const userEmailValue = component.userRegister.get('email');
    expect(userRegisterFormElement.value).toEqual(userEmailValue.value);
    expect(userEmailValue?.errors).toBeNull();
    })
  })
  it("Check password errors after entering values",()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[2];
    userRegisterFormElement.value = "Password@123";
    userRegisterFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    const userPasswordValue = component.userRegister.get('password');
    expect(userRegisterFormElement.value).toEqual(userPasswordValue.value);
    expect(userPasswordValue?.errors).toBeNull();
    })
  })
  it("Check bio errors after entering values",()=>{
    const userRegisterFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('textarea')[0];
    userRegisterFormElement.value = "Hi my name is King Julien and I like to move it move it.";
    userRegisterFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    const userBioValue = component.userRegister.get('bio');
    expect(userRegisterFormElement.value).toEqual(userBioValue.value);
    expect(userBioValue?.errors).toBeNull();
    })
  })
  it("Check userRegister form is valid entering values for all fields",()=>{
    const userRegisterNameFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[0];
    const userRegisterEmailFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[1];
    const userRegisterPasswordFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('input')[2];
    const userRegisterBioFormElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#userRegister').querySelectorAll('textarea')[0];
    userRegisterNameFormElement.value = "King Julien";
    userRegisterEmailFormElement.value = "kingj@email.com";
    userRegisterPasswordFormElement.value = "Password@123";
    userRegisterBioFormElement.value="Hi my name is King Julien and I like to move it move it."
    userRegisterNameFormElement.dispatchEvent(new Event('input'));
    userRegisterEmailFormElement.dispatchEvent(new Event('input'));
    userRegisterPasswordFormElement.dispatchEvent(new Event('input'));
    userRegisterBioFormElement.dispatchEvent(new Event('input'));
    const isUserRegsiterValid = component.userRegister.valid;
    fixture.whenStable().then(()=>{
    expect(isUserRegsiterValid).toBeTruthy();
    })
  })

});
