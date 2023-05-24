package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Comment;
import com.ssafy.ssafit.model.dto.SocketVO;

public interface ChattingService {


// 챌린지의 모든 채팅 받아오기
	public List<SocketVO> selectAll(int challenge_id);

//현재 입력된 채팅 입력하기
	public void insertChat(SocketVO socketVO);

}
