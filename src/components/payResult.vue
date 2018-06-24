<template>
  <div id="pay-result-wrapper">
    <img id="pay-result-img" src="http://edu.asean168.com/uploadfile/2015/0630/20150630024710512.jpg">
    <p>5秒后自动跳转</p>
    <el-button type="success" id="return-btn-in-pay-result-page" @click="wxPay">假装微信支付成功</el-button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'payResultPage',
  computed: {
    ...mapGetters([
      'currentOrder'
    ])
  },
  methods: {
    ...mapActions([
      'checkout'
    ]),
    wxPay () {
      console.log(this.currentOrder)
      let param = {
        dishes: this.currentOrder,
        route: this.$router
      }
      this.checkout(param)
    }
  }
}
</script>

<style>
  #pay-result-wrapper {
    text-align: center;
    vertical-align: middle;
  }
  #return-btn-in-pay-result-page {
    margin-left: auto;
    margin-right: auto;
  }

@media only screen and (max-width: 1600px) {
  #pay-result-img {width: 40vw ;}
  #pay-result-wrapper {margin-top: 10vh;}
  #return-btn-in-pay-result-page{
    font-size: 35px;
    height: 10vh;
    width: 40vw;
  }
}
@media only screen and (max-width: 1024px) {
  #pay-result-img {width: 80vw ;}
  #pay-result-wrapper {margin-top: 10vh;}
  #return-btn-in-pay-result-page{
    font-size: 60px;
    height: 10vh;
    width: 80vw;
  }
}

@media only screen and (max-width: 480px) {
  #pay-result-img {width: 80vw ;}
  #pay-result-wrapper {margin-top: 8vh;}
  #return-btn-in-pay-result-page{
    font-size: 20px;
    height: 10vh;
    width: 80vw;
  }
}

</style>
