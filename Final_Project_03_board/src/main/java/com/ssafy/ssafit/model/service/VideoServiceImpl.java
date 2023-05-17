package com.ssafy.ssafit.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.ssafit.model.dao.VideoDao;
import com.ssafy.ssafit.model.dto.SearchCondition;
import com.ssafy.ssafit.model.dto.Video;

@Service
public class VideoServiceImpl implements VideoService {

	private VideoDao videoDao;

	@Autowired
	public void setVideoDao(VideoDao videoDao) {
		this.videoDao = videoDao;
	}
	
	@Override
	public List<Video> selectAll() {
		return videoDao.selectAll();
	}

	@Override
	public List<Video> selectPartly(String part) {
		return videoDao.selectPartly(part);
	}

	@Override
	public Video selectOne(String videoId) throws SQLException {
		videoDao.updateViewCnt(videoId);
		return videoDao.selectOne(videoId);
	}
	
	@Override
    public List<Video> searchByCondition(SearchCondition searchCondition) {
        return videoDao.searchByCondition(searchCondition);
    }
}