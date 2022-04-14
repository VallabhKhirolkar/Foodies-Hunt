package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Mess;
import com.example.demo.entities.NonVegMenu;
import com.example.demo.entities.NonVegMenuForm;
import com.example.demo.entities.VegMenu;
import com.example.demo.entities.VegMenuForm;
import com.example.demo.services.MessService;
import com.example.demo.services.NonVegService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class NonVegMenuController 
{

	@Autowired
	NonVegService nvegserv;
	
	@Autowired
	MessService mservice;
	
	@PostMapping("/addnonvegmenu")
	public NonVegMenu addnonvegmenu(@RequestBody NonVegMenuForm vm )
	{
		Mess m = mservice.getByMessID(vm.getMessid());
		
		NonVegMenu v = new NonVegMenu(m,vm.getDay(),vm.getMenustatus(),vm.getCurry(),vm.getBreadtype(),
				vm.getFry(),vm.getRice(),vm.getColddrink());
		
		
		return nvegserv.save(v);
	}
	
	
}
