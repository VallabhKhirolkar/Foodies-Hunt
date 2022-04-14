package com.example.demo.entities;

public class RegisterMess 
{
	private String city;
	private String messtype;
	private String messname;
	private String area;
	
	public RegisterMess(String city, String messtype, String messname, String area) {
		super();
		this.city = city;
		this.messtype = messtype;
		this.messname = messname;
		this.area = area;
	}

	public RegisterMess() {
		super();
		// TODO Auto-generated constructor stub
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

	@Override
	public String toString() {
		return "RegisterMess [city=" + city + ", messtype=" + messtype + ", messname=" + messname + ", area=" + area
				+ "]";
	}
	
	
}
