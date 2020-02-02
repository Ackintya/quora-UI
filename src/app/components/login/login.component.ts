import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public baseUrl = environment.baseUrl;
  public restUrl = environment.authenticationUrl.login;
  public invalidLogin: boolean = false;
  public userCredentialForm: FormGroup;

  constructor(private loginService: RestService<any>, private router: Router) {}

  ngOnInit(): void {
    window.sessionStorage.removeItem('access_token');
    this.userCredentialForm = new FormGroup({
      userId: new FormControl(''),
      password: new FormControl('')
    });
  }

  public login(): void {
    this.loginService
      .postData(this.baseUrl, this.restUrl, this.userCredentialForm.value)
      .subscribe(
        (data:any) => {
          if (data) {
            window.sessionStorage.setItem('access_token', data.access_token);
            window.sessionStorage.setItem('user_Id', data.user_Id);
            this.router.navigate(['/dashboard']);
          }
        },
        (error: HttpErrorResponse) => {
          console.error(error.error.Error_Message);
          console.error(error.error.Error_code);
          this.invalidLogin = true;
          this.userCredentialForm.reset();
        }
      );
  }
}
