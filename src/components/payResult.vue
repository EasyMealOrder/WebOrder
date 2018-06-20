<template>
  <div id="pay-result-wrapper">
    <img id="pay-result-img" src="http://edu.asean168.com/uploadfile/2015/0630/20150630024710512.jpg">
    <p>五秒后自动跳转</p>
    <button id="return-btn-in-pay-result-page" @click="backToPlate"> 马上返回</button>
  </div>
</template>

<script>

export default {
  name: 'payResultPage',
  methods: {
    backToPlate () {
      this.$router.go(-1)
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
    font-size: 36px;
    height: 10vh;
    width: 80vw;
  }
}

</style>
