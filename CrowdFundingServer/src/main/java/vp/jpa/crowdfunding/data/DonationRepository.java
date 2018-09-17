package vp.jpa.crowdfunding.data;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.model.Donation;

@Component
@Transactional
public interface DonationRepository extends JpaRepository<Donation, Long> {
	

}
