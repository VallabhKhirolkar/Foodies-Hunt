package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class VegMenuForm 
{
	 private int messid;
	 private String day;
	 private String menustatus;
	 private String curry1;
	 private String curry2;
	 private String breadtype;
	 private String sweetdish;
	 private String starter;
	 private String rice;
	 private String colddrink;
	 private String thalitype;
	 private String specialdish;
	 
	 
	 
	public VegMenuForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VegMenuForm(int messid, String day, String menustatus, String curry1, String curry2, String breadtype,
			String sweetdish, String starter, String rice, String colddrink, String thalitype, String specialdish) {
		super();
		this.messid = messid;
		this.day = day;
		this.menustatus = menustatus;
		this.curry1 = curry1;
		this.curry2 = curry2;
		this.breadtype = breadtype;
		this.sweetdish = sweetdish;
		this.starter = starter;
		this.rice = rice;
		this.colddrink = colddrink;
		this.thalitype = thalitype;
		this.specialdish = specialdish;
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

	public String getCurry1() {
		return curry1;
	}

	public void setCurry1(String curry1) {
		this.curry1 = curry1;
	}

	public String getCurry2() {
		return curry2;
	}

	public void setCurry2(String curry2) {
		this.curry2 = curry2;
	}

	public String getBreadtype() {
		return breadtype;
	}

	public void setBreadtype(String breadtype) {
		this.breadtype = breadtype;
	}

	public String getSweetdish() {
		return sweetdish;
	}

	public void setSweetdish(String sweetdish) {
		this.sweetdish = sweetdish;
	}

	public String getStarter() {
		return starter;
	}

	public void setStarter(String starter) {
		this.starter = starter;
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

	public String getThalitype() {
		return thalitype;
	}

	public void setThalitype(String thalitype) {
		this.thalitype = thalitype;
	}

	public String getSpecialdish() {
		return specialdish;
	}

	public void setSpecialdish(String specialdish) {
		this.specialdish = specialdish;
	}
	
	
	
}
