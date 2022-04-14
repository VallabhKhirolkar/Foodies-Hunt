package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CheckLogin;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessProvider;
import com.example.demo.services.LoginService;
import com.example.demo.services.MessProviderService;
import com.example.demo.services.MessService;
import com.example.demo.services.NonVegService;
import com.example.demo.services.VegService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController 
{
	@Autowired
	LoginService logservice;
	
	@Autowired
	MessProviderService mservice;
	
	@Autowired
	MessService ms;
	
	@Autowired
	VegService vs;
	
	@Autowired
	NonVegService nvs;
	
	
	@PostMapping("/checkLogin")	
	public Object checkUserLogin(@RequestBody CheckLogin info) 
	{
		System.out.println(info.getUsername() + info.getPassword());
		return  logservice.checkLogin(info.getUsername(), info.getPassword());		
	}
	
	@GetMapping("/getallpendingmessapprovals")
	public List<MessProvider> getAllMessForApprovals()
	{
		
		return mservice.getAllAvailableMessforApprovals();
	}
	
	
	@GetMapping("/provideapprovalformess")
	public int provideApprovals(@RequestParam("messid") int id)
	{
		int i = apprmess(id);
		
		return mservice.approvemess(id);
	}
	
	
	public int apprmess(int id)
	{
		return ms.appr(id);
	}
	
	@GetMapping("/truncatepreviousmenus")
	public int truncateAllMenus()
	{
		int j = truncateNonVegMenu();
		return vs.truncateVeg();
	}
	
	public int truncateNonVegMenu()
	{
		return nvs.truncateNonVeg();
	}
}
