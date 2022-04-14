package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consumer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessProvider;
import com.example.demo.repositories.ConsumerRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.MessProviderRepository;
import com.example.demo.repositories.MessRepository;

@Service
public class LoginService 
{
	@Autowired
	LoginRepository loginrepo;
	
	@Autowired
	ConsumerRepository crepo;
	
	@Autowired
	MessRepository mrepo;
	
	
	
	public Login add(Login l)
	{
		return loginrepo.save(l);
	}
	
	
	
	public Object checkLogin(String uname,String pwd)
	{
		Login l =loginrepo.checkLoginBy(uname, pwd);
		Consumer c = null;
		Mess m = null;
		if(l != null)
		{
			
			if(l.getRole().equals("Consumer"))
			{
				int id = l.getLoginid();
				
				Optional<Consumer> op = crepo.getByLoginId(id);
				try
				{
					System.out.println("*****");
					c = op.get();
					System.out.println(c.toString());
				}
				catch (Exception e) 
				{
					e.printStackTrace();
				}
				return c;
			}
			else if(l.getRole().equals("Provider"))
			{
				int id = l.getLoginid();
				
				Optional<Mess> op = mrepo.getByLoginId(id);
				try
				{
					
					m = op.get();
					System.out.println(m.toString());
					
				}
				catch (Exception e) 
				{
					e.printStackTrace();
				}
				return m;
			}
			else if(l.getRole().equals("Admin"))
			{
				return l;
			}
		}
		
		return null; 
		
	} 
	
}
