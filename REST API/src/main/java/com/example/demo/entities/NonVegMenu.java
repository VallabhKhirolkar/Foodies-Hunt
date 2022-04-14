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
@Table(name="nonvegmenu")
public class NonVegMenu 
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
	String curry;

	
	@Column
	String breadtype;
	
	@Column
	String fry;
	
	
	@Column
	String rice;
	
	@Column
	String colddrink;

	public NonVegMenu() {
		super();
	}

	public NonVegMenu(Mess messid, String day, String menustatus, String curry, String breadtype, String fry,
			String rice, String colddrink) {
		super();
		this.messid = messid;
		this.day = day;
		this.menustatus = menustatus;
		this.curry = curry;
		this.breadtype = breadtype;
		this.fry = fry;
		this.rice = rice;
		this.colddrink = colddrink;
	}

	@Override
	public String toString() {
		return "NonVegMenu [menuid=" + menuid + ", messid=" + messid + ", day=" + day + ", menustatus=" + menustatus
				+ ", curry=" + curry + ", breadtype=" + breadtype + ", fry=" + fry + ", rice=" + rice + ", colddrink="
				+ colddrink + "]";
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

	public String getFry() {
		return fry;
	}

	public void setFry(String fry) {
		this.fry = fry;
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

	
	
	
	
}
