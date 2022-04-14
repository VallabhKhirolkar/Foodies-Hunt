package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessProvider;
import com.example.demo.repositories.ConsumerRepository;
import com.example.demo.repositories.MessProviderRepository;

@Service
public class MessProviderService 
{
	@Autowired
	MessProviderRepository mprepo;
	
	public MessProvider add(MessProvider mp)
	{
		return mprepo.save(mp);
	}
	
	public List<MessProvider> getAllAvailableMessforApprovals()
	{
		return mprepo.fetchAllMessforApprovals();
	}
	
	public int approvemess(int id)
	{
		return mprepo.approve(id);
	}
	
	
}
