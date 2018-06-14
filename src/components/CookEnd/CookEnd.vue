<template>
  <div id='cookEndWrapper'>
    <button type="button"  @click="changeDisplayedList">{{buttonText}}</button>
   <div  v-show="isAllListDisplayed">
      这是全部订单
   </div>
     <div v-show="!isAllListDisplayed">
    <div  class="masonry">
      <div  class="toDoOrderWrapperInCookEnd item" v-for="order in allOrderToDo" :key="order.orderId">
        <div>{{order.deskId}}号桌</div>
        <div>下单时间 {{order.orderTime}}</div>
        <div> 订单号 {{order.orderId}}</div>
        <div class="wrapperOfDishesInToDoOrder" v-for="dish in order.dishList" :key="dish.dishId">
          {{dish.dishName}} *  {{dish.num}} <button v-show="!dish.isDishCompleted">完成</button>
        </div>
        <div>备注: {{order.note}} </div>
        <button v-show="!order.isOrderCompleted">全部完成</button>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import service from '../../api/unitedInterface'

export default {
  name: 'cookEndPage',
  data: function () {
    return {
      isAllListDisplayed: false,
      buttonText: '全部订单',
      allOrderToDo: {}
    }
  },
  methods: {
    changeDisplayedList: function () {
      if (this.isAllListDisplayed) {
        this.buttonText = '全部订单'
      } else {
        this.buttonText = '未做订单'
      }
      this.isAllListDisplayed = !this.isAllListDisplayed
    }
  },

  computed: {

  },
  created () {
    service.getAllToDoOrder(
      (textGet) => { this.allOrderToDo = textGet['data'] }
    )
  }
}
</script>

<style>

  .toDoOrderWrapperInCookEnd {
    border-color: black;
    border-width: 1px;
    border-style: solid;
    padding-left: 5px;
    padding-right: 5px;
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

</style>
