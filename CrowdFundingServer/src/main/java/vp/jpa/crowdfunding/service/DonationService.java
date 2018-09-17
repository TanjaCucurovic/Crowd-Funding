package vp.jpa.crowdfunding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.data.DonationRepository;
import vp.jpa.crowdfunding.model.Donation;

@Component
public class DonationService {
	
	@Autowired
	DonationRepository donationRepository;
	
	public Page<Donation> findAll(Pageable page) {
		return donationRepository.findAll(page);
	}

	public Donation findOne(Long id) {
		return donationRepository.findOne(id);
	}

	public Donation save(Donation donation) {
		return donationRepository.save(donation);
	}





}
