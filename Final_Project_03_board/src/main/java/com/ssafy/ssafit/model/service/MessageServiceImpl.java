package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.ssafit.model.dao.MessageDao;
import com.ssafy.ssafit.model.dto.Message;

@Service
public class MessageServiceImpl implements MessageService {

	
		
		@Autowired
		private MessageDao MessageDao;

		@Override
		public List<Message> selectAll(int challenge_id) {
			// TODO Auto-generated method stub
			return MessageDao.selectAll(challenge_id);
		}

		@Override
		public void registMessage(Message Message) {
			MessageDao.registMessage(Message);
			
		}

		@Override
		public void deleteMessage(int Message_num) {
			// TODO Auto-generated method stub
			MessageDao.deleteMessage(Message_num);
		}



}
