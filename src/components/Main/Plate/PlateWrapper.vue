<template>
<div>
  <Plate></Plate>
  <div class="payButton">去付款，共：￥{{totalPrice}}</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Plate from './Plate.vue'

export default{
  components: {Plate},
  computed: mapGetters({
    totalPrice: 'cartTotalPrice'
  })
}

</script>

<style>
/*适配电脑*/
.payButton {
  height: 3vw;
  width: 100%;
  font-size: 2vw;
  text-align: center;
  border: 1px solid;
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
