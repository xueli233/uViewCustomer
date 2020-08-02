<template>
	<view class="nav-wrap">
		<view class="nav-title">
		</view>
		<view class="nav-desc">
			<block v-for="(i,k) in uViewSettings" :key="k">
				<u-tag class="u-m-r-10 u-m-b-10" :text="k" :type="type" :shape="shape" :closeable="closeable" :mode="mode" @close="close(k)"
				 :show="show" :size="size" />
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			desc: String,
		},
		data() {
			return {
				uViewSettings: {},
				closeable: true,
				mode: "light",
				shape: "square",
				show: true,
				size: "default",
				text: "蒹葭苍苍",
				type: "primary",
			}
		},
		onShow() {
			var str = uni.getStorageSync('uViewSettings'),
				uViewSettings;
			if (str) {
				uViewSettings = JSON.parse(str);
			} else {
				uViewSettings = {};
			}
			this.uViewSettings = uViewSettings;
		},
		methods: {
			// 关闭
			close(k) {
				console.log(k);
				this.uViewSettings[k] = null;
				delete this.uViewSettings[k];
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrap {
		padding: 30rpx;
	}

	.nav-title {
		display: flex;
		align-items: center;
	}

	.nav-info {
		margin-left: 30rpx;
	}

	.nav-title__text {
		display: flex;
		color: $u-main-color;
		font-size: 50rpx;
		font-weight: bold;
	}

	.logo {
		width: 140rpx;
		height: auto;
	}

	.nav-slogan {
		color: $u-tips-color;
		font-size: 28rpx;
	}

	.nav-desc {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: $u-content-color;
	}
</style>
