package com.ssafy.ssafit.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ssafy.ssafit.model.dao.ChattingDao;
import com.ssafy.ssafit.model.dto.SocketVO;

@Controller
public class SocketController {
	@Autowired
	ChattingDao chatDao;

    // /receive를 메시지를 받을 endpoint로 설정합니다.
    @MessageMapping("/receive/{challenge_id}")
    
    // /send로 메시지를 반환합니다.
    @SendTo("/send/{challenge_id}")
    
    // SocketHandler는 1) /receive에서 메시지를 받고, /send로 메시지를 보내줍니다.
    // 정의한 SocketVO를 1) 인자값, 2) 반환값으로 사용합니다.
    public SocketVO SocketHandler(SocketVO socketVO) {
        // vo에서 getter로 userName을 가져옵니다.
        String userName = socketVO.getUserName();
        // vo에서 setter로 content를 가져옵니다.
        String content = socketVO.getContent();
        int challenge_id = socketVO.getChallenge_id();
        // 생성자로 반환값을 생성합니다.
        SocketVO result = new SocketVO(userName, content,challenge_id);
        chatDao.insertChat(result);
        
        // 반환
        return result;
    }
    
    @GetMapping("/getchat/{challenge_id}")
    public ResponseEntity<?> allChat(@PathVariable int challenge_id) {
        
       List<SocketVO> list = chatDao.selectAll(challenge_id);
       
       if(list != null)
    	return new ResponseEntity<List<SocketVO>>(list,HttpStatus.OK);
       return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
    }
    
}