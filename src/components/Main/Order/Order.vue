<template>
  <div id='orderPage'>
    <div class="myhead">
      <img src="/static/images/timg.jpeg" height="100%">
    </div>
    <div  class="masonry">
      <div  class="allOrderListInConsumerEnd item" v-for="order in allMyOrder" :key="order.orderId" d>
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

        <div>备注: {{order.note}} </div>
        </div>
       </div>
  </div>
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

.myhead {
  height: 100px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-right: 5vw;
  margin-left: 5vw; /* Adjustment for the gutter */
  margin-top: 15px;
  margin-bottom: 15px;
  width: 90%;
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
  margin-right: 5vw;
  margin-left: 5vw; /* Adjustment for the gutter */
  width: 90%;
}

.item {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  height: auto;
  min-width: 360px;
  margin: 0 8px 8px 0; /* Some gutter */
}

.orderMetaData {
  font-size: 14px;
  background-color: #e6cf8b;
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
</style>
