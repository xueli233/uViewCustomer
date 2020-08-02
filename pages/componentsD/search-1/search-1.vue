<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="padding-left:0;padding-right:0;margin-left: -40rpx;margin-right: -40rpx;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">

			</view>
		</view>
		<view class="u-config-wrap">
			<view class="xc-padding-lr-10 xc-bg-fff xc-padding-t-10 xc-flex" style="height: calc(100vw / 2.35);">
				<view  class="xc-margin-r-10 xc-h-100p" style="width: calc(40vw);">
					<image class="xc-h-100p xc-w-100p" src="/static/gr-bj.png" mode=""></image>
				</view>
				<view class="flex flex-direction xc-h-100p justify-between">
					<view  style="width: calc(60vw);height: calc(100vw / 5.3);">
						<image class="xc-w-100p xc-h-100p" src="/static/gr-bj.png" mode=""></image>
					</view>
					<view  style="width: calc(60vw);height: calc(100vw / 5.3);">
						<image class="xc-w-100p xc-h-100p" src="/static/gr-bj.png" mode=""></image>
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

			}
		},
		computed: {

		},
		methods: {

		}
	};
</script>

<style lang="scss" scoped>
	.gab {
		background-color: rgb(245, 245, 245);
		height: 20rpx;
	}

	.wrap {
		height: 100vh;
		background-color: rgb(241, 241, 241);
	}

	.box {
		padding: 30rpx 00rpx;
		font-size: 28rpx;
		color: $u-type-info;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
