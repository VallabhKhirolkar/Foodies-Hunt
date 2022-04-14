package com.example.demo.entities;

public class CheckLogin 
{
	private String username;
	private String password;
	
	public CheckLogin(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public CheckLogin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
