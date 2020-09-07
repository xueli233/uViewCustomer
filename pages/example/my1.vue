<template>
	<view class="page my1">
		<!--  -->
		<view class="xc-flex xc-flex-column" style="background-image: url(/static/my1/hy-bj.png);width: 750rpx;height: 350rpx;">
			<view class="xc-flex xc-flex-row-right xc-padding-lr-20 xc-margin-t-20">
				<image src="/static/my1/ico-sehzhi.png" mode="" style="width: 44rpx;height:44rpx;"></image>
			</view>
			<view class="xc-flex xc-padding-l-20 align-center">
				<view class="xc-radius-1000" style="width: 146rpx;height: 146rpx;">
					<image style="width: 141rpx;height: 141rpx;" src="/static/my1/ico-hytx.png" mode="aspectFit"></image>
				</view>
				<view class="xc-flex xc-flex-column xc-margin-l-10">
					<text class="xc-text-18 xc-c-eee xc-text-bold">昵称</text>
					<text class="xc-text-13 xc-margin-t-10" style="color: #9AC4FF;">地址：玉林美东小区</text>
				</view>
			</view>
		</view>
		<!--  -->
		<view>
			<view class="card xc-relative" style="">
				<u-row justify="center" class="xc-w-100p">
					<u-col span="4">
						<view class="xc-flex xc-flex-column justify-center align-center">
							<image class="xc-w-35 xc-h-35" src="/static/my1/ico-zhuangxiu.png" mode="aspectFit"></image>
							<text class="xc-text-15">装修需求</text>
						</view>
					</u-col>
					<u-col span="4">
						<view class="xc-flex xc-flex-column justify-center align-center">
							<image class="xc-w-35 xc-h-35" src="/static/my1/ico-zhuangxiu.png" mode="aspectFit"></image>
							<text class="xc-text-15">装修需求</text>
						</view>
					</u-col>
					<u-col span="4">
						<view class="xc-flex xc-flex-column justify-center align-center">
							<image class="xc-w-35 xc-h-35" src="/static/my1/ico-zhuangxiu.png" mode="aspectFit"></image>
							<text class="xc-text-15">装修需求</text>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<!--  -->
		<view class="">
			<u-cell-group :border="false">
				<u-cell-item  title="我的询价" value="0">
					<view class="xc-flex align-center xc-margin-r-5" slot="icon">
						<image class="xc-w-15 xc-h-15" src="/static/my1/xunjia.png" mode="aspectFit"></image>
					</view>
				</u-cell-item>
				<u-cell-item  title="我的关注" >
					<view class="xc-flex align-center xc-margin-r-5" slot="icon">
						<image class="xc-w-15 xc-h-15" src="/static/my1/guanzhu.png" mode="aspectFit"></image>
					</view>
				</u-cell-item>
				<u-cell-item  title="联系客服">
					<view class="xc-flex align-center xc-margin-r-5" slot="icon">
						<image class="xc-w-15 xc-h-15" src="/static/my1/kefu.png" mode="aspectFit"></image>
					</view>
				</u-cell-item>
				<u-cell-item  title="常见问题" >
					<view class="xc-flex align-center xc-margin-r-5" slot="icon">
						<image class="xc-w-15 xc-h-15" src="/static/my1/wenti.png" mode="aspectFit"></image>
					</view>
				</u-cell-item>
				<u-cell-item  title="关于我们" >
					<view class="xc-flex align-center xc-margin-r-5" slot="icon">
						<image class="xc-w-15 xc-h-15" src="/static/my1/guanyuwm.png" mode="aspectFit"></image>
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'my1',
		data() {
			return {
				templateAll:`
				<template>
					<view class="page my1">
						<!--  -->
						<view class="xc-flex xc-flex-column" style="background-image: url(/static/my1/hy-bj.png);width: 750rpx;height: 350rpx;">
							<view class="xc-flex xc-flex-row-right xc-padding-lr-20 xc-margin-t-20">
								<image src="/static/my1/ico-sehzhi.png" mode="" style="width: 44rpx;height:44rpx;"></image>
							</view>
							<view class="xc-flex xc-padding-l-20 align-center">
								<view class="xc-radius-1000" style="width: 146rpx;height: 146rpx;">
									<image style="width: 141rpx;height: 141rpx;" src="/static/my1/ico-hytx.png" mode="aspectFit"></image>
								</view>
								<view class="xc-flex xc-flex-column xc-margin-l-10">
									<text class="xc-text-18 xc-c-eee xc-text-bold">昵称</text>
									<text class="xc-text-13 xc-margin-t-10" style="color: #9AC4FF;">地址：玉林美东小区</text>
								</view>
							</view>
						</view>
						<!--  -->
						<view>
							<view class="card xc-relative" style="">
								<u-row justify="center" class="xc-w-100p">
									<u-col span="4">
										<view class="xc-flex xc-flex-column justify-center align-center">
											<image class="xc-w-35 xc-h-35" src="/static/my1/ico-zhuangxiu.png" mode="aspectFit"></image>
											<text class="xc-text-15 xc-margin-t-15">装修需求</text>
										</view>
									</u-col>
									<u-col span="4">
										<view class="xc-flex xc-flex-column justify-center align-center">
											<image class="xc-w-35 xc-h-35" src="/static/my1/ico-zhuangxiu(1).png" mode="aspectFit"></image>
											<text class="xc-text-15 xc-margin-t-15">收到询价</text>
										</view>
									</u-col>
									<u-col span="4">
										<view class="xc-flex xc-flex-column justify-center align-center">
											<image class="xc-w-35 xc-h-35" src="/static/my1/ico-ddan.png" mode="aspectFit"></image>
											<text class="xc-text-15 xc-margin-t-15">我的订单</text>
										</view>
									</u-col>
								</u-row>
							</view>
						</view>
						<!--  -->
						<view class="">
							<u-cell-group :border="false">
								<u-cell-item title="我的询价" value="0">
									<view class="xc-flex align-center xc-margin-r-5" slot="icon">
										<image class="xc-w-15 xc-h-15" src="/static/my1/xunjia.png" mode="aspectFit"></image>
									</view>
								</u-cell-item>
								<u-cell-item title="我的关注">
									<view class="xc-flex align-center xc-margin-r-5" slot="icon">
										<image class="xc-w-15 xc-h-15" src="/static/my1/guanzhu.png" mode="aspectFit"></image>
									</view>
								</u-cell-item>
								<u-cell-item title="联系客服">
									<view class="xc-flex align-center xc-margin-r-5" slot="icon">
										<image class="xc-w-15 xc-h-15" src="/static/my1/kefu.png" mode="aspectFit"></image>
									</view>
								</u-cell-item>
								<u-cell-item title="常见问题">
									<view class="xc-flex align-center xc-margin-r-5" slot="icon">
										<image class="xc-w-15 xc-h-15" src="/static/my1/wenti.png" mode="aspectFit"></image>
									</view>
								</u-cell-item>
								<u-cell-item title="关于我们">
									<view class="xc-flex align-center xc-margin-r-5" slot="icon">
										<image class="xc-w-15 xc-h-15" src="/static/my1/guanyuwm.png" mode="aspectFit"></image>
									</view>
								</u-cell-item>
							</u-cell-group>
						</view>
					</view>
				
					</view>
				</template>
				
				<script>
					export default {
						name: 'my1',
						data() {
							return {}
						},
						methods: {},
						mounted() {},
						onShow() {},
						onLoad() {}
					}
				</ script>
				<style lang="scss" scoped>
					.card {
						width: 710rpx;
						height: 214rpx;
						position: relative;
						background: rgba(255, 255, 255, 1);
						box-shadow: 0 0 25rpx 2rpx rgba(226, 226, 226, 0.66);
						border-radius: 20rpx;
						width: 710rpx;
						height: 214rpx;
						border-radius: 20 rpx;
						left: 50%;
						top: 50%;
						z-index: 99;
						transform: translate(-50%, -35%);
						display: flex;
						align-items: center;
					}
				</style>
				
				`
			}
		},
		methods: {},
		mounted() {},
		onShow() {},
		onLoad() {}
	}
</script>

<style lang="scss" scoped>
	.card {
		width: 710rpx;
		height: 214rpx;
		position: relative;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 25rpx 2rpx rgba(226, 226, 226, 0.66);
		border-radius: 20rpx;
		width: 710rpx;
		height: 214rpx;
		border-radius: 20rpx;
		left: 50%;
		top: 50%;
		z-index: 99;
		transform: translate(-50%, -35%);
		display: flex;
		align-items: center;
	}
</style>
