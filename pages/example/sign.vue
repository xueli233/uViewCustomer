<template>
	<view class="qm-wrap" :style="{height:windowHeight+'px'}">
		<view class="qm-content">
			<canvas class='firstCanvas' :class="{'qm-bg':isShowBg}" canvas-id="firstCanvas" @touchmove='move' @touchstart='start($event)' @touchend='end'
			 @touchcancel='cancel' @longtap='tap' disable-scroll='true' @error='error'>
			</canvas>
		</view>
		<view class="qm-right-bar">
			<view class="qm-back qm-btn" @tap="goback()">返回</view>
			<view class="qm-title">添加手写签名</view>
			<view class="qm-clear qm-btn" @tap="clearClick()">重写</view>
			<view class="qm-ok qm-btn" @tap="saveform()">确定</view>
		</view>
	</view>
</template>

<script>
	// import config from "../../config.js";
	// import util from "../../commons/util.js";
	
	var content = null;
	var touchs = [];
	var canvasw = 0;
	var canvash = 0;
	var _that;
	//获取系统信息
	uni.getSystemInfo({
	    success: function(res) {
	        canvasw = res.windowWidth;
	        canvash = res.windowHeight;
	    },
	})
	
	
	export default {
		data() {
			return {
				target_data:"",
				windowHeight:500,
				qianming:"",//签名url
				isShowBg:true,//显示背景提示
				templateAll:`
				<template>
	<view class="qm-wrap" :style="{height:windowHeight+'px'}">
		<view class="qm-content">
			<canvas class='firstCanvas' :class="{'qm-bg':isShowBg}" canvas-id="firstCanvas" @touchmove='move' @touchstart='start($event)' @touchend='end'
			 @touchcancel='cancel' @longtap='tap' disable-scroll='true' @error='error'>
			</canvas>
		</view>
		<view class="qm-right-bar">
			<view class="qm-back qm-btn" @tap="goback()">返回</view>
			<view class="qm-title">添加手写签名</view>
			<view class="qm-clear qm-btn" @tap="clearClick()">重写</view>
			<view class="qm-ok qm-btn" @tap="saveform()">确定</view>
		</view>
	</view>
</template>

<script>
	
	var content = null;
	var touchs = [];
	var canvasw = 0;
	var canvash = 0;
	var _that;
	//获取系统信息
	uni.getSystemInfo({
	    success: function(res) {
	        canvasw = res.windowWidth;
	        canvash = res.windowHeight;
	    },
	})
	
	
	export default {
		data() {
			return {
				target_data:"",
				windowHeight:500,
				qianming:"",//签名url
				isShowBg:true,//显示背景提示
			}
		},
		onBackPress() {
			//#ifdef APP-PLUS
			 // 设置应用全屏
			 plus.navigator.setFullscreen(false);
			//#endif
		},
		onLoad(opt) {
			var that  = this;
			
			if (opt.target_data){
				that.target_data = opt.target_data;
			}
			//console.log(that.$api.prePage());
			//#ifdef APP-PLUS
			 // 设置应用全屏
			 plus.navigator.setFullscreen(true);
			//#endif
			let win = uni.getSystemInfoSync();
			this.windowHeight = win.windowHeight;
			
			_that = this;
			//获得Canvas的上下文
			content = uni.createCanvasContext('firstCanvas')
			//设置线的颜色
			content.setStrokeStyle("#000")
			//设置线的宽度
			content.setLineWidth(5)
			//设置线两端端点样式更加圆润
			content.setLineCap('round')
			//设置两条线连接处更加圆润
			content.setLineJoin('round')
			
		},
		methods: {
			goback(){
				uni.navigateBack();
				//#ifdef APP-PLUS
				 // 设置应用全屏
				 plus.navigator.setFullscreen(false);
				//#endif
			},
			//保存表单
			saveform: function() {
				var that = this;
					if (this.isEnd) {
						uni.showLoading({
							title:""
						
						});
						console.log("保存签名");
						//保存图片
						try{
							
						content.draw(false,
						uni.canvasToTempFilePath({
							canvasId: 'firstCanvas',
							
							success: function(res) {
								//打印图片路径
								console.log('完成签名',res)
							
								//设置图片
								 let tmp_img = res.tempFilePath;
								
								//上传服务器
								uni.uploadFile({
									url: "/app/upload/upload",
									name: tmp_img,
									filePath: tmp_img,
									success:function(res){
										
										let img_url = JSON.parse(res.data).url;
										
										
										that.qianming = img_url;
										console.log(that.qianming);
										//设置上一面的签名
										
										that.$api.prePage().setQM(img_url,that.target_data);
										
										uni.navigateBack();
										uni.hideLoading();
										//#ifdef APP-PLUS
										 // 设置应用全屏
										 plus.navigator.setFullscreen(false);
										//#endif
								
									},
									fail(e) {
										//uni.hideLoading();
										that.$api.msg("上传错误：" + e)
									}
								})

							}
						}))
						
						}catch(e){
							uni.showToast({
								title: e
							});
						}
						
					} else {
						uni.showToast({
							title: '请先完成签名',
							icon: "none",
							duration: 1500,
							mask: true
						})
					}
				},
			
			// 画布的触摸移动开始手势响应
			start: function(event) {
				this.isShowBg= false;
				// console.log(event)
				console.log("触摸开始" + event.changedTouches[0].x)
				console.log("触摸开始" + event.changedTouches[0].y)
				//获取触摸开始的 x,y
				let point = {
					x: event.changedTouches[0].x,
					y: event.changedTouches[0].y
				}
				// console.log(point)
				touchs.push(point);

			},
			// 画布的触摸移动手势响应
			move: function(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				// console.log(point)
				touchs.push(point)
				if (touchs.length >= 2) {
					this.draw(touchs)
				}
			},

			// 画布的触摸移动结束手势响应
			end: function(e) {
				//console.log("触摸结束" + e)
				// 设置为已经签名
				this.isEnd = true
				// 清空轨迹数组
				touchs = [];
				// for (let i = 0; i < touchs.length; i++) {
				// 	touchs.pop()
				// }

			},

			// 画布的触摸取消响应
			cancel: function(e) {
				//console.log("触摸取消" + e)
			},

			// 画布的长按手势响应
			tap: function(e) {
				//console.log("长按手势" + e)
			},

			error: function(e) {
				console.log("画布触摸错误" + e)
			},

			//绘制
			draw: function(touchs) {
				//console.log(touchs[0],touchs[1])
				let point1 = touchs[0]
				let point2 = touchs[1]
				touchs.shift()
				content.moveTo(point1.x, point1.y)
				content.lineTo(point2.x, point2.y)
				content.stroke()
				content.draw(true)
			},
			//清除操作
			clearClick: function() {
				// 设置为未签名
				this.isEnd = false
				//清除画布
				content.clearRect(0, 0, canvasw, canvash)
				content.draw(true)
			}
		}
	}
< /script>

<style>
.qm-wrap{ display: flex; width:100%; height:100%;}
.qm-left-bar { width: 50px; border-right: 1px solid #ddd; background-color: #F5F5F5; height: 100%;}
.qm-content{ flex:1; height: 100%; position: relative;}
.qm-bg{ background:#FFFFFF url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAIICAYAAAC2DmrOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzQTM1RjI4RDNBQzExRTk4RTA2REY5RkQyMTQxQkExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzQTM1RjI5RDNBQzExRTk4RTA2REY5RkQyMTQxQkExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNBMzVGMjZEM0FDMTFFOThFMDZERjlGRDIxNDFCQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzNBMzVGMjdEM0FDMTFFOThFMDZERjlGRDIxNDFCQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6OHAMNAAAykElEQVR42uxd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') no-repeat center center;}
canvas {background-color: #FFFFFF;width:100%;height: 100%;}

.qm-right-bar{ overflow:hidden; width: 40px; background-color:#0A98D5; height:100%; display: flex; justify-content: space-between; flex-direction: column; position: relative}
.qm-title{ text-align: center; width:200px; transform: rotate(90deg); position:absolute; top:50%; left:-80px; z-index: 5; font-size: 18px; color:#eee;}

.qm-back{  transform: rotate(90deg); position:absolute; top:30px; left:-10px; z-index: 5; }
.qm-clear{   transform: rotate(90deg); position:absolute; bottom:100px; left:-10px; z-index: 5;}
.qm-ok{transform: rotate(90deg); position:absolute; bottom:30px; left:-10px; z-index: 5; }
.qm-btn{ width:60px; border-radius: 4px; border:1px solid #fff;text-align: center;font-size: 16px; color:#fff;}

</style>
				`
			}
		},
		onBackPress() {
			//#ifdef APP-PLUS
			 // 设置应用全屏
			 plus.navigator.setFullscreen(false);
			//#endif
		},
		onLoad(opt) {
			var that  = this;
			
			if (opt.target_data){
				that.target_data = opt.target_data;
			}
			//console.log(that.$api.prePage());
			//#ifdef APP-PLUS
			 // 设置应用全屏
			 plus.navigator.setFullscreen(true);
			//#endif
			let win = uni.getSystemInfoSync();
			this.windowHeight = win.windowHeight;
			
			_that = this;
			//获得Canvas的上下文
			content = uni.createCanvasContext('firstCanvas')
			//设置线的颜色
			content.setStrokeStyle("#000")
			//设置线的宽度
			content.setLineWidth(5)
			//设置线两端端点样式更加圆润
			content.setLineCap('round')
			//设置两条线连接处更加圆润
			content.setLineJoin('round')
			
		},
		methods: {
			goback(){
				uni.navigateBack();
				//#ifdef APP-PLUS
				 // 设置应用全屏
				 plus.navigator.setFullscreen(false);
				//#endif
			},
			//保存表单
			saveform: function() {
				this.addPlugin();
				return;
				var that = this;
					if (this.isEnd) {
						uni.showLoading({
							title:""
						
						});
						console.log("保存签名");
						//保存图片
						try{
							
						content.draw(false,
						uni.canvasToTempFilePath({
							canvasId: 'firstCanvas',
							
							success: function(res) {
								//打印图片路径
								console.log('完成签名',res)
							
								//设置图片
								 let tmp_img = res.tempFilePath;
								
								//上传服务器
								uni.uploadFile({
									url: "/app/upload/upload",
									name: tmp_img,
									filePath: tmp_img,
									success:function(res){
										
										let img_url = JSON.parse(res.data).url;
										
										
										that.qianming = img_url;
										console.log(that.qianming);
										//设置上一面的签名
										
										that.$api.prePage().setQM(img_url,that.target_data);
										
										uni.navigateBack();
										uni.hideLoading();
										//#ifdef APP-PLUS
										 // 设置应用全屏
										 plus.navigator.setFullscreen(false);
										//#endif
								
									},
									fail(e) {
										//uni.hideLoading();
										that.$api.msg("上传错误：" + e)
									}
								})

							}
						}))
						
						}catch(e){
							uni.showToast({
								title: e
							});
						}
						
					} else {
						uni.showToast({
							title: '请先完成签名',
							icon: "none",
							duration: 1500,
							mask: true
						})
					}
				},
			
			// 画布的触摸移动开始手势响应
			start: function(event) {
				this.isShowBg= false;
				// console.log(event)
				console.log("触摸开始" + event.changedTouches[0].x)
				console.log("触摸开始" + event.changedTouches[0].y)
				//获取触摸开始的 x,y
				let point = {
					x: event.changedTouches[0].x,
					y: event.changedTouches[0].y
				}
				// console.log(point)
				touchs.push(point);

			},
			// 画布的触摸移动手势响应
			move: function(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				// console.log(point)
				touchs.push(point)
				if (touchs.length >= 2) {
					this.draw(touchs)
				}
			},

			// 画布的触摸移动结束手势响应
			end: function(e) {
				//console.log("触摸结束" + e)
				// 设置为已经签名
				this.isEnd = true
				// 清空轨迹数组
				touchs = [];
				// for (let i = 0; i < touchs.length; i++) {
				// 	touchs.pop()
				// }

			},

			// 画布的触摸取消响应
			cancel: function(e) {
				//console.log("触摸取消" + e)
			},

			// 画布的长按手势响应
			tap: function(e) {
				//console.log("长按手势" + e)
			},

			error: function(e) {
				console.log("画布触摸错误" + e)
			},

			//绘制
			draw: function(touchs) {
				//console.log(touchs[0],touchs[1])
				let point1 = touchs[0]
				let point2 = touchs[1]
				touchs.shift()
				content.moveTo(point1.x, point1.y)
				content.lineTo(point2.x, point2.y)
				content.stroke()
				content.draw(true)
			},
			//清除操作
			clearClick: function() {
				// 设置为未签名
				this.isEnd = false
				//清除画布
				content.clearRect(0, 0, canvasw, canvash)
				content.draw(true)
			}
		}
	}
