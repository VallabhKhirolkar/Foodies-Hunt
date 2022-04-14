package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.VegMenu;
import com.example.demo.repositories.VegMenuRepository;

@Service
public class VegService 
{
	@Autowired
	VegMenuRepository vegRepo;
	
	public VegMenu save(VegMenu vm)
	{
		return vegRepo.save(vm);
	}
	
	public Optional<VegMenu> getTodaysMenu(int id,String day)
	{
		return  vegRepo.getTodaysMessMenu(id,day);
	}
	
	public int truncateVeg()
	{
		return vegRepo.truncateAll();
	}
}
