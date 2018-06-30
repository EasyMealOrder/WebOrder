<template>
  <el-container id='orderPage'>
    <div class="orderPageHeader" @click="debug">
      <el-button class="goBackButton">
        <i class="el-icon-arrow-left leftArrow-style" @click="goBack"></i>
        <span class="goBack-font">历史订单</span>
      </el-button>
    </div>
    <div class="orderPageMain">
      <el-card class="box-card" v-for="(order,i) in allMyOrder" :key="order.id" :body-style="{ padding: '0px', height: '75%' }" >
        <div slot="header" class="card-head">
          <span>{{order.table}}号桌</span>
          <span> 订单号 {{order.id}}</span>
        </div>
        <div class="order-info">
          <div class="order-img">
            <img :src="order.dish[0].pic"/>
          </div>
          <p v-for="dish in order.dish" :key="dish.name" class="order-dish">{{dish.name}} ×{{dish.number}}</p>
        </div>
        <div class="orderWrapper">
          <p class="orderPrice">价格：{{order.price}}元</p>
          <div class="dishCompletedItem">
            <p class="ADishInAOrderIsFinishedText" v-show="order.finished">订单状态：已完成</p>
            <p class="ADishInAOrderIsNotFinishedText" v-show="!order.finished">订单状态：未完成</p>
          </div>
          <p class="orderNote">备注：{{order.note}}</p>
        </div>
        <div class="order-rate">
          <p class="rate-desc" v-if="disable[i]">评分(已评价)</p>
          <p class="rate-desc" v-if="!disable[i]">评分(未评价)</p>
          <el-rate v-model="star[i]" :disabled="disable[i]" @change="rateSubmit(i, order.id)"></el-rate>
        </div>
      </el-card>
    </div>
  </el-container>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'order',
  data () {
    return {
      star: [],
      disable: []
    }
  },
  computed: {
    ...mapGetters([
      'historyOrder'
    ]),
    allMyOrder () {
      return this.historyOrder.map(item => {
        return {
          ...item.order,
          dish: item.dish
        }
      })
    },
    allStar () {
      return this.historyOrder.map(item => {
        return item.order.star
      })
    },
    allDisable () {
      return this.historyOrder.map(item => item.order.disable)
    }
  },
  methods: {
    ...mapActions([
      'getHistoryOrderFromService',
      'submitHistoryRate'
    ]),
    goBack () {
      this.$router.replace('/main/myself')
    },
    rateSubmit (i, id) {
      console.log('i is ' + i)
      console.log('id is ' + id)
      this.disable[i] = true
      console.log(this.disable)
      this.submitHistoryRate({
        orderID: id,
        star: this.star[i],
        comment: ''
      })
    },
    debug () {
      console.log('debug')
      console.log(this.allStar)
    }
  },
  created () {
    // 从服务器返回所有历史订单
    this.getHistoryOrderFromService()
  },
  mounted () {
    this.star = this.allStar
    this.disable = this.allDisable
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

#orderPage .orderPageMain {
  position: fixed;
  height: 92% ! important;
  top: 8% ! important;
  width: 100%;
  overflow: scroll;
}

#orderPage .orderPageMain .box-card {
  height: 45%;
  width: 85%;
  margin-right: auto;
  margin-left: auto; /* Some gutter */
  border-color: rgb(225, 226, 226);
  background-color: #ffffff;
  margin-top: 4%;
  margin-bottom: 10%;
}
#orderPage .orderPageMain .box-card .card-head {
  height: 10%;
  line-height: 100%;
  font-weight: bold;
}
#orderPage .orderPageMain .box-card .order-info {
  height: 40%;
  width: 100%;
  overflow: hidden;
}
#orderPage .orderPageMain .box-card .order-info .order-img {
  float: left;
  margin: 2% 5% 0 5%;
  padding-bottom: 25%;
  width: 25%;
  height: 0;
  overflow: hidden;
}
#orderPage .orderPageMain .box-card .order-info .order-img img {
  height: 20vw;
  width: 20vw;
  margin: auto;
}
#orderPage .orderPageMain .box-card .order-info .order-dish{
  margin: 0;
  line-height: 70%;
  padding-top: 4%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style:oblique
}
#orderPage .orderPageMain .box-card .orderWrapper {
  height: 30%;
  position: relative;
}

#orderPage .orderPageMain .box-card .orderWrapper .orderPrice {
  padding: 3% 0 0 3%;
  line-height: 80%;
  margin: 0;
}

#orderPage .orderPageMain .box-card .orderWrapper .dishCompletedItem {
  padding: 6% 5% 0 0;
  position: absolute;
  right: 0;
  top: 0;
  line-height: 80%;
}
#orderPage .orderPageMain .box-card .orderWrapper .orderNote {
  padding: 5% 0 0 3%;
  line-height: 60%;
  font-size: 75%;
  color: #93999f;
  margin: 0;
}
#orderPage .orderPageMain .box-card .orderWrapper .dishCompletedItem .ADishInAOrderIsFinishedText {
  color: #3cb035;
  padding: 0;
  margin: 0;
}

#orderPage .orderPageMain .box-card .orderWrapper .dishCompletedItem .ADishInAOrderIsNotFinishedText{
  color: #b56969;
  padding: 0;
  margin: 0;
}

#orderPage .orderPageMain .box-card .order-rate {
  width: 100%;
  height: 30%;
}
#orderPage .orderPageMain .box-card .order-rate .rate-desc {
  margin: 1% 5% 0 5%;
  line-height: 80%;
}
#orderPage .orderPageMain .box-card .order-rate .el-rate {
  margin: 2% 5% 0 5%;
}
</style>
