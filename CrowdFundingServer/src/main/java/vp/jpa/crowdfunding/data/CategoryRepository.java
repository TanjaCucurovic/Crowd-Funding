package vp.jpa.crowdfunding.data;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.jpa.crowdfunding.model.Category;

@Component
@Transactional
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
