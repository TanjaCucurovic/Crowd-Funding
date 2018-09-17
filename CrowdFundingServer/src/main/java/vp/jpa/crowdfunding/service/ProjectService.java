package vp.jpa.crowdfunding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.data.ProjectRepository;
import vp.jpa.crowdfunding.model.Project;

@Component
public class ProjectService {
	
	@Autowired
	ProjectRepository projectRepository;
	
	public Page <Project> findAll(Pageable page) {
		return projectRepository.findAll(page);
	}
	
	public Project findOne(Long id) {
		return projectRepository.findOne(id);
	}

	public Project save(Project project) {
		return projectRepository.save(project);
	}

	public void remove(Long id) {
		projectRepository.delete(id);
	}
	
	public Page<Project> findByName (String name, Pageable page){
		return projectRepository.findByNameContains(name, page);
	}

	public Page<Project> findByCategoryName (String name, Pageable page){
		return projectRepository.findByCategoryNameContains(name, page);
	}


}
