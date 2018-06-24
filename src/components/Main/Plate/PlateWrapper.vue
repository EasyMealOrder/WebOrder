<template>
  <el-container id="plate">
    <el-main>
      <Plate></Plate>
      <div class="pay-button-pos">
        <el-button type="text" class="payButton" icon="el-icon-success" @click="payMeal">去付款，共：￥{{totalPrice}}</el-button>
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
      dishorder: 'dishrecord',
      tableID: 'tableID'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    }),
    ...mapMutations([
      'setCurrentOrder'
    ]),
    payMeal () {
      console.log(this.$router)
      this.$prompt('请输入备注', '提交订单', {
        confirmButtonText: '支付订单',
        cancelButtonText: '取消订单',
        showClose: false,
        customClass: 'messageBox',
        confirmButtonClass: 'confirmButton',
        cancelButtonClass: 'cancelButton'
      }).then(({ value }) => {
        let param = {
          order: {
            table: this.tableID,
            price: this.totalPrice,
            note: value
          },
          dishorder: this.dishorder
        }
        this.setCurrentOrder(param)
        console.log(this.currentOrder)
        let data = {
          dishes: this.currentOrder,
          route: this.$router
        }
        this.checkout(data)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '订单已取消',
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
  height: 95%;
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

/*适配电脑*/
.payButton {
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 2vw;
  text-align: center;
  position: fixed;
  bottom: 0px;
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
