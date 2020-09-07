<template>
	<view class="wrap page house">
		<view class="">
			<view class="xc-h-30">
			</view>
			<view class="item xc-flex xc-flex-column xc-margin-lr-10 xc-margin-b-15" v-for="(i,k) in 6" :key="k">
				<view class="title xc-flex xc-flex-row-between xc-w-100p xc-padding-15">
					<view class="xc-text-17 name">
						玉林碧桂园
					</view>
					<view class="">
						<u-checkbox v-model="check" size="40" active-color="#294D7C" shape="circle"></u-checkbox>
					</view>
				</view>
				<u-line></u-line>
				<view class="xc-padding-lr-15 xc-padding-t-30 xc-c-666">
					<view class="">
						<text>类型：</text>
						<text>小区房</text>
					</view>
					<view class="">
						<text>户型：</text>
						<text>1室2厅3卫1阳台</text>
					</view>
					<view class="">
						<text>面积：</text>
						<text>120m²</text>
					</view>
					<view class="">
						<text>地址：</text>
						<text class="">浙江省杭州市西湖区文三路138号东方通信大厦7楼501室</text>
					</view>
					<view class="btn xc-flex xc-flex-row-right xc-margin-t-40 ">
						<view class="">
							<image style="width: 44rpx;height: 44rpx;" src="/static/house/ico-bji.png" mode="aspectFit"></image>
						</view>
						<view class="xc-margin-lr-35">
							<image style="width: 44rpx;height: 44rpx;" src="/static/house/ico-del.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>

			

		</view>
	</view>
</template>

<script>
	export default {
		name: "house",
		data() {
			return {
				check: true,
				templateAll:`
				<template>
					<view class="wrap page house">
						<view class="">
							<view class="xc-h-30">
							</view>
							<view class="item xc-flex xc-flex-column xc-margin-lr-10 xc-margin-b-15" v-for="(i,k) in 6" :key="k">
								<view class="title xc-flex xc-flex-row-between xc-w-100p xc-padding-15">
									<view class="xc-text-17 name">
										玉林碧桂园
									</view>
									<view class="">
										<u-checkbox v-model="check" size="40" active-color="#294D7C" shape="circle"></u-checkbox>
									</view>
								</view>
								<u-line></u-line>
								<view class="xc-padding-lr-15 xc-padding-t-30 xc-c-666">
									<view class="">
										<text>类型：</text>
										<text>小区房</text>
									</view>
									<view class="">
										<text>户型：</text>
										<text>1室2厅3卫1阳台</text>
									</view>
									<view class="">
										<text>面积：</text>
										<text>120m²</text>
									</view>
									<view class="">
										<text>地址：</text>
										<text class="">浙江省杭州市西湖区文三路138号东方通信大厦7楼501室</text>
									</view>
									<view class="btn xc-flex xc-flex-row-right xc-margin-t-40 ">
										<view class="">
											<image style="width: 44rpx;height: 44rpx;" src="/static/house/ico-bji.png" mode="aspectFit"></image>
										</view>
										<view class="xc-margin-lr-35">
											<image style="width: 44rpx;height: 44rpx;" src="/static/house/ico-del.png" mode="aspectFit"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</template>
				
				<script>
					export default {
						name: "house",
						data() {
							return {
								check: true
							};
						},
						methods: {},
						mounted() {},
						onShow() {},
						onLoad() {},
					};
				</ script>
				
				<style lang="scss" scoped>
					.page {
						background-color: #F2F2F2;
						// position: fixed;
						// left: 0;
						// top: 0;
						display: flex;
						flex:1
					}
				
					.item {
						width: 710rpx;
						height: 526rpx;
						background: #FFFFFF;
						box-shadow: 0px 0px 25rpx 2rpx rgba(226, 226, 226, 0.66);
						border-radius: 20rpx;
					}
				
					.name {
						position: relative;
						padding-left: 20rpx;
				
						&::after {
							position: absolute;
							width: 6rpx;
							top: 50%;
							height: 30rpx;
							content: "";
							left: 0;
							border-radius: 10px;
							transform: translateY(-38%);
							background-color: #606266;
						}
					}
				</style>
				`
			};
		},
		methods: {},
		mounted() {},
		onShow() {},
		onLoad() {},
	};
</script>

<style lang="scss" scoped>
	.page {
		background-color: #F2F2F2;
		display: flex;
		flex:1
	}

	.item {
		width: 710rpx;
		height: 526rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 25rpx 2rpx rgba(226, 226, 226, 0.66);
		border-radius: 20rpx;
	}

	.name {
		position: relative;
		padding-left: 20rpx;

		&::after {
			position: absolute;
			width: 6rpx;
			top: 50%;
			height: 30rpx;
			content: "";
			left: 0;
			border-radius: 10px;
			transform: translateY(-38%);
			background-color: #606266;
		}
	}
</style>
