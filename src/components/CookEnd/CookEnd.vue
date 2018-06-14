<template>
  <div id='cookEndWrapper'>
   <button type="button" @click="changeDisplayedList">{{buttonText}}</button>
   <div  v-show="isAllListDisplayed">
      这是全部订单
   </div>
   <div v-show="!isAllListDisplayed">
    <div class="toDoOrderWrapperInCookEnd" v-for="order in allOrderToDo" :key="order.orderId">
      <p>{{order.deskId}}号桌</p>
      <p>下单时间 {{order.orderTime}}</p>
      <p> 订单号 {{order.orderId}}</p>
      <div class="wrapperOfDishesInToDoOrder" v-for="dish in order.dishList" :key="dish.dishId">
        {{dish.dishName}} *  {{dish.num}} <button v-show="!dish.isDishCompleted">完成</button>
      </div>
      <p>备注: {{order.note}} </p>
      <button v-show="!order.isOrderCompleted">全部完成</button>
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
        this.buttonText = '完成订单'
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
</style>
