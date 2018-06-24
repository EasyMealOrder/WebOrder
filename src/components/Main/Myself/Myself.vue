<template>
  <el-container id="myself">
    <el-main>
      <div class="userInfo">
        <img :src="headimgurl" />
        <div class="user-right">
          <p class="username">{{ username }}</p>
          <p class="userID">用户ID : {{ userID }}</p>
        </div>
      </div>
      <div class="history-order" @click="clickHistory">
        <i class="el-icon-goods icon-pos"></i>
        <p>历史订单</p>
      </div>
      <middle-block></middle-block>
    </el-main>
  </el-container>
</template>

<script>
import MiddleBlock from './MiddleBlock.vue'
import { mapGetters } from 'vuex'

export default {
  components: {MiddleBlock},
  computed: {
    ...mapGetters([
      'username',
      'headimgurl',
      'userID'
    ])
  },
  methods: {
    clickHistory () {
      this.$router.push({name: 'Order'})
    }
  }
}
</script>

<style>
#myself {
  height: 95%;
  bottom: 0;
  position: fixed;
  width: 100%;
}
#myself .el-main {
  margin: 0;
  padding: 0;
}
#myself .el-main .userInfo {
  height: 20%;
  margin: 8% 0 3% 0;
  background-color: #fff;
}
#myself .el-main .history-order {
  height: 6.5%;
  margin: 8% 0 10% 0;
  background-color: #fff;
}
#myself .el-main .history-order p {
  line-height: 2.5vw;
  padding: 3.5% 0 2% 15%;
  font-size: 4.5vw;
}
#myself .el-main .userInfo img {
  margin: 4% 5% 3% 3%;
  width: 22vw;
  height: 22vw;
  float: left;
}
#myself .el-main .userInfo .user-right {
  height: 100%;
}
#myself .el-main .userInfo .user-right .username {
  padding: 6% 0 2% 0;
  height: 20%;
  line-height: 2.5vw;
  font-size: 5vw;
  margin: 0 0 0 0;
}
#myself .el-main .userInfo .user-right .userID {
  line-height: 1.5vw;
  font-size: 4vw;
  color: #93999f;
  height: 10%;
  padding: 5% 0 2% 0;
  margin: 0 0 0 0;
}
.icon-pos {
  height: 100%;
  float: left;
  padding: 3% 2% 1% 4%;
}
</style>
