import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project.model';
import { Category } from '../../model/category.model';
import { ProjectService } from '../../service/project.service';
import { CategoryService } from '../../service/category.service';
import { AuthenticationService } from '../../security/authentication-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  [x: string]: any;
  projects: Project[];
  currentPage: number=0;
  totalPages: number;
  critteria: string;
  inputSearch: string;
  categories: Category[];
  
  constructor(private projectService: ProjectService,
              private categoryService: CategoryService,
              private authenticationService: AuthenticationService, ) { }

  ngOnInit() {
    this.loadData();
    
  }
  isAdmin() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === null) {
      return false;
    }
    if (currentUser.roles == 'ADMINISTRATOR') {
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
     return this.authenticationService.isLoggedIn();
  }
  loadData() {
    this.projectService.getProjects(this.currentPage).subscribe(
      (resp) => {
        this.projects = resp['content'];
        this.totalPages = resp['totalPages'];
      });
    this.categoryService.get().subscribe(
      (resp) => {
        this.categories = resp['content'];
      }
    )
  }
   changePage(i:number){
    this.currentPage+=i;
    this.loadData();
  }
  search(){
    if (this.critteria === 'name') {
      var name = this.inputSearch;
    } else {
      var category = this.inputSearch;
    }
    this.projectService.getProjects(0, name, category).subscribe((resp)=>{
      this.projects = resp['content'];
      this.totalPages = resp['totalPages'];
    })
  }
  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe((resp) =>{
      alert("projekat je obrisan");
    })
    this.loadData();
  }
  resetSearch(){
    this.loadData();
   // this.name = '';
   // this.projectService.getProjects(0, this.name).subscribe((resp)=>{
   //   this.projects = resp ['content'];
   // })
  }
  
  
  





}
