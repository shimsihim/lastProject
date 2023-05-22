package com.ssafy.ssafit.model.dto;

import java.util.List;


public class Challenge {

	private String loginToken;
	private int challenge_id;
	private int challenge_cnt;
	private List<User> challenge_participants;
	private String challenge_sort;
	private String challenge_location;//직접 넣을 값
	private String challenge_title;//직접 넣을 값
	private String challenge_content;//직접 넣을 값
	private String challenge_makeUser;//직접 넣을 값
	private String challenge_makeUser_nickname;
	private String challenge_startDate;
	private String challenge_endDate;
	public Challenge() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Challenge(String loginToken, int challenge_id, int challenge_cnt, List<User> challenge_participants,
			String challenge_sort, String challenge_location, String challenge_title, String challenge_content,
			String challenge_makeUser, String challenge_makeUser_nickname, String challenge_startDate,
			String challenge_endDate) {
		super();
		this.loginToken = loginToken;
		this.challenge_id = challenge_id;
		this.challenge_cnt = challenge_cnt;
		this.challenge_participants = challenge_participants;
		this.challenge_sort = challenge_sort;
		this.challenge_location = challenge_location;
		this.challenge_title = challenge_title;
		this.challenge_content = challenge_content;
		this.challenge_makeUser = challenge_makeUser;
		this.challenge_makeUser_nickname = challenge_makeUser_nickname;
		this.challenge_startDate = challenge_startDate;
		this.challenge_endDate = challenge_endDate;
	}
	public String getLoginToken() {
		return loginToken;
	}
	public void setLoginToken(String loginToken) {
		this.loginToken = loginToken;
	}
	public int getChallenge_id() {
		return challenge_id;
	}
	public void setChallenge_id(int challenge_id) {
		this.challenge_id = challenge_id;
	}
	public int getChallenge_cnt() {
		return challenge_cnt;
	}
	public void setChallenge_cnt(int challenge_cnt) {
		this.challenge_cnt = challenge_cnt;
	}
	public List<User> getChallenge_participants() {
		return challenge_participants;
	}
	public void setChallenge_participants(List<User> challenge_participants) {
		this.challenge_participants = challenge_participants;
	}
	public String getChallenge_sort() {
		return challenge_sort;
	}
	public void setChallenge_sort(String challenge_sort) {
		this.challenge_sort = challenge_sort;
	}
	public String getChallenge_location() {
		return challenge_location;
	}
	public void setChallenge_location(String challenge_location) {
		this.challenge_location = challenge_location;
	}
	public String getChallenge_title() {
		return challenge_title;
	}
	public void setChallenge_title(String challenge_title) {
		this.challenge_title = challenge_title;
	}
	public String getChallenge_content() {
		return challenge_content;
	}
	public void setChallenge_content(String challenge_content) {
		this.challenge_content = challenge_content;
	}
	public String getChallenge_makeUser() {
		return challenge_makeUser;
	}
	public void setChallenge_makeUser(String challenge_makeUser) {
		this.challenge_makeUser = challenge_makeUser;
	}
	public String getChallenge_makeUser_nickname() {
		return challenge_makeUser_nickname;
	}
	public void setChallenge_makeUser_nickname(String challenge_makeUser_nickname) {
		this.challenge_makeUser_nickname = challenge_makeUser_nickname;
	}
	public String getChallenge_startDate() {
		return challenge_startDate;
	}
	public void setChallenge_startDate(String challenge_startDate) {
		this.challenge_startDate = challenge_startDate;
	}
	public String getChallenge_endDate() {
		return challenge_endDate;
	}
	public void setChallenge_endDate(String challenge_endDate) {
		this.challenge_endDate = challenge_endDate;
	}
	@Override
	public String toString() {
		return "Challenge [loginToken=" + loginToken + ", challenge_id=" + challenge_id + ", challenge_cnt="
				+ challenge_cnt + ", challenge_participants=" + challenge_participants + ", challenge_sort="
				+ challenge_sort + ", challenge_location=" + challenge_location + ", challenge_title=" + challenge_title
				+ ", challenge_content=" + challenge_content + ", challenge_makeUser=" + challenge_makeUser
				+ ", challenge_makeUser_nickname=" + challenge_makeUser_nickname + ", challenge_startDate="
				+ challenge_startDate + ", challenge_endDate=" + challenge_endDate + "]";
	}
	
	
}
