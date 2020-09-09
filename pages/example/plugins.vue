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
		<u-cell-group title-bg-color="rgb(243, 244, 246)">
			<u-cell-item :titleStyle="{fontWeight: 500}" @click="openPage(item1.path)" :title="item1.title" v-for="(item1, index1) in list" :key="index1">
				<image slot="icon" class="u-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
			</u-cell-item>
		</u-cell-group>
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
				text: "",
				type: "primary",
				list:[
					{ path: '/pages/example/sign', icon: 'icon', title: '签名', },
					{ path: '/pages/example/qrcode', icon: 'icon', title: '海报生成', },
					{ path: '/pages/example/normalScrollView', icon: 'icon', title: '普通的滚动列表', },
					{ path: '/pages/example/normalSearchList', icon: 'icon',title:'普通的搜索列表' },
					{ path: '/pages/example/my1', icon: 'icon',title:'个人中心1' },
					{ path: '/pages/example/house', icon: 'icon',title:'房屋列表' },
					{ path: '/pages/example/designList', icon: 'icon',title:'设计师列表' },
				]
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
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

			openPage(path) {
				this.$u.route({
					url: path
				})
			},
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

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
</style>
