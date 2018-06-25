<template>
  <el-container id="plate">
    <el-main>
      <Plate></Plate>
      <div class="pay-button-pos">
        <!-- 如果购物车为空，不显示支付按钮 -->
        <el-button v-if="checkIfEmpty > 0" type="text" class="payButton" icon="el-icon-success" @click="payMeal">去付款，共：￥{{totalPrice}}</el-button>
      </div>
      <div class="pay-empty-pos">
        <!-- 购物车为空时显示下面文字 -->
        <p v-if="checkIfEmpty == 0">餐盘空空如也~</p>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Plate from './Plate.vue'

export default{
  components: {Plate},
  computed: {
    ...mapGetters({
      totalPrice: 'cartTotalPrice',
      dishrecord: 'dishrecord',
      tableID: 'tableID',
      currentOrder: 'currentOrder',
      checkIfEmpty: 'checkIfEmpty'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    }),
    ...mapMutations([
      'setCurrentOrder'
    ]),
    postOrder (value) {
      console.log('post order call')
      console.log(this.dishrecord)
      this.setCurrentOrder({
        order: {
          table: this.tableID,
          price: this.totalPrice,
          note: value
        },
        dishrecord: this.dishrecord
      })
      this.checkout({
        dishes: this.currentOrder,
        route: this.$router,
        message: this.$message
      })
    },
    payMeal () {
      this.$prompt('请输入备注', '提交订单', {
        confirmButtonText: '支付订单',
        cancelButtonText: '取消订单',
        showClose: false,
        customClass: 'messageBox',
        confirmButtonClass: 'confirmButton',
        cancelButtonClass: 'cancelButton'
      }).then(({ value }) => {
        console.log('table id in then is ' + this.tableID)
        this.postOrder(value)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '支付失败',
          customClass: 'showMessage'
        })
      })
      // let para = {
      //   dishes: this.dishes,
      //   route: this.$router
      // }
      // this.checkout(para)
    }
  }
}

</script>

<style>
#plate {
  width: 100%;
  height: 92%;
  bottom: 0;
  position: fixed;
}
.el-main {
  line-height: 160px;
  height: 95%;
  padding: 0;
  top: 5%;
}
.pay-button-pos {
  position: fixed;
  bottom: 0;
  margin: 0;
  height: 10vw;
  width: 100%;
}
.pay-empty-pos {
  position: absolute;
  width: 100%;
  height: 10vw;
  bottom: 60%;
  text-align: center;
  margin: 0;
  font-size: 15px;
  color: grey;
}

/*适配电脑*/
.payButton {
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 2vw;
  text-align: center;
  position: fixed;
  bottom: 0px;
  background-color: rgb(33, 138, 230);
  color: white;
}
.messageBox {
  position: absolute;
  left: 15%;
  top: 30%;
  width: 70%;
  height: 30%;
}
.confirmButton {
  width: 40%;
  position: absolute;
  bottom: 6%;
  height: 15%;
  left: 5%;
  margin: 0;
}
.cancelButton {
  width: 40%;
  position: absolute;
  bottom: 6%;
  height: 15%;
  right: 5%;
}
.showMessage {
  width: 80%;
  min-width: 300px;
  margin: 0;
}
.showMessage p {
  width: 80%;
}

/*适配手机*/
@media only screen and (max-width: 640px) {
  .payButton {
    font-size: 8vw;
    height: 10vw;
  }
}
/*适配Ipad, Ipod*/
@media only screen and (max-width: 1024px) {
  .payButton {
    font-size: 6vw;
    height: 8vw;
  }
}
</style>
