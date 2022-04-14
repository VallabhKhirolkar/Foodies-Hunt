package com.example.demo.entities;

public class RegisterMessProvider {
	private String username;
	private String password;
	private String ownername;
	private String contactno;
	private String idproof;
	private String licenseno;

	private String city;
	private String messtype;
	private String messname;
	private String area;

	public RegisterMessProvider() {
		super();
	}

	public RegisterMessProvider(String username, String password, String ownername, String contactno, String idproof,
			String licenseno, String city, String messtype, String messname, String area) {
		super();
		this.username = username;
		this.password = password;
		this.ownername = ownername;
		this.contactno = contactno;
		this.idproof = idproof;
		this.licenseno = licenseno;
		this.city = city;
		this.messtype = messtype;
		this.messname = messname;
		this.area = area;
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

}
