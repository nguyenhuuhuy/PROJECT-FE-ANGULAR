import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {TokenService} from "../../../../service/token.service";
import {Router} from "@angular/router";
import {SignInForm} from "../../../../model/SignInForm";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: any = {};
  signInForm?: SignInForm;
  status = 'Please fill in the form to login!';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.signIn(this.signInForm).subscribe(data => {
      // @ts-ignore
      if (data.status == 202) {
        this.status = 'Login failed! Please check your account !'
      } else { // @ts-ignore
        if (data.message == 'login_denied') {
                this.status = 'bạn đã bị khóa nick'
        } else {
          // @ts-ignore
          this.tokenService.setName(data.name);
          // @ts-ignore
          this.tokenService.setAvatar(data.avatar);
          // @ts-ignore
          this.tokenService.setToken(data.token);
          // @ts-ignore
          this.tokenService.setRole(data.roles);
          this.router.navigate(['']).then(() => {
            window.location.reload();
          })
        }
      }
    })
  }

  ngOnInit(): void {
    if (this.authService.checkRegister) {
      this.status = 'ĐĂNG NHẬP THÀNH CÔNG'
    }
  }
}
