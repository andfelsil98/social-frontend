import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoints } from 'src/resources/endpoints';
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    public endpoints: Endpoints
  ) { }

  login(formData: any){
    // const body = {
    //   email: "test@test.com",
    //   password: "test"
    // }
    console.log(`${environment.API_URL}${this.endpoints.urlLogin}`);
    return this.http.post<Login>(`${environment.API_URL}${this.endpoints.urlLogin}`, formData);
  }
}
