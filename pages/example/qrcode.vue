<template>
	<view class="page wrap qrcode">
		<view class="code-bg xc-w-100p">
			<image class="wrap" :src="bgImage" mode="" style="width:750rpx;" />
			<view class="content xc-absolute flex flex-direction align-center justify-center">
				<view class="xc-w-100p" style="height: calc( 100vh - 690rpx )"></view>
				<view class="xc-w-100p xc-h-300 flex flex-direction align-center justify-center xc-padding-lr-40 xc-margin-t-35">
					<view class="xc-margin-b-5">
						<image class="xc-w-115 xc-h-115" :src="qrcode" mode=""></image>

					</view>
					<view class="xc-margin-b-10">{{userInfo.nickname}}</view>
					<view @click="shareFc" class="xc-margin-b-10 xc-w-250 xc-h-40 xc-bg-FF8B3D xc-radius-1000 xc-flex xc-flex-row-center xc-flex-col-middle  xc-c-fff xc-text-18">
						<text>分享</text>
					</view>
					<view class="xc-text-12 xc-c-666 xc-text-cut-2">广告语</view>
				</view>

			</view>
		</view>
		<!-- 图片展示由自己实现 -->
		<view class="flex_row_c_c modalView" :class="qrShow?'show':''" @tap="hideQr()">
			<view class="flex_column">
				<view class="backgroundColor-white padding1vh border_radius_10px">
					<image :src="posterImage || ''" mode="widthFix" class="posterImage"></image>


				</view>
				<view class="flex_row marginTop2vh">
					<button type="primary" size="mini" @tap.prevent.stop="saveImage()">保存图片</button>
					<button type="primary" size="mini" @tap.prevent.stop="share()">分享图片</button>
				</view>
			</view>
		</view>
		<!-- 画布 -->
		<view class="hideCanvasView">
			<canvas style="width:100%;height:100%" class="hideCanvas posterImage " canvas-id="default_PosterCanvasId" ></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'qrcode',
		data() {
			return {
				qrcode: '',
				userInfo: {},
				imgUrl: '',
				// 海报
				poster: {},
				qrShow: false,
				canvasId: 'default_PosterCanvasId',
				qrcode: '/static/img/erweima.png',
				bgImage: '/static/img/erweima-bj.png',
				face: '/static/uview/common/logo.png',
				poster_finish: false,
				config: {
					poster: 0,
					poster_w: 600,
					poster_h: 700,
					qr_x: 0,
					qr_y: 0,
					qr_h: 0,
					qr_w: 0,
				},
				//canvasInfo
				canvasInfo: {

				},
				posterImage:'',
				templateAll:`
				
<template>
	<view class="page wrap qrcode">
		<view class="code-bg xc-w-100p">
			<image class="wrap" :src="bgImage" mode="" style="width:750rpx;" />
			<view class="content xc-absolute flex flex-direction align-center justify-center">
				<view class="xc-w-100p" style="height: calc( 100vh - 690rpx )"></view>
				<view class="xc-w-100p xc-h-300 flex flex-direction align-center justify-center xc-padding-lr-40 xc-margin-t-35">
					<view class="xc-margin-b-5">
						<image class="xc-w-115 xc-h-115" :src="qrcode" mode=""></image>

					</view>
					<view class="xc-margin-b-10">{{userInfo.nickname}}</view>
					<view @click="shareFc" class="xc-margin-b-10 xc-w-250 xc-h-40 xc-bg-FF8B3D xc-radius-1000 xc-flex xc-flex-row-center xc-flex-col-middle  xc-c-fff xc-text-18">
						<text>分享</text>
					</view>
					<view class="xc-text-12 xc-c-666 xc-text-cut-2">广告语</view>
				</view>

			</view>
		</view>
		<!-- 图片展示由自己实现 -->
		<view class="flex_row_c_c modalView" :class="qrShow?'show':''" @tap="hideQr()">
			<view class="flex_column">
				<view class="backgroundColor-white padding1vh border_radius_10px">
					<image :src="posterImage || ''" mode="widthFix" class="posterImage"></image>


				</view>
				<view class="flex_row marginTop2vh">
					<button type="primary" size="mini" @tap.prevent.stop="saveImage()">保存图片</button>
					<button type="primary" size="mini" @tap.prevent.stop="share()">分享图片</button>
				</view>
			</view>
		</view>
		<!-- 画布 -->
		<view class="hideCanvasView">
			<canvas style="width:100%;height:100%" class="hideCanvas posterImage " canvas-id="default_PosterCanvasId" ></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'qrcode',
		data() {
			return {
				qrcode: '',
				userInfo: {},
				imgUrl: '',
				// 海报
				poster: {},
				qrShow: false,
				canvasId: 'default_PosterCanvasId',
				qrcode: '/static/img/erweima.png',
				bgImage: '/static/img/erweima-bj.png',
				face: '/static/uview/common/logo.png',
				poster_finish: false,
				config: {
					poster: 0,
					poster_w: 600,
					poster_h: 700,
					qr_x: 0,
					qr_y: 0,
					qr_h: 0,
					qr_w: 0,
				},
				//canvasInfo
				canvasInfo: {

				},
				posterImage:'',
			}
		},
		methods: {
			getImageInfo_PromiseFc(imgPath) {
				return new Promise((rs, rj) => {
					uni.getImageInfo({
						src: imgPath,
						success: res => {
							console.log('res', res);
							rs(res);
						},
						fail: err => {
							console.log('err', err);
							rj(err)
						}
					})
				});
			},
			// 系统信息
			getSystemInfo_PromiseFc() {
				return new Promise((rs, rj) => {
					uni.getSystemInfo({
						success: res => {
							rs(res);
						},
						fail: err => {
							console.log('err', err);
							rj(err)
						}
					})
				});
			},
			shareFc() {
				this.getPoster();
				
			},
			async getPoster() {
				// this.$refs.popup_poster.open();
				// if (this.poster_finish) return;
				// uni.showLoading({
				// 	title: '生成中...'
				// });
				// this.poster_finish = false;
				// 配置信息
				var that = this;
				var bg_width = parseFloat(this.config.poster_w); //  海报宽度
				var bg_height = parseFloat(this.config.poster_h); //  海报高度
				var qr_x = parseFloat(this.config.qr_x); //  二维码所在起始位置x坐标
				var qr_y = parseFloat(this.config.qr_y); //  二维码所在起始位置y坐标
				var qr_h = parseFloat(this.config.qr_h); //  二维码高度
				var qr_w = parseFloat(this.config.qr_w); //  二维码宽度
				// 系统信息
				var sys = await this.getSystemInfo_PromiseFc();
				console.log('sys', sys);
				// 二维码图片
				var qrcode = await this.getImageInfo_PromiseFc(this.qrcode);
				console.log('qrcode', qrcode);
				// 背景图片
				var bg = await this.getImageInfo_PromiseFc(this.bgImage);
				console.log('bgImage', bg);
				// 头像信息
				var face = await this.getImageInfo_PromiseFc(this.face);
				console.log('bgImage', face);
				// canvas上下文
				var dev_width = parseInt(sys.windowWidth * 0.8);
				var dev_height = parseInt(sys.windowHeight * 0.75);
				var bg_rate = bg_width / bg_height;
				var dev_rate = dev_width / dev_height;
				if (dev_rate > bg_rate) {
					that.canvasInfo.height = dev_height;
					that.canvasInfo.width = dev_height * bg_rate;
				} else {
					that.canvasInfo.height = dev_width / bg_rate;
					that.canvasInfo.width = dev_width;
				}
				var com_rate = that.canvasInfo.width / bg_width; //放缩比例

				const ctx = wx.createCanvasContext('default_PosterCanvasId', that);
				console.log('ctx', ctx);
				// 画背景
				ctx.fillRect(0, 0, that.canvasInfo.width, that.canvasInfo.height);
				ctx.drawImage(bg.path, 0, 0, dev_width, dev_height,);
				// debugger;
				// 画二维码
				ctx.drawImage(qrcode.path, (dev_width-126)/2, (dev_height+122)/2, 126, 126,);
				// 画头像
				// var face_r = 95 * qr_w * com_rate / 430; // 半径
				// var face_c_x = (qr_x + qr_w / 2) * com_rate; // 圆心x
				// var face_c_y = (qr_y + qr_h / 2) * com_rate; // 圆心y
				// var face_x = face_c_x - face_r; // 头像起始位置x
				// var face_y = face_c_y - face_r; // 头像起始位置y
				// var face_w = 2 * face_r; // 头像宽度
				// var face_h = 2 * face_r; // 头像高度
				// ctx.save();
				// ctx.beginPath();
				// ctx.arc(face_c_x, face_c_y, face_r, 0, 2 * Math.PI, false);
				// ctx.setStrokeStyle('#eee')
				// ctx.stroke(); //画了背景的话要先画圆在裁剪才能有圆形图片
				// ctx.clip(); //裁剪
				// ctx.drawImage(face.path, face_x, face_y, face_w, face_h);
				ctx.restore();
				ctx.draw();
				console.log(ctx);
				setTimeout(()=>{
					this.qrShow = true;
					uni.canvasToTempFilePath({
					  x: 0,
					  y: 0,
					  width: dev_width,
					  height: dev_height,
					  destWidth: dev_width,
					  destHeight: dev_height,
					  canvasId: 'default_PosterCanvasId',
					  success: res=> {
					    // 在H5平台下，tempFilePath 为 base64
						this.posterImage = res.tempFilePath;
					    // console.log('resssss',)
					  } 
					})
				},300)
			},


			hideQr() {
				this.qrShow = false;
			}
		},
		mounted() {

		},
		onShow() {

		},
		onLoad() {}

	}
< /script>

<style lang="scss" scoped>
	uni-page-body {
		width: 100%;
		height: 100%;
	}

	.qrcode {}

	.content {
		top: 0;
		left: 0;
		right: 0;
	}

	.code-bg {
		// background: url('/static/img/erweima-bj.png') no-repeat;
		position: relative;
		background-size: 100% 100%;
	}


	// 生成海报
	.hideCanvasView {
		position: relative;
	}

	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(1.2);
		perspective: 2500upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all .3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}

	.modalView.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.backgroundColor-white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.padding1vh {
		padding: 1vh;
	}

	.posterImage {
		width: 60vw;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.marginTop2vh {
		margin-top: 2vh;
	}
</style>

				`
			}
		},
		methods: {
			getImageInfo_PromiseFc(imgPath) {
				return new Promise((rs, rj) => {
					uni.getImageInfo({
						src: imgPath,
						success: res => {
							console.log('res', res);
							rs(res);
						},
						fail: err => {
							console.log('err', err);
							rj(err)
						}
					})
				});
			},
			// 系统信息
			getSystemInfo_PromiseFc() {
				return new Promise((rs, rj) => {
					uni.getSystemInfo({
						success: res => {
							rs(res);
						},
						fail: err => {
							console.log('err', err);
							rj(err)
						}
					})
				});
			},
			shareFc() {
				this.getPoster();
				
			},
			async getPoster() {
				// this.$refs.popup_poster.open();
				// if (this.poster_finish) return;
				// uni.showLoading({
				// 	title: '生成中...'
				// });
				// this.poster_finish = false;
				// 配置信息
				var that = this;
				var bg_width = parseFloat(this.config.poster_w); //  海报宽度
				var bg_height = parseFloat(this.config.poster_h); //  海报高度
				var qr_x = parseFloat(this.config.qr_x); //  二维码所在起始位置x坐标
				var qr_y = parseFloat(this.config.qr_y); //  二维码所在起始位置y坐标
				var qr_h = parseFloat(this.config.qr_h); //  二维码高度
				var qr_w = parseFloat(this.config.qr_w); //  二维码宽度
				// 系统信息
				var sys = await this.getSystemInfo_PromiseFc();
				console.log('sys', sys);
				// 二维码图片
				var qrcode = await this.getImageInfo_PromiseFc(this.qrcode);
				console.log('qrcode', qrcode);
				// 背景图片
				var bg = await this.getImageInfo_PromiseFc(this.bgImage);
				console.log('bgImage', bg);
				// 头像信息
				var face = await this.getImageInfo_PromiseFc(this.face);
				console.log('bgImage', face);
				// canvas上下文
				var dev_width = parseInt(sys.windowWidth * 0.8);
				var dev_height = parseInt(sys.windowHeight * 0.75);
				var bg_rate = bg_width / bg_height;
				var dev_rate = dev_width / dev_height;
				if (dev_rate > bg_rate) {
					that.canvasInfo.height = dev_height;
					that.canvasInfo.width = dev_height * bg_rate;
				} else {
					that.canvasInfo.height = dev_width / bg_rate;
					that.canvasInfo.width = dev_width;
				}
				var com_rate = that.canvasInfo.width / bg_width; //放缩比例

				const ctx = wx.createCanvasContext('default_PosterCanvasId', that);
				console.log('ctx', ctx);
				// 画背景
				ctx.fillRect(0, 0, that.canvasInfo.width, that.canvasInfo.height);
				ctx.drawImage(bg.path, 0, 0, dev_width, dev_height,);
				// debugger;
				// 画二维码
				ctx.drawImage(qrcode.path, (dev_width-126)/2, (dev_height+122)/2, 126, 126,);
				// 画头像
				// var face_r = 95 * qr_w * com_rate / 430; // 半径
				// var face_c_x = (qr_x + qr_w / 2) * com_rate; // 圆心x
				// var face_c_y = (qr_y + qr_h / 2) * com_rate; // 圆心y
				// var face_x = face_c_x - face_r; // 头像起始位置x
				// var face_y = face_c_y - face_r; // 头像起始位置y
				// var face_w = 2 * face_r; // 头像宽度
				// var face_h = 2 * face_r; // 头像高度
				// ctx.save();
				// ctx.beginPath();
				// ctx.arc(face_c_x, face_c_y, face_r, 0, 2 * Math.PI, false);
				// ctx.setStrokeStyle('#eee')
				// ctx.stroke(); //画了背景的话要先画圆在裁剪才能有圆形图片
				// ctx.clip(); //裁剪
				// ctx.drawImage(face.path, face_x, face_y, face_w, face_h);
				ctx.restore();
				ctx.draw();
				console.log(ctx);
				setTimeout(()=>{
					this.qrShow = true;
					uni.canvasToTempFilePath({
					  x: 0,
					  y: 0,
					  width: dev_width,
					  height: dev_height,
					  destWidth: dev_width,
					  destHeight: dev_height,
					  canvasId: 'default_PosterCanvasId',
					  success: res=> {
					    // 在H5平台下，tempFilePath 为 base64
						this.posterImage = res.tempFilePath;
					    // console.log('resssss',)
					  } 
					})
				},300)
			},


			hideQr() {
				this.qrShow = false;
			}
		},
		mounted() {

		},
		onShow() {

		},
		onLoad() {}

	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		width: 100%;
		height: 100%;
	}

	.qrcode {}

	.content {
		top: 0;
		left: 0;
		right: 0;
	}

	.code-bg {
		// background: url('/static/img/erweima-bj.png') no-repeat;
		position: relative;
		background-size: 100% 100%;
	}


	// 生成海报
	.hideCanvasView {
		position: relative;
	}

	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(1.2);
		perspective: 2500upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all .3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}

	.modalView.show {
		opacity: 1;
		transform: scale(1);
		pointer-events: auto;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.backgroundColor-white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.padding1vh {
		padding: 1vh;
	}

	.posterImage {
		width: 60vw;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.marginTop2vh {
		margin-top: 2vh;
	}
</style>
