package vp.jpa.crowdfunding.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.model.Category;
import vp.jpa.crowdfunding.data.CategoryRepository;

@Component
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;

	public Page<Category> findAll(Pageable page) {
		return categoryRepository.findAll(page);
	}

	public Category findOne(Long id) {
		return categoryRepository.findOne(id);
	}

	public Category save(Category category) {
		return categoryRepository.save(category);
	}

}
