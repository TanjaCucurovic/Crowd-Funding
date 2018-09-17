package vp.jpa.crowdfunding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.jpa.crowdfunding.model.Project;
import vp.jpa.crowdfunding.service.ProjectService;

@RestController
public class ProjectController {
	
	@Autowired
    private ProjectService projectService;
	
	@GetMapping(value = "api/projects")
    public Page<Project> getAll(Pageable page) {
        final Page<Project> retVal = projectService.findAll(page);

        return retVal;
    }
	
    @GetMapping(value = "api/projects/{id}")
    public ResponseEntity<Project> getOne(@PathVariable Long id) {
        Project project = projectService.findOne(id);

        if (project == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(project, HttpStatus.OK);
    }
    
    @RequestMapping(value = "api/projects", method = RequestMethod.GET, params = "name")
    public ResponseEntity<Page<Project>> getProjectByName(@RequestParam String name, Pageable page){
    	Page<Project> projects = projectService.findByName(name, page);
    	return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    
    @RequestMapping(value = "api/projects", method = RequestMethod.GET, params = "category")
    public ResponseEntity<Page<Project>> getProjectByCategory(@RequestParam String category, Pageable page){
    	Page<Project> projects = projectService.findByCategoryName(category, page);
    	return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "api/projects")
    public ResponseEntity<Project> create(@RequestBody Project project) {
        final Project savedProject = projectService.save(project);
        return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
    }
    @PreAuthorize("isAuthenticated()")
    @PutMapping(value = "api/projects/addDonation/{id}")
    public ResponseEntity<Project> addDonation(@PathVariable Long id, 
    										   @RequestParam double ammount){
    	Project donatedProject = projectService.findOne(id);
    	
    	double tmp = donatedProject.getDonationCurrent();
    	tmp += ammount;
    	donatedProject.setDonationCurrent(tmp);	
    	Project savedDonatedProject = projectService.save(donatedProject);
    	return new ResponseEntity<>(savedDonatedProject, HttpStatus.CREATED);
    }
    @PreAuthorize("isAuthenticated()")
    @PutMapping(value = "api/projects/{id}")
    public ResponseEntity<Project> update(	@PathVariable Long id,
    									@RequestBody Project project) {
        Project foundProject = projectService.findOne(id);
        if (project == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        foundProject.setName(project.getName());
        foundProject.setStart(project.getStart());
        foundProject.setDeadline(project.getDeadline());
        foundProject.setDonationGoal(project.getDonationGoal());
        foundProject.setDonationCurrent(project.getDonationCurrent());
        foundProject.setCategory(project.getCategory());
        foundProject.setDescription(project.getDescription());
        Project savedProject = projectService.save(foundProject);
        return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
    }
    
    
    @SuppressWarnings("rawtypes")
    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	@DeleteMapping(value = "api/projects/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        final Project project = projectService.findOne(id);
        if (project == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        projectService.remove(id);
        return new ResponseEntity(HttpStatus.OK);
    }


}
