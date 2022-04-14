package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Mess;
import com.example.demo.entities.Reviews;
import com.example.demo.services.ReviewsService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ReviewsController 
{
	@Autowired
	ReviewsService revserv;
	
	@PostMapping("/reviews") 
	public Reviews giveReviews(@RequestBody Reviews reviews)
	{
		System.out.println(reviews.getMessid()+" "+reviews.getRating());
		return revserv.save(reviews);
		
	}
	
	@GetMapping("/getallratingsreviews")
	public List<Reviews> getAllReviews(@RequestParam("messid") int id)
	{
		
		return revserv.getAllAvailableRatingsandReviews(id);
	}
}
