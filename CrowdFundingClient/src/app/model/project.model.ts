import { Donation } from './donation.model';
import { Category } from './category.model';

export class Project implements ProjectInterface {
    public name: string;
    public description: string;
	public start: Date;
	public deadline: Date;
	public donationGoal: number;
	public donationCurrent: number;
    public isSuccessful?:boolean;
    public category:Category;
    public donations:Donation[];
    public imageURL: string;

    constructor(projectCfg: ProjectInterface) {
        this.name = projectCfg.name;
        this.description = projectCfg.description;
        this.start = projectCfg.start;
        this.deadline = projectCfg.deadline;
        this.donationGoal = projectCfg.donationGoal;
        this.donationCurrent = projectCfg.donationCurrent;
        this.isSuccessful = projectCfg.isSuccessful;
        this.category = projectCfg.category;
        this.donations = projectCfg.donations || [];
        this.imageURL = projectCfg.imageURL;
    }
    

}

interface ProjectInterface {
    name: string;
    description: string;
	start: Date;
	deadline: Date;
	donationGoal: number;
	donationCurrent: number;
    isSuccessful?:boolean;
    donations?:Donation[];
    category: Category;
    imageURL: string;
   
}