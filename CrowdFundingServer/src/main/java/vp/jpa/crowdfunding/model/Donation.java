package vp.jpa.crowdfunding.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Donation {
	@Id
	@GeneratedValue
	private Long id;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	private Project projectToDonate;
	
	
	private double ammount;
	
	//@Enumerated(EnumType.STRING)
	//private DonationType type;
	
	public Donation() {
		super();
	}



	public Donation(Long id, Project projectToDonate, double ammount) {
		super();
		this.id = id;
		this.projectToDonate = projectToDonate;
		this.ammount = ammount;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getAmmount() {
		return ammount;
	}

	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}



	public Project getProjectToDonate() {
		return projectToDonate;
	}



	public void setProjectToDonate(Project projectToDonate) {
		this.projectToDonate = projectToDonate;
	}


	

	
	
	

}