import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';

@Injectable()
export class AuthenticationService {

  private readonly loginPath = '/api/login';

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(username: string, password: string): Observable<boolean> {
    var headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
      .pipe(map((res: any) => {
        let token = res && res['token'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            roles: this.jwtUtilsService.getRoles(token),
            token: token
          }));
          return true;
        }
        else {
          return false;
        }
      }), catchError((err:any) => {
                let msg = '';
                if (err.status === 400) {
          return Observable.throw('Ilegal login');
        }else {
          return Observable.throw(err.json().error || 'Server error');
        }
         }))
      /*.catch((error: any) => {
        if (error.status === 400) {
          return Observable.throw('Ilegal login');
        }
        else {
          return Observable.throw(error.json().error || 'Server error');
        }
      });*/
  }
  

  
  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') return true;
    else return false;
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    }
    else {
      return undefined;
    }
  }

}
