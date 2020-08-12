<template>
  <view class="page customerList bg-white wrap">
    <cu-custom bgcolor="xc-bg-fff" :isBack="true" showBorder>
      <block slot="content">
        <text class="xc-text-16 wt-74CDEB">选择客户</text>
      </block>
    </cu-custom>
    <view class="xc-padding-lr-15 xc-padding-tb-5  xc-w-100p">
      <u-search
        v-model="keyword"
        shape="round"
        :clearabled="true"
        :showAction="true"
        inputAlign="left"
        @clear="searchClear"
        @search="getList(false)"
        @custom="getList(false)"
      ></u-search>
    </view>
    <scroll-view scroll-y="true"  class=" flex xc-flex-1" @scrolltolower="loadData">
      <view class=" xc-h-100p xc-padding-t-10">
        <view class="xc-w-100p xc-margin-b-10" v-for="(item,index) in list" :key="index">
          <view
            @click="itemClick(item)"
            class=" xc-bg-fff flex align-start"
          >
            <view
              class="xc-padding-l-15 xc-padding-r-10 flex flex-direction justify-center xc-flex-1  fr-border-r xc-1px-b"
              style="min-height: 150rpx;"
            >
              <view class="xc-text-15">
                <text class="xc-margin-r-15">{{item.nickname}}</text>
              </view>
              <view>
                <view class="xc-text-14 xc-c-7f7f7f xc-margin-t-10 lh160">联系电话：{{item.mobile}}</view>
              </view>
            </view>
          </view>
        </view>

        <uni-load-more :status="loadingType"></uni-load-more>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "customerList",
  data() {
    return {
      list: [],
      loadingType: "",
      page: 1,
      page_size: 10,
      keyword: "",
	  templateAll:`
	  <template>
	    <view class="page customerList bg-white wrap">
	      <cu-custom bgcolor="xc-bg-fff" :isBack="true" showBorder>
	        <block slot="content">
	          <text class="xc-text-16 wt-74CDEB">选择客户</text>
	        </block>
	      </cu-custom>
	      <view class="xc-padding-lr-15 xc-padding-tb-5  xc-w-100p">
	        <u-search
	          v-model="keyword"
	          shape="round"
	          :clearabled="true"
	          :showAction="true"
	          inputAlign="left"
	          @clear="searchClear"
	          @search="getList(false)"
	          @custom="getList(false)"
	        ></u-search>
	      </view>
	      <scroll-view scroll-y="true"  class=" flex xc-flex-1" @scrolltolower="loadData">
	        <view class=" xc-h-100p xc-padding-t-10">
	          <view class="xc-w-100p xc-margin-b-10" v-for="(item,index) in list" :key="index">
	            <view
	              @click="itemClick(item)"
	              class=" xc-bg-fff flex align-start"
	            >
	              <view
	                class="xc-padding-l-15 xc-padding-r-10 flex flex-direction justify-center xc-flex-1  fr-border-r xc-1px-b"
	                style="min-height: 150rpx;"
	              >
	                <view class="xc-text-15">
	                  <text class="xc-margin-r-15">{{item.nickname}}</text>
	                </view>
	                <view>
	                  <view class="xc-text-14 xc-c-7f7f7f xc-margin-t-10 lh160">联系电话：{{item.mobile}}</view>
	                </view>
	              </view>
	            </view>
	          </view>
	  
	          <uni-load-more :status="loadingType"></uni-load-more>
	        </view>
	      </scroll-view>
	    </view>
	  </template>
	  
	  <script>
	  export default {
	    name: "customerList",
	    data() {
	      return {
	        list: [],
	        loadingType: "",
	        page: 1,
	        page_size: 10,
	        keyword: "",
	      };
	    },
	    methods: {
	      itemClick(item) {
	        this.goRoute('nb','',{customer:item})
	      },
	      searchClear() {
	        this.keyword = "";
	      },
	      loadData() {
	        this.getList(true);
	      },
	      getList(bool = false) {
	        if (!bool) {
	          this.page = 1;
	          this.list = [];
	        } else {
	          this.page += 1;
	        }
	  
	        this.loadingType = "loading";
	  	  var data = '{"code":1,"msg":"数据获取成功","data":{"current_page":1,"total":1,"count":1,"page_size":10,"data":[{"id":270,"nickname":"18817164525","account":"18817164525","mobile":"18817164525","role_type":1,"id_positive":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.s5GFIIqtWn7463d339e1972c271007ef21d55f89319b.jpg","id_opposite":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.O1uAP8FxanzU88d28986e5df664ab99e2cafb49bde57.jpg","id_card":"11341","business_license":"https:\/\/xingxun.xc2099.cn\/attachs\/2020\/08\/12\/5f3356f1f0b0e.jpg","shop_id":48},{"id":272,"nickname":"18778875841","role_type":1,"id_positive":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.nyIxNYbVeX6Vd10e9d547dd3458bf5fb9d6958bfd55b.jpg","id_opposite":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.LtikqtSrLA3udd8e93ad4973112712f8bcc18e8f2947.jpg","id_card":"450021199004014612","business_license":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.uq2p3kbko0FY9da0ec07a1b3febace90d962ccaf52b0.jpg","shop_id":48,"account":"18778875841","mobile":"18778875841"}]}}';
	  	  var list = JSON.parse(data).data.data;
	  	  this.list = list;
	      //   var { page, page_size, keyword } = this;
	      //   this.$api
	      //     .user_myUsers({
	      //       page,
	      //       page_size,
	      //       keyword,
	      //     })
	      //     .then((data) => {
	      //       this.loadingType = "more";
	      //       if (this.page >= data.total) this.loadingType = "noMore";
	      //       this.list = this.list.concat(data.data);
	      //     })
	      //     .catch((e) => {
	      //       this.loadingType = "noMore";
	      //     });
	      },
	    },
	    mounted() {},
	    onShow() {
	    },
	    onLoad() {
	  	  this.getList();
	    },
	  };
	  < /script>
	  
	  <style lang="scss" scoped>
	  .customerList {
	  }
	  </style>
	  `
    };
  },
  methods: {
    itemClick(item) {
      this.goRoute('nb','',{customer:item})
    },
    searchClear() {
      this.keyword = "";
    },
    loadData() {
      this.getList(true);
    },
    getList(bool = false) {
      if (!bool) {
        this.page = 1;
        this.list = [];
      } else {
        this.page += 1;
      }

      this.loadingType = "loading";
	  var data = '{"code":1,"msg":"数据获取成功","data":{"current_page":1,"total":1,"count":1,"page_size":10,"data":[{"id":270,"nickname":"18817164525","account":"18817164525","mobile":"18817164525","role_type":1,"id_positive":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.s5GFIIqtWn7463d339e1972c271007ef21d55f89319b.jpg","id_opposite":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.O1uAP8FxanzU88d28986e5df664ab99e2cafb49bde57.jpg","id_card":"11341","business_license":"https:\/\/xingxun.xc2099.cn\/attachs\/2020\/08\/12\/5f3356f1f0b0e.jpg","shop_id":48},{"id":272,"nickname":"18778875841","role_type":1,"id_positive":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.nyIxNYbVeX6Vd10e9d547dd3458bf5fb9d6958bfd55b.jpg","id_opposite":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.LtikqtSrLA3udd8e93ad4973112712f8bcc18e8f2947.jpg","id_card":"450021199004014612","business_license":"http:\/\/tmp\/wx878ce417c234b2cf.o6zAJs6ZBAiixZZMpt92DF9ycido.uq2p3kbko0FY9da0ec07a1b3febace90d962ccaf52b0.jpg","shop_id":48,"account":"18778875841","mobile":"18778875841"}]}}';
	  var list = JSON.parse(data).data.data;
	  this.list = list;
    //   var { page, page_size, keyword } = this;
    //   this.$api
    //     .user_myUsers({
    //       page,
    //       page_size,
    //       keyword,
    //     })
    //     .then((data) => {
    //       this.loadingType = "more";
    //       if (this.page >= data.total) this.loadingType = "noMore";
    //       this.list = this.list.concat(data.data);
    //     })
    //     .catch((e) => {
    //       this.loadingType = "noMore";
    //     });
    },
  },
  mounted() {},
  onShow() {
  },
  onLoad() {
	  this.getList();
  },
};
</script>

<style lang="scss" scoped>
.customerList {
}
</style>