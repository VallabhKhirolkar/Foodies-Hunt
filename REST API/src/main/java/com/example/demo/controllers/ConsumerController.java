package com.example.demo.controllers;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.NonVegMenu;
import com.example.demo.entities.RegisterConsumer;
import com.example.demo.entities.SelectMess;
import com.example.demo.entities.VegMenu;
import com.example.demo.services.ConsumerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.MessService;
import com.example.demo.services.NonVegService;
import com.example.demo.services.VegService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ConsumerController 
{
	@Autowired
	LoginService logservice;
	
	@Autowired
	ConsumerService cservice;
	
	
	@Autowired
	JavaMailSender sender;
	
	@Autowired
	VegService vservice;
	
	@Autowired
	NonVegService nvservice;
	
	
	@PostMapping("/registerconsumer") 
	public Consumer registerConsumer(@RequestBody RegisterConsumer rc)
	{
		Login l = new Login(rc.getUsername(),rc.getPassword(),"Consumer");
		Login inserted = logservice.add(l);
		
		Consumer con = new Consumer(rc.getConsumername(),rc.getContactno(),rc.getMailid(),rc.getCurrentcity(),inserted,null);		
		//mail functonality
		SimpleMailMessage mailMsg=new SimpleMailMessage();
		mailMsg.setFrom("foodieshunt22@gmail.com");
		mailMsg.setTo("vallabhak47@gmail.com");
		mailMsg.setSubject("Foodieshunt mail test");
		mailMsg.setText("your regestriation is successfull");
		sender.send(mailMsg);
		
		
		return cservice.add(con); 
		
	}
	
	@PostMapping("/selectmess") 
	public int selectMess(@RequestBody SelectMess sm)
	{
		//System.out.println(messid+" "+regid);
		
		return cservice.getMess(sm.getMessid(), sm.getRegid()); 
		
	}
	
	@GetMapping("/gettodaysvegmenu")
	public Optional<VegMenu> getVegMenu(@RequestParam("id") int id)
	{
		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_WEEK);
		
		String weekday=null;
		
		System.out.println(day);
		
		if(day == 2)
		{
			weekday="Monday";
		}
		else if(day == 3)
		{
			weekday="Tuesday";
		}
		else if(day == 4)
		{
			weekday="Wednesday";
		}
		else if(day == 5)
		{
			weekday="Thursday";
		}
		else if(day == 6)
		{
			weekday ="Friday";
		}
		else if(day== 7)
		{
			weekday ="Saturday";
		}
		else
		{
			weekday="Sunday";
		}
		System.out.println(id+""+weekday);
		
		return vservice.getTodaysMenu(id,weekday);
	}
	
	
	@GetMapping("/getallconsumers")
	public List<Consumer> getAllConsumers(@RequestParam("messid") int id)
	{
		
		return cservice.getAllAvailableCons(id);
	}
	
	@GetMapping("/gettodaysnonvegmenu")
	public Optional<NonVegMenu> getNonVegMenu(@RequestParam("id") int id)
	{
		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_WEEK);
		
		String weekday=null;
		
		System.out.println(day);
		
		if(day == 2)
		{
			weekday="Monday";
		}
		else if(day == 3)
		{
			weekday="Tuesday";
		}
		else if(day == 4)
		{
			weekday="Wednesday";
		}
		else if(day == 5)
		{
			weekday="Thursday";
		}
		else if(day == 6)
		{
			weekday ="Friday";
		}
		else if(day== 7)
		{
			weekday ="Saturday";
		}
		else
		{
			weekday="Sunday";
		}
		System.out.println(id+""+weekday);
		
		return nvservice.getTodaysNonVegMenu(id,weekday);
	}
	
}
