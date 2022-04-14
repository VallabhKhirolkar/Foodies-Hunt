package com.example.demo.entities;

public class NonVegMenuForm 
{
	 private int messid;
	 private String day;
	 private String menustatus;
	 private String curry;
	 private String breadtype;
	 private String rice;
	 private String colddrink;
	 private String fry;
	 
	public NonVegMenuForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NonVegMenuForm(int messid, String day, String menustatus, String curry, String breadtype, String rice,
			String colddrink, String fry) {
		super();
		this.messid = messid;
		this.day = day;
		this.menustatus = menustatus;
		this.curry = curry;
		this.breadtype = breadtype;
		this.rice = rice;
		this.colddrink = colddrink;
		this.fry = fry;
	}

	public int getMessid() {
		return messid;
	}

	public void setMessid(int messid) {
		this.messid = messid;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getMenustatus() {
		return menustatus;
	}

	public void setMenustatus(String menustatus) {
		this.menustatus = menustatus;
	}

	public String getCurry() {
		return curry;
	}

	public void setCurry(String curry) {
		this.curry = curry;
	}

	public String getBreadtype() {
		return breadtype;
	}

	public void setBreadtype(String breadtype) {
		this.breadtype = breadtype;
	}

	public String getRice() {
		return rice;
	}

	public void setRice(String rice) {
		this.rice = rice;
	}

	public String getColddrink() {
		return colddrink;
	}

	public void setColddrink(String colddrink) {
		this.colddrink = colddrink;
	}

	public String getFry() {
		return fry;
	}

	public void setFry(String fry) {
		this.fry = fry;
	}
	 
	 

}
