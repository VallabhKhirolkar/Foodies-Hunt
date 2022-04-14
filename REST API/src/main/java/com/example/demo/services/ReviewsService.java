package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Reviews;
import com.example.demo.repositories.ReviewsRepository;

@Service
public class ReviewsService 
{
	@Autowired
	ReviewsRepository revrepo;
	
	public Reviews save(Reviews o) {
		return revrepo.save(o);
	}
	
	public List<Reviews> getAllAvailableRatingsandReviews(int id)
	{
		return revrepo.getAll(id);
	}
}
