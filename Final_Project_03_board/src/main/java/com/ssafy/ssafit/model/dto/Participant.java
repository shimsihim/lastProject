package com.ssafy.ssafit.model.dto;



public class Participant {
	
	private String loginToken;
	private int participant_id;
	private int participant_challenge_id;
	private String participant_user_id;
	public Participant() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Participant(int participant_challenge_id, String participant_user_id) {
		super();
		this.participant_challenge_id = participant_challenge_id;
		this.participant_user_id = participant_user_id;
	}
	
	public Participant(String loginToken, int participant_id, int participant_challenge_id,
			String participant_user_id) {
		super();
		this.loginToken = loginToken;
		this.participant_id = participant_id;
		this.participant_challenge_id = participant_challenge_id;
		this.participant_user_id = participant_user_id;
	}
	public int getParticipant_id() {
		return participant_id;
	}
	public void setParticipant_id(int participant_id) {
		this.participant_id = participant_id;
	}
	public int getParticipant_challenge_id() {
		return participant_challenge_id;
	}
	public void setParticipant_challenge_id(int participant_challenge_id) {
		this.participant_challenge_id = participant_challenge_id;
	}
	public String getParticipant_user_id() {
		return participant_user_id;
	}
	public void setParticipant_user_id(String participant_user_id) {
		this.participant_user_id = participant_user_id;
	}
	public String getLoginToken() {
		return loginToken;
	}
	public void setLoginToken(String loginToken) {
		this.loginToken = loginToken;
	}
	@Override
	public String toString() {
		return "Participant [participant_id=" + participant_id + ", participant_challenge_id="
				+ participant_challenge_id + ", participant_user_id=" + participant_user_id + "]";
	}

	
}
