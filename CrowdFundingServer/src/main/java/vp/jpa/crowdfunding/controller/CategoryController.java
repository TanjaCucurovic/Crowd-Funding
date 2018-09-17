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

import vp.jpa.crowdfunding.model.Category;
import vp.jpa.crowdfunding.service.CategoryService;

@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(value = "api/categories")
	public Page<Category> getAll(Pageable pageable) {
		final Page<Category> retVal = categoryService.findAll(pageable);
		return retVal;
	}
	
	@GetMapping(value = "api/categories/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable Long id) {
		Category category = categoryService.findOne(id);

		if (category == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(category, HttpStatus.OK);
	}
	@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	@PostMapping(value = "api/categories")
	public ResponseEntity<Category> create(@RequestBody Category category) {
		final Category savedCategory = categoryService.save(category);
		return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
	}

}
