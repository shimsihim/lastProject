package com.ssafy.ssafit.model.dto;

import java.sql.Timestamp;

public class Message {
	private int message_num;
	private int challenge_id; //직접 넣을 값
	private String message_writer_id;//직접 넣을 값
	private String message_writer_nickname;
	private String message_content;//직접 넣을 값
	private String message_created_at;
	private boolean is_deleted;
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Message(int message_num, int challenge_id, String message_writer_id, String message_writer_nickname,
			String message_content, String message_created_at, boolean is_deleted) {
		super();
		this.message_num = message_num;
		this.challenge_id = challenge_id;
		this.message_writer_id = message_writer_id;
		this.message_writer_nickname = message_writer_nickname;
		this.message_content = message_content;
		this.message_created_at = message_created_at;
		this.is_deleted = is_deleted;
	}
	public int getMessage_num() {
		return message_num;
	}
	public void setMessage_num(int message_num) {
		this.message_num = message_num;
	}
	public int getChallenge_id() {
		return challenge_id;
	}
	public void setChallenge_id(int challenge_id) {
		this.challenge_id = challenge_id;
	}
	public String getMessage_writer_id() {
		return message_writer_id;
	}
	public void setMessage_writer_id(String message_writer_id) {
		this.message_writer_id = message_writer_id;
	}
	public String getMessage_writer_nickname() {
		return message_writer_nickname;
	}
	public void setMessage_writer_nickname(String message_writer_nickname) {
		this.message_writer_nickname = message_writer_nickname;
	}
	public String getMessage_content() {
		return message_content;
	}
	public void setMessage_content(String message_content) {
		this.message_content = message_content;
	}
	public String getMessage_created_at() {
		return message_created_at;
	}
	public void setMessage_created_at(String message_created_at) {
		this.message_created_at = message_created_at;
	}
	public boolean isIs_deleted() {
		return is_deleted;
	}
	public void setIs_deleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}
	@Override
	public String toString() {
		return "Message [message_num=" + message_num + ", challenge_id=" + challenge_id + ", message_writer_id="
				+ message_writer_id + ", message_writer_nickname=" + message_writer_nickname + ", message_content="
				+ message_content + ", message_created_at=" + message_created_at + ", is_deleted=" + is_deleted + "]";
	}


}
