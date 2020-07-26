<template>
	<view class="nav-wrap">
		<view class="nav-title">
			<image class="logo" src="https://cdn.uviewui.com/uview/common/logo.png" mode="widthFix"></image>
			<view class="nav-info">
				<view class="nav-title__text">
					uView UI
				</view>
				<view class="nav-slogan">
					多平台快速开发的UI框架
				</view>
			</view>
		</view>
		<view class="nav-desc">
			<block v-for="(i,k) in uViewSettings" :key="k">
				<u-tag class="u-m-r-10 u-m-b-10" :text="k" :type="type" :shape="shape" :closeable="closeable" :mode="mode" @close="close(k)"
				 :show="show" :size="size" />
			</block>
		</view>
		<u-button @click="btnClick" data-name="3333">上传</u-button>
		
		<u-button class="u-m-t-30" @click="deleteClick" data-name="3333">清空</u-button>
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
			console.log(uViewSettings);
			this.uViewSettings = uViewSettings;
		},
		methods: {
			// 关闭
			close(k) {
				console.log(k);
				this.uViewSettings[k] = null;
				delete this.uViewSettings[k];
			},
			retKey(i) {
				return Object.keys(this.uViewSettings)[i];
			},
			btnClick() {
				uniCloud.callFunction({
					name: 'pluginConfiguration',
					data: {
						datas: this.uViewSettings
					}
				}).then(res => {
					uni.showToast({
						title: '上传成功'
					});
				});

			},
			deleteClick(){
				uniCloud.callFunction({
					name: 'pluginConfigurationDelete',
				}).then(res => {
					this.uViewSettings = {}
					uni.removeStorage({
						key:'uViewSettings'
					})
					uni.showToast({
						title: '操作成功'
					});
				});
			}
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
