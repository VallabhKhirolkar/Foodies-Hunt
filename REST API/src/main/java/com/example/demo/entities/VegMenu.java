package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="vegmenu")
public class VegMenu 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int menuid;

	@ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="messid")
	 Mess messid;
	
	@Column
	String day;

	@Column
	String menustatus;

	@Column
	String curry1;

	@Column
	String curry2;
	
	@Column
	String breadtype;
	
	@Column
	String sweetdish;
	
	@Column
	String starter;
	
	@Column
	String rice;
	
	@Column
	String colddrink;
	
	@Column
	String thalitype;
	
	@Column
	String specialdish;

	public VegMenu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VegMenu(Mess messid, String day, String menustatus, String curry1, String curry2, String breadtype,
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

	public int getMenuid() {
		return menuid;
	}

	public void setMenuid(int menuid) {
		this.menuid = menuid;
	}

	public Mess getMessid() {
		return messid;
	}

	public void setMessid(Mess messid) {
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

	@Override
	public String toString() {
		return "VegMenu [menuid=" + menuid + ", messid=" + messid + ", day=" + day + ", menustatus=" + menustatus
				+ ", curry1=" + curry1 + ", curry2=" + curry2 + ", breadtype=" + breadtype + ", sweetdish=" + sweetdish
				+ ", starter=" + starter + ", rice=" + rice + ", colddrink=" + colddrink + ", thalitype=" + thalitype
				+ ", specialdish=" + specialdish + "]";
	}

	
	
	
	
	
	 
	
}
