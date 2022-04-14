package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Mess;

import com.example.demo.repositories.MessRepository;

@Service
public class MessService 
{
	@Autowired
	MessRepository mrepo;
	
	public Mess add(Mess m)
	{
		return mrepo.save(m);
	}

	public List<Mess> getAllAvailableMess()
	{
		return mrepo.fetchAllMess();
	}
	
	public Mess getByMessID(int id)
	{
		return mrepo.getByMessId(id);
	}
	
	public int appr(int id)
	{
		return mrepo.approveonlymess(id);
	}
}
