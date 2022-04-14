package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Mess;
import com.example.demo.entities.VegMenu;
import com.example.demo.entities.VegMenuForm;
import com.example.demo.services.MessService;
import com.example.demo.services.VegService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class VegMenuController 
{
	@Autowired
	VegService vegserv;
	
	@Autowired
	MessService mservice;
	
	@PostMapping("/addvegmenu")
	public VegMenu addvegmenu(@RequestBody VegMenuForm vm )
	{
		Mess m = mservice.getByMessID(vm.getMessid());
		
		VegMenu v = new VegMenu(m,vm.getDay(),vm.getMenustatus(),vm.getCurry1(),vm.getCurry2(),vm.getBreadtype(),vm.getSweetdish(),
				vm.getStarter(),vm.getRice(),vm.getColddrink(),vm.getThalitype(),vm.getSpecialdish());
		
		
		return vegserv.save(v);
	}
	
	
}
