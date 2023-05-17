package com.ssafy.ssafit.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Video;
import com.ssafy.ssafit.model.service.VideoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/ssafit/video")
@Api(tags = "비디오 컨트롤러")
public class VideoRestController {
	
	@Autowired
	private VideoService videoService;

	@ApiOperation(value="전체 영상 조회", notes = "전체 영상 조회")
	@GetMapping("/list")
	public ResponseEntity<?> list(){
		List<Video> videolist = videoService.selectAll(); 
		
		if(videolist == null || videolist.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Video>>(videolist, HttpStatus.OK);
	}
	
	@ApiOperation(value="부위별 영상 조회", notes = "part를 입력하면 해당하는 영상을 불러옴")
	@GetMapping("/partly/{part}")
	public ResponseEntity<?> partlyList(@PathVariable String part){
		List<Video> partlyList = videoService.selectPartly(part);
		
		if(partlyList == null || partlyList.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Video>>(partlyList, HttpStatus.OK);
	}
	
	@ApiOperation(value="특정 영상 조회", notes = "videoID를 입력하면 해당하는 영상을 불러옴")
	@GetMapping("/detail/{videoId}")
	public ResponseEntity<?> detail(@PathVariable String videoId){
		try {
			Video video = videoService.selectOne(videoId);
			return new ResponseEntity<Video>(video, HttpStatus.OK);
		} catch (SQLException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}
	
	
	
}