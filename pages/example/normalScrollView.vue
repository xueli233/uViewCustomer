<template>
	<view class="wrap">
		<view class="item u-border-bottom" v-for="(item, index) in list" :key="index">
			{{'第' + item + '条数据'}}
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				list: 34,
				page: 0
			}
		},
		onReachBottom() {
			if(this.page >= 3) return ;
			this.status = 'loading';
			this.page = ++ this.page;
			setTimeout(() => {
				this.list += 10;
				if(this.page >= 3) this.status = 'nomore';
				else this.status = 'loading';
			}, 2000)
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.item {
		padding: 24rpx 0;
		color: $u-content-color;
		font-size: 28rpx;
	}
</style>