</script>

<style>
.qm-wrap{ display: flex; width:100%; height:100%;}
.qm-left-bar { width: 50px; border-right: 1px solid #ddd; background-color: #F5F5F5; height: 100%;}
.qm-content{ flex:1; height: 100%; position: relative;}
.qm-bg{ background:#FFFFFF url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAIICAYAAAC2DmrOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzQTM1RjI4RDNBQzExRTk4RTA2REY5RkQyMTQxQkExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMzQTM1RjI5RDNBQzExRTk4RTA2REY5RkQyMTQxQkExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNBMzVGMjZEM0FDMTFFOThFMDZERjlGRDIxNDFCQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzNBMzVGMjdEM0FDMTFFOThFMDZERjlGRDIxNDFCQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6OHAMNAAAykElEQVR42uxd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') no-repeat center center;}
canvas {background-color: #FFFFFF;width:100%;height: 100%;}

.qm-right-bar{ overflow:hidden; width: 40px; background-color:#0A98D5; height:100%; display: flex; justify-content: space-between; flex-direction: column; position: relative}
.qm-title{ text-align: center; width:200px; transform: rotate(90deg); position:absolute; top:50%; left:-80px; z-index: 5; font-size: 18px; color:#eee;}

.qm-back{  transform: rotate(90deg); position:absolute; top:30px; left:-10px; z-index: 5; }
.qm-clear{   transform: rotate(90deg); position:absolute; bottom:100px; left:-10px; z-index: 5;}
.qm-ok{transform: rotate(90deg); position:absolute; bottom:30px; left:-10px; z-index: 5; }
.qm-btn{ width:60px; border-radius: 4px; border:1px solid #fff;text-align: center;font-size: 16px; color:#fff;}

</style>
