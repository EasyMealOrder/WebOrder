<template>
  <el-container id='orderPage'>
    <div class="orderPageHeader">
      <el-button id="goBackButton" icon="el-icon-arrow-left" @click="goBack">历史订单</el-button>
    </div>
    <el-main class="masonry">
      <el-card class="allOrderListInConsumerEnd item box-card" v-for="order in allMyOrder" :key="order.orderId" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="orderMetaData">{{order.table}}号桌    {{order.orderTime}}</span>
          <span class="orderMetaData"> 订单号 {{order.id}}</span>
        </div>

        <div class="wrapperOfDishesInToDoOrder">
          <div id="dishWrapper">
           <div id="dishNameItem">{{order.price}}元</div>
           <!-- <div id="dishAmountItem">{{dish.num}}份</div> -->
           <div id="dishCompletedItem">
            <div id="ADishInAOrderIsFinishedText" v-show="order.finished">已完成</div>
            <div id="ADishInAOrderIsNotFinishedText" v-show="!order.finished">未完成</div>
           </div>
          </div>
        </div>

        <hr/>

        <div class="note">备注: {{order.note}} </div>
      </el-card>
    </el-main>
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
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #fff;
}

.orderPageHeader {
  position: fixed;
  height: 8%;
  width: 100%;
  top: 0;
}

#goBackButton {
  position: absolute;
  width: 10%;
  border-style: none;
  padding-top: 15px;
  font-size: 15px;
}

.allOrderListInConsumerEnd {
  border-width: 3px;
  border-style: solid;
  border-color: rgb(225, 226, 226);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 5px;
}

.masonry {
  position: absolute;
  height: 92% ! important;
  top: 8% ! important;
  display: flex;
  flex-flow: row wrap;
  margin-right: 0;
  margin-left: 0; /* Adjustment for the gutter */
  width: 100%;
}

.item {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  height: auto;
  width: 80%;
  line-height: 14px;
  margin-top: 2%;
  margin-right: auto;
  margin-left: auto; /* Some gutter */
}

.orderMetaData {
  font-size: 14px;
  padding: 2px;
  border-radius: 3px;
}

#dishWrapper {
  display: flex;
  flex-flow: row wrap;
}

#dishNameItem,#dishCompletedItem, #dishCompletedItem {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  height: auto;
}

#dishNameItem {
  flex-shrink: 4;
  flex-grow: 4;
}

#dishAmountItem {
  flex-shrink: 1;
  flex-grow: 1;
}

#dishCompletedItem {
  flex-shrink: 1;
  flex-grow: 1;
}

#allCompletedButton {
  width: 100%;
  margin-bottom: 5px;
  background-color: #b56969;
}

#finishADishInAOrderButton {
  background-color: #b56969;
}

#ADishInAOrderIsFinishedText {
  color: #3cb035;
}

#ADishInAOrderIsNotFinishedText{
  color: #b56969;
}

.note {
  height: 10vw;
  line-height: 10vw;
  font-size: 14px;
  padding: 3px;
  border-radius: 4px;
}
</style>
