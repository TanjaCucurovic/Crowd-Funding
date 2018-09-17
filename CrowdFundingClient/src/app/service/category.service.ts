import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  readonly path="/api/categories";

  constructor(private httpClient:HttpClient) { }

  get(){
    return this.httpClient.get(this.path);
  }

}
