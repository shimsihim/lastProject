package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Challenge;
import com.ssafy.ssafit.model.dto.Participant;

public interface ChallengeService {

	
	//challenge 생성하기 => 인덱스 반환
	int createChallenge (Challenge challenge);
	
	//challenge 삭제
	void deleteChallenge (int challenge_id);
	
	//challenge 전체 불러오기
	List<Challenge> selectAll(int challenge_sort);
	
	//challenge 하나 불러오기
	Challenge selectOne(int challenge_id);
	
	//참가자 확인
	List<Participant> countParticipant(int challenge_id);
	
	//참가하기
	void addParticipant(Participant participant);
	
	//참가취소하기
	void deleteParticipant(Participant participant);
	
	//로그인 유저가 참여중인 챌린지들
	List<Challenge> readMyChallenge(String challenge_user_id);

	
	//내가 참여한 챌린지중 이벤트
	List<Challenge> readMyEvent(String user_id);

	
}
