import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  date = new Date(Date.now());
  categories: any;
  projectsToAdd: any={
    name: '',
    description: '',
    start: this.date,
    deadline: this.date,
    donationGoal: 0,
    donationCurrent: 0,
    isSuccessful: false,
      category: {
        id: "",
      },
    donations: [{
      amount: 0,
    }],
      imageURL: '',
  };

  constructor(private projectService: ProjectService,
            private categoryService: CategoryService) { }

  ngOnInit( ) {
    this.loadData();
  }

  loadData() {
    this.categoryService.get().subscribe((resp)=>{
      this.categories = resp['content'];
    });
  }

  byId(category1, category2){
    return category1.id === category2.id;
  }

  saveProject(){
    this.projectService.addProject(this.projectsToAdd).subscribe((resp)=>{
    })
  }

  reset() {
    this.projectsToAdd = {
      name: '',
      description: '',
      start: this.date,
      deadline: this.date,
      donationGoal: 0,
      donationCurrent: 0,
      isSuccessful: false,
        category: {
          id: "",
        },
      donations: [{
        amount: 0,
      }],
        imageURL: '',
    }
  }

}
