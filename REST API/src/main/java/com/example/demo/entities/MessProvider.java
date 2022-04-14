package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="messowner")
public class MessProvider 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int messid;

	@Column
	String ownername;

	@Column
	String contactno;

	@Column
	String idproof;
	
	@Column
	String licenseno;
	
	@Column
	String approvalstatus;

	public MessProvider( String ownername, String contactno, String idproof, String licenseno,String status) {
		super();
		this.ownername = ownername;
		this.contactno = contactno;
		this.idproof = idproof;
		this.licenseno = licenseno;
		this.approvalstatus=status;
	}

	public MessProvider() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getMessid() {
		return messid;
	}

	public void setMessid(int messid) {
		this.messid = messid;
	}

	public String getOwnername() {
		return ownername;
	}

	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getIdproof() {
		return idproof;
	}

	public void setIdproof(String idproof) {
		this.idproof = idproof;
	}

	public String getLicenseno() {
		return licenseno;
	}

	public void setLicenseno(String licenseno) {
		this.licenseno = licenseno;
	}
	
	

	@Override
	public String toString() {
		return "MessProvider [messid=" + messid + ", ownername=" + ownername + ", contactno=" + contactno + ", idproof="
				+ idproof + ", licenseno=" + licenseno + "]";
	}
	
	/*@Column
	String membershipstatus;
	
	@Column
	int midforconsumer; */
	
	
	
}
