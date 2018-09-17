import { Component } from '@angular/core';
import { Donation } from './model/donation.model';
import { Category } from './model/category.model';
import { Project } from './model/project.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './security/authentication-service.service';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projects: Project[];
  public projectsClone: Project[];

  public categories: Category[];
  public categoriesClone: Category[];

  public newProject: Project;
  //public newCategory: Category;
  public newDonation: Donation;
  constructor (private authenticationService: AuthenticationService,
              private router: Router) { }
   logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}



  