package com.ssafy.ssafit.model.dto;

public class Video {
	private String videoTitle;
	private String part;
	private String videoId;
	private String url;
	private String channelName;
	private String img;
	private int viewCnt;
	private int zzimCnt;

	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Video(String videoTitle, String fitPartName, String videoId, String url, String channelName, String img, int viewCnt) {

		this.videoTitle = videoTitle;
		this.part = fitPartName;
		this.videoId = videoId;
		this.url = url;
		this.channelName = channelName;
		this.img = img;
		this.viewCnt = viewCnt;
	}
	

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getVideoTitle() {
		return videoTitle;
	}

	public void setVideoTitle(String videoTitle) {
		this.videoTitle = videoTitle;
	}

	public String getPart() {
		return part;
	}

	public void setPart(String fitPartName) {
		this.part = fitPartName;
	}

	public String getVideoId() {
		return videoId;
	}

	public void setVideoId(String videoId) {
		this.videoId = videoId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public int getViewCnt() {
		return viewCnt;
	}

	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}

	public int getZzimCnt() {
		return zzimCnt;
	}

	public void setZzimCnt(int zzimCnt) {
		this.zzimCnt = zzimCnt;
	}

	@Override
	public String toString() {
		return "Video [videoTitle=" + videoTitle + ", part=" + part + ", videoId=" + videoId + ", url=" + url
				+ ", channelName=" + channelName + ", img=" + img + ", viewCnt=" + viewCnt + ", zzimCnt=" + zzimCnt
				+ "]";
	}




}