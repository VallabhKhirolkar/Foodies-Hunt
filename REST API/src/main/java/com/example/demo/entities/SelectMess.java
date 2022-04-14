package com.example.demo.entities;

public class SelectMess 
{
	private int messid;
	private int regid;
	public SelectMess() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SelectMess(int messid, int regid) {
		super();
		this.messid = messid;
		this.regid = regid;
	}
	public int getMessid() {
		return messid;
	}
	public void setMessid(int messid) {
		this.messid = messid;
	}
	public int getRegid() {
		return regid;
	}
	public void setRegid(int regid) {
		this.regid = regid;
	}
	
	@Override
	public String toString() {
		return "SelectMess [messid=" + messid + ", regid=" + regid + "]";
	}
	
	
}
