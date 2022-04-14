package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Mess;
import com.example.demo.entities.Reviews;

public interface ReviewsRepository extends JpaRepository<Reviews, Integer>
{
	 @Query(value="select * from reviews where messid= ?1",nativeQuery=true)
		public List<Reviews> getAll(int id);
}
