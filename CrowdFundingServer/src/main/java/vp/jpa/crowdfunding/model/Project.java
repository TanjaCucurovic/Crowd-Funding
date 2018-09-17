package vp.jpa.crowdfunding.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
public class Project {
	@Id
	@GeneratedValue
	private Long id;
	

	private String name;
	@Column(columnDefinition="TEXT")
	private String description;
	private double donationGoal;
	private double donationCurrent;
	private boolean isSuccessful;
	private String imageURL;
	
	
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date start;
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date deadline;
   
	@OneToMany(mappedBy = "projectToDonate", fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
	private Set<Donation> donations = new HashSet<Donation>();
	
	@ManyToOne(fetch = FetchType.EAGER)
	Category category;

	public Project() {
		super();
	}





	public Project(String name, String description, double donationGoal, String imageURL, Date start,
			Date deadline, Category category) {
		super();
		this.name = name;
		this.description = description;
		this.donationGoal = donationGoal;
		this.imageURL = imageURL;
		this.start = start;
		this.deadline = deadline;
		this.category = category;
	}





	public Project(Long id, String name, String description, double donationGoal, double donationCurrent,
			boolean isSuccessful, String imageURL, Date start, Date deadline, Set<Donation> donations,
			Category category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.donationGoal = donationGoal;
		this.donationCurrent = donationCurrent;
		this.isSuccessful = isSuccessful;
		this.imageURL = imageURL;
		this.start = start;
		this.deadline = deadline;
		this.donations = donations;
		this.category = category;
	}





	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public double getDonationGoal() {
		return donationGoal;
	}

	public void setDonationGoal(double donationGoal) {
		this.donationGoal = donationGoal;
	}

	public double getDonationCurrent() {
		return donationCurrent;
	}

	public void setDonationCurrent(double donationCurrent) {
		this.donationCurrent = donationCurrent;
	}

	public boolean isSuccessful() {
		return isSuccessful;
	}

	public void setSuccessful(boolean isSuccessful) {
		this.isSuccessful = isSuccessful;
	}

	public Set<Donation> getDonations() {
		return donations;
	}

	public void setDonations(Set<Donation> donations) {
		this.donations = donations;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}


	public Date getStart() {
		return start;
	}


	public void setStart(Date start) {
		this.start = start;
	}


	public String getImageURL() {
		return imageURL;
	}


	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	
	
	
}