import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from '../model/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  readonly path: string='api/projects';
  params :HttpParams;
  constructor(private httpClient: HttpClient) { }

  getProjects(currentPage: number, name?: string, category?: string) {
    let cPage = String(currentPage);
    let params: HttpParams = new HttpParams();
    if (name) {
      params= params.append('name',name).set('page', cPage);
    }
    if (category) {
      params= params.append('category', category).set('page', cPage);
    }  

    return this.httpClient.get<Project[]>(this.path, {params});
  }
  
  getOneProject(id:number){
    return this.httpClient.get(this.path+"/"+id);
  }

  deleteProject(id: number) {
    return this.httpClient.delete(this.path+"/"+id);
  }
  addProject(project){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpClient.post(this.path, project, {headers});
  }

  increaseDonationCurrent(id: number, amount: number) {
    let params: HttpParams = new HttpParams();
    let tmp = String(amount);
    params = params.append('ammount', tmp);
    /* console.log(params); */
    return this.httpClient.put(this.path + "/addDonation/" + id, params );
  }

}
