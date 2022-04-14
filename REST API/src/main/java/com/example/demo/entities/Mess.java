package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name = "mess")
public class Mess {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int mid;

	@Column
	String city;

	@Column
	String messtype;

	@Column
	String messname;

	@Column
	String area;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	Login loginid;

	
	 @OneToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="messid")
	 MessProvider messid;
	 
	 @Column
	 String approvalstatus;

	public Mess() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mess( String city, String messtype, String messname, String area, Login loginid, MessProvider messid,
			String approvalstatus) {
		super();
		
		this.city = city;
		this.messtype = messtype;
		this.messname = messname;
		this.area = area;
		this.loginid = loginid;
		this.messid = messid;
		this.approvalstatus = approvalstatus;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getMesstype() {
		return messtype;
	}

	public void setMesstype(String messtype) {
		this.messtype = messtype;
	}

	public String getMessname() {
		return messname;
	}

	public void setMessname(String messname) {
		this.messname = messname;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	public MessProvider getMessid() {
		return messid;
	}

	public void setMessid(MessProvider messid) {
		this.messid = messid;
	}

	public String getApprovalstatus() {
		return approvalstatus;
	}

	public void setApprovalstatus(String approvalstatus) {
		this.approvalstatus = approvalstatus;
	}

	@Override
	public String toString() {
		return "Mess [mid=" + mid + ", city=" + city + ", messtype=" + messtype + ", messname=" + messname + ", area="
				+ area + ", loginid=" + loginid + ", messid=" + messid + ", approvalstatus=" + approvalstatus + "]";
	}

	
	
	
	
	
	

	
}
