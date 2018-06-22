<template>
  <el-container id='orderPage'>
    <el-container class="myhead">
      <img src="/static/images/timg.jpeg" height="100%">
    </el-container>
    <el-container class="mybody">
    <el-main class="masonry">
      <div class="allOrderListInConsumerEnd item" v-for="order in allMyOrder" :key="order.orderId">
        <div class="orderMetaData">{{order.deskId}}号桌    {{order.orderTime}}</div>
        <div class="orderMetaData"> 订单号 {{order.orderId}}</div>
        <hr/>

        <div class="wrapperOfDishesInToDoOrder" v-for="dish in order.dishList" :key="dish.dishId">
          <div id="dishWrapper">
           <div id="dishNameItem">{{dish.dishName}}</div>
           <div id="dishAmountItem">{{dish.num}}份</div>
           <div id="dishCompletedItem">
            <div id="ADishInAOrderIsFinishedText" v-show="dish.isDishCompleted">已完成</div>
            <div id="ADishInAOrderIsNotFinishedText" v-show="!dish.isDishCompleted">未完成</div>
           </div>
          </div>
        </div>

        <hr/>

        <div class="note">备注: {{order.note}} </div>
      </div>
    </el-main>
    </el-container>
  </el-container>
</template>
<script>
import service from '../../../api/unitedInterface'

export default {
  name: 'cookEndPage',
  data: function () {
    return {
      allMyOrder: []
    }
  },
  created () {
    // 假装是用户订单
    // todo：之后改回是客户用的接口
    service.getAllMyOrder(
      null,
      (textGet) => { this.allMyOrder = textGet['data'] }
    )
  }
}
</script>

<style>
#orderPage {
  position: fixed;
  width: 100%;
  top: 5%;
  height: 95%;
}

.myhead {
  position: fixed;
  height: 20%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  top: 5%;
}

.mybody {
  position: fixed;
  height: 75%;
  width: 100%;
  top: 25%;
}

img {
  position: absolute;
  height: 80%;
  width: auto;
  margin-top: 3%;
  margin-left: 5%;
}

.allOrderListInConsumerEnd {
    border-color: black;
    border-width: 1px;
    border-style: solid;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
}

  html {
  box-sizing: border-box;
}

.masonry {
  display: flex;
  flex-flow: row wrap;
  margin-right: 0;
  margin-left: 0; /* Adjustment for the gutter */
  width: 100%;
  top: 36%
}

.item {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  height: 50%;
  width: 80%;
  margin-top: 2%;
  margin-right: auto;
  margin-left: auto; /* Some gutter */
}

.orderMetaData {
  height: 8vw;
  line-height: 8vw;
  font-size: 14px;
  background-color: #e6cf8b;
}

#dishWrapper {
  display: flex;
  flex-flow: row wrap;
  height: 8vw;
  line-height: 8vw;
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
}
</style>
