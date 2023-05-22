package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Challenge;
import com.ssafy.ssafit.model.dto.Participant;
import com.ssafy.ssafit.model.dto.User;

public interface ChallengeDao {
	
	//challenge 생성하기 => 인덱스 반환
	int createChallenge (Challenge challenge);
	
	//challenge 삭제
	void deleteChallenge (int challenge_id);
	
	//challenge 전체 불러오기
	List<Challenge> selectAll(int challenge_sort);
	
	//challenge 하나 불러오기
	Challenge selectOne(int challenge_id);
	
	//challenge 하나 불러서 참여중인 유저들 리스트 받기
	List<User> selectUsers(int challenge_id);
	
	//참가자 확인
	List<Participant> countParticipant(int challenge_id);
	
	//참가하기
	void addParticipant(Participant participant);
	
	//참가취소하기
	void deleteParticipant(Participant participant);
	
	//로그인 유저가 참여중인 챌린지들
	List<Challenge> readMyChallenge(String challenge_user_id);


	
	
	
	
	
	
//	Comment selectOne(int comment_num);  // token 유효성 확인 위해서 불러오기
//	void registComment(Comment comment);        // 댓글 등록
//	List<Comment> selectComment(int post_num);  // 게시물에 대한 전체 코멘트 가져오기
//	void updateComment(Comment comment);        // 댓글 수정

	
	
}
