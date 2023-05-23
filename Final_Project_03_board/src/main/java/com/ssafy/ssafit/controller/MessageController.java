package com.ssafy.ssafit.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Message;
import com.ssafy.ssafit.model.service.MessageService;
import com.ssafy.ssafit.util.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/ssafit/message")
@Api(tags = "메시지 컨트롤러")
public class MessageController {

	@Autowired
	MessageService MessageService;
	
    @Autowired
    private JwtUtil jwtUtil;

	@PostMapping("/read")
	@ApiOperation(value = "전체 메시지 불러오기", notes = "challenge_id로 전체 메시지 불러오기")
	public ResponseEntity<?> selectAll(@RequestBody String challenge_id) {
		List<Message>msglist = MessageService.selectAll(Integer.parseInt(challenge_id.replaceAll("=", "")));
		return new ResponseEntity<List<Message>>(msglist, HttpStatus.OK);
	}

	@PostMapping("/regist")
	@ApiOperation(value = "메시지 등록", notes = "등록하기 (DB추가)")
	public ResponseEntity<?> registMessage(@RequestBody Message message) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException{

		String user_id = jwtUtil.parse(message.getMessage_writer_id());
		System.out.println("user_id");
		message.setMessage_writer_id(user_id);
		System.out.println(message.getMessage_writer_id());
		MessageService.registMessage(message);
		System.out.println(message.getMessage_writer_id());
		System.out.println();
		
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@PostMapping("/delete")
	@ApiOperation(value = "메시지 삭제", notes = "is_deleted를 true로 바꿔서 삭제할거임(DB변경)")
	public ResponseEntity<?> deleteMessage(@RequestBody Message message) {
		System.out.println("delete왔어여");
		MessageService.deleteMessage(message.getMessage_num());
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}