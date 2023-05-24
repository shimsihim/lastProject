package com.ssafy.ssafit.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

// Data 어노테이션은 getter, setter를 자동 생성합니다.
// AllArgsConstructor 어노테이션은 생성자를 자동 생성합니다.
@Data
@AllArgsConstructor
public class SocketVO {

	
		// 유저의 이름을 저장하기 위한 변수
		private String userName;

		// 메시지의 내용을 저장하기 위한 변수
		private String content;
		private int challenge_id;
		
		public SocketVO() {
			super();
		}

		public SocketVO(String userName, String content, int challenge_id) {
			super();
			this.userName = userName;
			this.content = content;
			this.challenge_id = challenge_id;
		}

		public String getUserName() {
			return userName;
		}

		public void setUserName(String userName) {
			this.userName = userName;
		}

		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public int getChallenge_id() {
			return challenge_id;
		}

		public void setChallenge_id(int challenge_id) {
			this.challenge_id = challenge_id;
		}

		@Override
		public String toString() {
			return "SocketVO [userName=" + userName + ", content=" + content + ", challenge_id=" + challenge_id + "]";
		}

		
		
}
