package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.core.io.Resource;
//import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import com.ssafy.ssafit.model.dao.ChallengeDao;
import com.ssafy.ssafit.model.dto.Challenge;
import com.ssafy.ssafit.model.dto.Participant;
import com.ssafy.ssafit.model.dto.User;

@Service
public class ChallengeServiceImpl implements ChallengeService {

	// resource 경로를 가져오기 위함(파일처리를 위해)
//	/*
//	 * @Autowired ResourceLoader resLoader;
//	 */
	
	private ChallengeDao challengeDao;
	
	@Autowired
	public void setGroupDao(ChallengeDao challengeDao) {
		this.challengeDao = challengeDao;
	}

	@Override
	public int createChallenge(Challenge challenge) {
		// TODO Auto-generated method stub
		return challengeDao.createChallenge(challenge);
	}

	@Override
	public void deleteChallenge(int challenge_id) {
		// TODO Auto-generated method stub
		challengeDao.deleteChallenge(challenge_id);
	}

	@Override
	public void addParticipant(Participant participant) {
		challengeDao.addParticipant(participant);
	}

	@Override
	public void deleteParticipant(Participant participant) {
		challengeDao.deleteParticipant(participant);
	}

	@Override
	public List<Challenge> selectAll(int challenge_sort) {
		List<Challenge> list = challengeDao.selectAll(challenge_sort);
		for(int i = 0; i<list.size(); i++) {
			List<User> participants = challengeDao.selectUsers(list.get(i).getChallenge_id());
			list.get(i).setChallenge_participants(participants);
		}
		return list;
	}

	@Override
	public List<Participant> countParticipant(int challenge_id) {
		// TODO Auto-generated method stub
		return challengeDao.countParticipant(challenge_id);
	}

	@Override
	public Challenge selectOne(int challenge_id) {
		Challenge challenge = challengeDao.selectOne(challenge_id);
		List<User> participants = challengeDao.selectUsers(challenge.getChallenge_id());
		challenge.setChallenge_participants(participants);
		return challenge;
	}

	@Override
	public List<Challenge> readMyChallenge(String challenge_user_id) {
		return challengeDao.readMyChallenge(challenge_user_id);
	}



}
