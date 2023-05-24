package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.ssafit.model.dao.ChattingDao;
import com.ssafy.ssafit.model.dto.Comment;
import com.ssafy.ssafit.model.dto.SocketVO;

@Service
public class ChattingServcieImpl implements ChattingService{
	
	@Autowired
	private ChattingDao chattingDao;

	

	@Override
	public List<SocketVO> selectAll(int challenge_id) {
		// TODO Auto-generated method stub
		return chattingDao.selectAll(challenge_id);
	}

	@Override
	public void insertChat(SocketVO socketVO) {
		// TODO Auto-generated method stub
		chattingDao.insertChat(socketVO);
	}

	
	

}
