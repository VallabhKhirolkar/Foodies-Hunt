package com.example.demo.entities;

public class RegisterConsumer 
{
	private String username;
	private String password;
	private String consumername;
	private String contactno;
	private String mailid;
	private String currentcity;
	
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
	public String getConsumername() {
		return consumername;
	}
	public void setConsumername(String consumername) {
		this.consumername = consumername;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getCurrentcity() {
		return currentcity;
	}
	public void setCurrentcity(String currentcity) {
		this.currentcity = currentcity;
	}
	public RegisterConsumer(String consumername, String contactno, String mailid, String currentcity) {
		super();
		this.consumername = consumername;
		this.contactno = contactno;
		this.mailid = mailid;
		this.currentcity = currentcity;
	}
	
	
}

