package vp.jpa.crowdfunding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.jpa.crowdfunding.model.Donation;
import vp.jpa.crowdfunding.service.DonationService;

@RestController
public class DonationController {
	

	@Autowired
	private DonationService donationService;
	
	@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	@GetMapping(value = "api/donations")
    public Page<Donation> getAll(Pageable pageable){
    	final Page<Donation> retVal = donationService.findAll(pageable);
    	return retVal;
    }
	@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
    @GetMapping(value = "api/donations/{id}")
    public ResponseEntity<Donation> getDonation(@PathVariable Long id) {
        Donation donation = donationService.findOne(id);

        if (donation == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(donation, HttpStatus.OK);
    }
	@PreAuthorize("isAuthenticated()")
    @PostMapping(value = "api/donations")
    public ResponseEntity<Donation> create(@RequestBody Donation donation) {
        final Donation savedDonation = donationService.save(donation);
        return new ResponseEntity<>(savedDonation, HttpStatus.CREATED);
    }

}
