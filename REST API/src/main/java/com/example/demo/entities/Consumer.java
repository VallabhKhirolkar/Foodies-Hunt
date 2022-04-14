package com.example.demo.entities;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="consumer")
public class Consumer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int regid;

	@Column
	String consumername;

	@Column
	String contactno;

	@Column
	String mailid;
	
	@Column
	String currentcity;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="loginid")
	Login loginid;
	

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="messid")
	Mess messid;

	public Consumer() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Consumer(int regid, String consumername, String contactno, String mailid, String currentcity, Mess messid,
			Login loginid) {
		super();
		this.regid = regid;
		this.consumername = consumername;
		this.contactno = contactno;
		this.mailid = mailid;
		this.currentcity = currentcity;
		this.messid = messid;
		this.loginid = loginid;
	}

	public Consumer(String consumername, String contactno, String mailid, String currentcity,
			Login loginid, Mess messid) {
		super();
		
		this.consumername = consumername;
		this.contactno = contactno;
		this.mailid = mailid;
		this.currentcity = currentcity;
		this.messid = messid;
		this.loginid = loginid;
	}

	public int getRegid() {
		return regid;
	}

	public void setRegid(int regid) {
		this.regid = regid;
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

	public Mess getMessid() {
		return messid;
	}

	public void setMessid(Mess messid) {
		this.messid = messid;
	}

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	
	
	
	
	
	
	
}
