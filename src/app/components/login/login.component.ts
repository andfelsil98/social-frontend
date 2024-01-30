import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}
  form!: FormGroup;
  ngOnInit(){
    // this.form = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

    // this.form.get('email').subscribe(data =>{
    //   console.log("data: ", data)
    // })
  }

  login(){
    console.log("form: ", this.form);
    if (this.form?.valid){
      this.loginService.login(this.form.value).subscribe( (data: Login) => {
        if (data?.token) {
          localStorage.setItem('_token', data.token);
          this.router.navigate(['home'])
        }
      })
    }
  }
}
