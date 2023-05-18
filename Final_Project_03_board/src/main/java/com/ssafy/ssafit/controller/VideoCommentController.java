package com.ssafy.ssafit.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.VideoComment;
import com.ssafy.ssafit.model.service.VideoCommentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import springfox.documentation.annotations.ApiIgnore;


@RestController
@RequestMapping("/ssafit/videoComment")
@Api(tags = "영상 댓글 컨트롤러")
public class VideoCommentController {
	
	
	@Autowired
	VideoCommentService videoCommentService;
	
	
	@PostMapping("/regist")
	@ApiOperation(value="영상 댓글 등록", notes = "댓글 등록하기 (DB추가)")
	public ResponseEntity<?> registVideoComment(@RequestBody VideoComment videoComment) throws IOException {
		videoCommentService.registVideoComment(videoComment);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
	@GetMapping("/delete")
	@ApiOperation(value="댓글 삭제", notes = "댓글 삭제하기 (DB삭제)")
	public ResponseEntity<?> deleteComment(int videocomment_num, @ApiIgnore HttpServletResponse resp) throws IOException {
		videoCommentService.deleteVideoComment(videocomment_num);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("/update")
	@ApiOperation(value="댓글 수정", notes = "댓글 수정하기 (DB변경)")
	public ResponseEntity<?> updateComment(@RequestBody VideoComment videoComment, @ApiIgnore HttpServletResponse resp) throws IOException {
		videoCommentService.updateVideoComment(videoComment);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	
}
