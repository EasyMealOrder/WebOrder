<template>
  <el-container id="plate">
    <el-main>
      <Plate></Plate>
      <div class="pay-button-pos">
        <el-button class="payButton" icon="el-icon-success" @click="payMeal">去付款，共：￥{{totalPrice}}</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Plate from './Plate.vue'

export default{
  components: {Plate},
  computed: {
    ...mapGetters({
      totalPrice: 'cartTotalPrice',
      dishes: 'cartDishes'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    }),
    payMeal () {
      console.log(this.$router)
      let para = {
        dishes: this.dishes,
        route: this.$router
      }
      this.checkout(para)
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
  background-color: #B56969;
  border-color: #B56969;
  position: fixed;
  bottom: 0px;
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
