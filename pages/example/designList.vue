<template>
	<view class="wrap">
		<view class="tabs xc-1px-b0 xc-padding-b-10">
			<u-tabs active-color="#2A4E7C" :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<view v-if="current===0" class="xc-flex xc-flex-1 xc-flex-column xc-bg-f1f1f1 xc-flex-col-center" style="overflow: scroll;">
			<!--  -->
			<view class="item xc-margin-t-10" v-for="i in 20">
				<view class="xc-flex xc-flex-row-between xc-padding-15">
					<view class="xc-flex">
						<image class="xc-w-55 xc-h-55 xc-radius-1000" src="/static/designList/tx.png" mode="aspectFit"></image>
						<view class="xc-flex xc-flex-column justify-center xc-margin-l-10">
							<text class="xc-text-16 xc-c-333">张三</text>
							<view class="xc-flex xc-text-12 xc-margin-t-5">
								<text class="xc-c-999">风格：</text>
								<view class="tag tag_1">
									现代
								</view>
								<view class="tag tag_2">
									简约
								</view>
							</view>
						</view>
					</view>
					<view class="xc-flex">
						<image style="width: 32rpx;height: 32rpx;" src="/static/designList/ico-dz.png" mode="aspectFit"></image>
						<text class="xc-text-13 xc-c-999 xc-margin-l-5">玉州区</text>
					</view>
				</view>
				<view class="xc-padding-lr-10 xc-flex">
					<scroll-view :scroll-x="true">
						<view class="xc-flex">
							<image v-for="i in 10" class="xc-margin-r-10" style="flex-shrink: 0 ; width: 216rpx;height: 200rpx;" src="/static/designList/ico-tp.png"
							 mode="aspectFit"></image>
						</view>
					</scroll-view>
				</view>
				<view class="xc-flex xc-flex-row-between xc-1px-t0 xc-margin-t-10">
					<view class="xc-flex xc-h-50 align-center  xc-padding-lr-25">
						<image class="xc-w-15 xc-h-15" src="/static/designList/ico-lx.png" mode="aspectFit"></image>
						<text class="xc-margin-l-10" style="color: #2A4E7C;">联系设计师</text>
					</view>
					<view class="xc-flex xc-h-50 align-center  xc-padding-lr-25">
						<image class="xc-w-15 xc-h-15" src="/static/designList/ico-bj-sel.png" mode="aspectFit"></image>
						<text class="xc-margin-l-10" style="color: #2A4E7C;">邀请报价</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="current===1" class="xc-flex xc-flex-1 xc-flex-column xc-bg-f1f1f1 xc-flex-col-center" style="overflow: scroll;">
			<view v-for="i in 10" class="xc-flex xc-flex-column xc-radius-5 xc-bg-fff xc-margin-tb-5" style="width: 710rpx;height: 406rpx;flex-shrink: 0;">
				<view class="xc-flex xc-h-50 align-center xc-padding-lr-10 xc-flex-row-between">
					<view class="xc-c-333  xc-text-16">
						施工团队施工团队
					</view>
					<text></text>
					<view class="tag0 xc-flex align-center justify-center">
						关注
					</view>
				</view>
				<view class="xc-flex xc-flex-column xc-relative xc-c-999 xc-padding-lr-10">
					<text>施工经验：1年</text>
					<text>预计开工日期：2020-08-12</text>
					<text>预计完成周期：35天</text>
					<text>发布日期：2020-08-30</text>
					<text>失效日期：2020-09-06</text>

					<view class="xc-absolute xc-c-FF0000" style="bottom: 0;right: 42rpx;">
						<text class="xc-text-13">￥</text>
						<text class="xc-text-20"> 123456</text>
					</view>
				</view>
				<view class="xc-flex justify-between xc-h-50 align-center xc-margin-t-15" style="color: #294D7C;">
					<view class="xc-flex align-center xc-padding-lr-15">
						<image src="/static/designList/ico-lx.png" mode="aspectFit" class="xc-w-15 xc-h-15"></image>
						<text class="xc-text-15 xc-margin-l-10">联系施工队</text>
					</view>
					<view class="xc-flex align-center xc-padding-lr-15">
						<image src="/static/designList/ico-qy.png" mode="aspectFit" class="xc-w-15 xc-h-15"></image>
						<text class="xc-text-15 xc-margin-l-10">选择签约</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '设计师列表'
					},
					{
						name: '查看报价'
					},
					{
						name: '查看订单'
					},
				],
				current: 0,
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 710rpx;
		height: 492rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}

	.tag0 {
		width: 90rpx;
		height: 40rpx;
		border: 2rpx solid #D28A44;
		border-radius: 4rpx;
		font-size: 30rpx;
		font-weight: 700;
		color: #D28A44;
	}

	.tag {
		width: 76rpx;
		height: 36rpx;
		// line-height: 36rpx;
		border-radius: 6rpx;
		text-align: center;
		margin-right: 10rpx;
	}

	.tag_1 {
		color: #C09F89;
		background: #FFF9F2;
		border: 1px solid #CCA878;
	}

	.tag_2 {
		color: #76CE80;
		background: #F2FFF6;
		border: 1px solid #76CE80;
	}
</style>
