package vp.jpa.crowdfunding.data;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.model.Project;

@Component
@Transactional
public interface ProjectRepository extends JpaRepository<Project, Long> {
	
	
	
	public Page<Project>findByNameContains(String name, Pageable page);
	
	//@Query("select c from Project.CategoryName c where c.name like %:name%")
	public Page<Project>findByCategoryNameContains(String name, Pageable page);

	
}
