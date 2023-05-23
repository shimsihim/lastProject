package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Message;

public interface MessageService {
	
	List<Message> selectAll(int challenge_id);  // 챌린지에 대한 전체 메시지 가져오기
	void registMessage(Message Message);        // 메시지 등록
	void deleteMessage(int Message_num);        // 댓글 삭제
	
}
