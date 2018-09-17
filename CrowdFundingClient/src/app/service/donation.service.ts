import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Donation } from '../model/donation.model';
@Injectable({
  providedIn: 'root'
})
export class DonationService {
  readonly path: string='api/donations';
  
  constructor(private httpClient: HttpClient) { }
  
  createDonation(donation: Donation) {
   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.httpClient.post(this.path, donation, {headers});
    

  }
}


  
