package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.ConsumerRepository;


@Service
public class ConsumerService 
{
	@Autowired
	ConsumerRepository crepo;
	
	public Consumer add(Consumer c)
	{
		return crepo.save(c);
	}
	
	public int getMess(int messid,int regid)
	{
		return crepo.getMessfromId(messid, regid);
	}
	
	public List<Consumer> getAllAvailableCons(int id)
	{
		return crepo.getAllCons(id);
	}
	
}
