package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.NonVegMenu;
import com.example.demo.entities.VegMenu;
import com.example.demo.repositories.NonVegMenuRepository;


@Service
public class NonVegService 
{

	@Autowired
	NonVegMenuRepository nvegRepo;
	
	
	
	public NonVegMenu save(NonVegMenu nvm)
	{
		return nvegRepo.save(nvm);
	}
	
	public Optional<NonVegMenu> getTodaysNonVegMenu(int id,String day)
	{
		return  nvegRepo.getTodaysMessMenu(id,day);
	}
	
	public int truncateNonVeg()
	{
		return nvegRepo.truncateAll();
	}
}
