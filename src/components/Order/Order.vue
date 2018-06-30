<template>
  <el-container id='orderPage'>
    <div class="orderPageHeader">
      <el-button class="goBackButton">
        <i class="el-icon-arrow-left leftArrow-style" @click="goBack"></i>
        <span class="goBack-font">历史订单</span>
      </el-button>
    </div>
    <div class="masonry">
      <el-card class="box-card" v-for="order in allMyOrder" :key="order.orderId" :body-style="{ padding: '0px', height: '75%' }" >
        <div slot="header" class="card-head">
          <span class="orderMetaData">{{order.table}}号桌    {{order.orderTime}}</span>
          <span class="orderMetaData"> 订单号 {{order.id}}</span>
        </div>
        <img src="/static/images/dish.jpeg" class="order-img"/>
        <div class="orderWrapper">
          <p class="orderPrice">价格：{{order.price}}元</p>
          <div class="dishCompletedItem">
            <p class="ADishInAOrderIsFinishedText" v-show="order.finished">订单状态：已完成</p>
            <p class="ADishInAOrderIsNotFinishedText" v-show="!order.finished">订单状态：未完成</p>
          </div>
        </div>
      </el-card>
    </div>
  </el-container>
</template>
<script>
import service from '../../api/unitedInterface'

export default {
  name: 'cookEndPage',
  data: function () {
    return {
      allMyOrder: []
    }
  },
  created () {
    // 从服务器返回所有历史订单
    service.getAllMyOrder(
      (res) => {
        this.allMyOrder = res['data']
        console.log(res['data'])
      }
    )
  },
  methods: {
    // 返回“我”界面
    goBack () {
      this.$router.replace('/main/myself')
    }
  }
}
</script>

<style>
#orderPage {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #efefef;
}

#orderPage .orderPageHeader {
  position: fixed;
  height: 8%;
  background-color: #ffffff;
  width: 100%;
  top: 0;
}

#orderPage .orderPageHeader .goBackButton {
  height: 100%;
  width: 10%;
  border-style: none;
}

#orderPage .orderPageHeader .goBackButton .leftArrow-style {
  height: 100%;
  font-size: 200%;
  color: #409EFF;
}

#orderPage .orderPageHeader .goBackButton .goBack-font {
  color: #409EFF;
  line-height: 100%;
  font-size: 120%;
  position: relative;
  bottom: 3px;
}

#orderPage .masonry {
  position: fixed;
  height: 92% ! important;
  top: 8% ! important;
  width: 100%;
  overflow: scroll;
}

#orderPage .masonry .box-card {
  height: 40%;
  width: 85%;
  margin-right: auto;
  margin-left: auto; /* Some gutter */
  border-color: rgb(225, 226, 226);
  background-color: #ffffff;
  margin-top: 4%;
  margin-bottom: 10%;
}
#orderPage .masonry .box-card .card-head {
  height: 10%;
  line-height: 100%;
  font-weight: bold;
}
#orderPage .masonry .box-card .order-img {
  height: 60%;
  width: 100%;
}
#orderPage .masonry .box-card .orderWrapper {
  height: 40%;
}

#orderPage .masonry .box-card .orderWrapper .orderPrice {
  padding: 3% 0 0 3%;
  line-height: 80%;
  margin: 0;
}

#orderPage .masonry .box-card .orderWrapper .dishCompletedItem {
  padding: 0 0 0 3%;
}
#orderPage .masonry .box-card .orderWrapper .dishCompletedItem .ADishInAOrderIsFinishedText {
  color: #3cb035;
}

#orderPage .masonry .box-card .orderWrapper .dishCompletedItem .ADishInAOrderIsNotFinishedText{
  color: #b56969;
}
</style>
