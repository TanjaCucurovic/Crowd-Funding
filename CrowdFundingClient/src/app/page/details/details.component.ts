import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Donation } from '../../model/donation.model';
import { DonationService } from '../../service/donation.service';
import { Project } from '../../model/project.model';
import { AuthenticationService } from '../../security/authentication-service.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  
  donation: Donation ={
    amount: 0
  }
  project:any; //ovo ispraviti
  
  constructor(private projectService:ProjectService,
              private route:ActivatedRoute,
              private donationService: DonationService,
              private authenticationService: AuthenticationService,
              private router: Router) { }
              

  ngOnInit() {
     this.loadData();
    }
  showDonate() {
    if (!this.isLoggedIn()) {
      alert("Da biste donirali novac morate se ulogovati!");
      this.router.navigate(['/login']);
    } else {
      return document.getElementById("doniranje");
    }

  }
  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }  
  /*showDonate(){
    var x = document.getElementById("donateForm");
     if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }*/
  donate() {
    
    this.donationService.createDonation(this.donation).subscribe((resp) => {
      this.projectService.increaseDonationCurrent(this.project.id, this.donation.amount).subscribe(
        (resp) => {
          this.loadData();
          this.reset();
        }
      )

    });
  }
  

  loadData() {
     this.route.params.subscribe((params)=>{
        var id = +params['id'];
        this.projectService.getOneProject(id).subscribe((resp)=>{
          this.project = resp;
        })
      })
  }
   reset() {
     this.donation= {
        amount: 0
     }
   } 
  }
  
