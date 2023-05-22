package com.ssafy.ssafit.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Challenge;
import com.ssafy.ssafit.model.dto.Participant;
import com.ssafy.ssafit.model.service.ChallengeService;
import com.ssafy.ssafit.util.JwtUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/ssafit/challenge")
@Api(tags = "게시글 컨트롤러")
public class ChallengeController {
    
    @Autowired
    ChallengeService challengeService;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @GetMapping("list/{challenge_id}")
    @ApiOperation(value="챌린지 불러오기", notes = "모임인지, 챌린지인지 구분해서 불러오기")
    public ResponseEntity<?> selectAll(@PathVariable int challenge_id) {
        List<Challenge> challenges = challengeService.selectAll(challenge_id);
    return new ResponseEntity<List<Challenge>>(challenges, HttpStatus.OK);
    }
    
    @GetMapping("read/MyChallenge/{token}")
    @ApiOperation(value="챌린지 불러오기", notes = "모임인지, 챌린지인지 구분해서 불러오기")
    public ResponseEntity<?> readMyChallenge(@PathVariable String token) {
		try {
			String user_id = jwtUtil.parse(token);
			List<Challenge> myChallenges = challengeService.readMyChallenge(user_id);
			return new ResponseEntity<List<Challenge>>(myChallenges, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.I_AM_A_TEAPOT);
		}
	}
    
	@PostMapping("create")
	@ApiOperation(value="챌린지 등록하기", notes = "등록")
	public ResponseEntity<?> createChallenge (@RequestBody Challenge challenge) {
		String user_id;
		try {
			user_id = jwtUtil.parse(challenge.getLoginToken());
			challenge.setChallenge_makeUser(user_id);
			challengeService.createChallenge(challenge);
			Participant participant = new Participant(challenge.getChallenge_id(), user_id);
			challengeService.addParticipant(participant);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.I_AM_A_TEAPOT);
		}
	}
	
	
	@DeleteMapping("delete/{challenge_id}/{token}")
	@ApiOperation(value="챌린지 삭제", notes = "챌린지 삭제하기 (DB확인)")
	public ResponseEntity<?> deleteChallenge(@PathVariable int challenge_id , @PathVariable String token) throws ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException, IllegalArgumentException, UnsupportedEncodingException {
		
		Challenge challenge = challengeService.selectOne(challenge_id); // 해당 게시물 가져오고
		if(challenge==null || !jwtUtil.parse(token).equals(challenge.getChallenge_makeUser())) { //작성자 아이디와의 일치여부 확인 후
			return new ResponseEntity<Void>(HttpStatus.I_AM_A_TEAPOT); // 일치 x거나 없는 게시물이면 반환
		}
		
		challengeService.deleteChallenge(challenge_id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}	
	
	@PostMapping("add/participant")
	@ApiOperation(value="챌린지 참여하기", notes = "등록")
	public ResponseEntity<?> addParticipant (@RequestBody Participant participant) {
		try {
			String user_id = jwtUtil.parse(participant.getLoginToken());
			participant.setParticipant_user_id(user_id);
			challengeService.addParticipant(participant);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.I_AM_A_TEAPOT);
		}
	}
	
	@DeleteMapping("cancle/{challenge_id}/{token}")
	public ResponseEntity<?> deleteParticipant (@PathVariable int challenge_id , @PathVariable String token) {
		try {
			String user_id = jwtUtil.parse(token);
			Participant deletetarget = new Participant(challenge_id, user_id);
			challengeService.deleteParticipant(deletetarget);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.I_AM_A_TEAPOT);
		}
	}
	
	
    

}
