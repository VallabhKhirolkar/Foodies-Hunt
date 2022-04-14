package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessProvider;

import com.example.demo.entities.RegisterMessProvider;

import com.example.demo.services.LoginService;
import com.example.demo.services.MessProviderService;
import com.example.demo.services.MessService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ProviderController 
{

	@Autowired
	LoginService logservice;
	
	@Autowired
	MessProviderService pservice;
	
	@Autowired
	MessService mservice;
	
	@PostMapping("/registerprovider")
	public Mess registerMessProvider(@RequestBody RegisterMessProvider rmp)
	{
		Login l = new Login(rmp.getUsername(),rmp.getPassword(),"Provider");
		Login inserted = logservice.add(l);
		
		MessProvider mp = new MessProvider(rmp.getOwnername(),rmp.getContactno(),rmp.getIdproof(),rmp.getLicenseno(),"Pending");
		pservice.add(mp);
		
		Mess m=new Mess(rmp.getCity(),rmp.getMesstype(),rmp.getMessname(),rmp.getArea(),inserted,mp,"Pending");
		return mservice.add(m);
		
	}
	
	@GetMapping("/getallmess")
	public List<Mess> getAllMess()
	{
		
		return mservice.getAllAvailableMess();
	}
	
	
	
	
	
	
	
}
