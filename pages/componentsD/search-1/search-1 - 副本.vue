<template>
	<view class="u-demo">
		<view class="u-demo-wrap" style="padding-left:0;padding-right:0;margin-left: -40rpx;margin-right: -40rpx;">
			<view class="u-demo-title">演示效果</view>
			<view class="u-demo-area">
				
			</view>
		</view>
		<view class="u-config-wrap">
			<!--<view class="u-config-title u-border-bottom">
				参数配置
			</view>
		 	<view class="u-config-item">
				<view class="u-item-title">更换图标</view>
				<u-subsection vibrateShort :list="['是', '否']" @change="iconChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">自定义右侧内容</view>
				<u-subsection vibrateShort :list="['文字', 'Switch组件', 'Badge组件']" @change="rightSlotChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">描述信息</view>
				<u-subsection vibrateShort current="1" :list="['是', '否']" @change="lableChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">更换标题</view>
				<u-subsection vibrateShort :list="['是', '否']" @change="titleChange"></u-subsection>
			</view>
			<view class="u-config-item">
				<view class="u-item-title">右侧箭头</view>
				<u-subsection vibrateShort :list="['是', '否']" @change="arrowChange"></u-subsection>
			</view> -->
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
