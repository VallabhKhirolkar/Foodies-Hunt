package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reviews")
public class Reviews 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int revid;
	@Column
	String review;
	@Column
	int rating;
	
	@Column
	int messid;
	
	@Column
	int regid;
	
	

	public Reviews() {
		super();
	}
	
	

	public Reviews(String review, int rating, int messid, int regid) {
		super();
		this.review = review;
		this.rating = rating;
		this.messid = messid;
		this.regid = regid;
	}



	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getMessid() {
		return messid;
	}

	public void setMessid(int messid) {
		this.messid = messid;
	}

	public int getRegid() {
		return regid;
	}

	public void setRegid(int regid) {
		this.regid = regid;
	}
	
	
}
