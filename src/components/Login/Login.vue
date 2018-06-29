<template>
    <div id="logIn">
      <div class="loadWrapper">
        <i class="el-icon-loading load-pos"></i>
        <p>假装微信登录中...</p>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'setTableID',
      'generateAccessToken',
      'generateOpenId'
    ]),
    ...mapActions([
      'wxLogIn'
    ])
  },
  computed: {
    ...mapGetters([
      'accessToken',
      'tableID'
    ])
  },
  mounted () {
    console.log('The table id is: ' + this.$route.params.id)
    this.setTableID(Number(this.$route.params.id))
    console.log('after set table id, id is  ' + this.tableID)
    // 生成用户标识
    if (this.accessToken === '') {
      this.generateOpenId()
      this.generateAccessToken()
      console.log('created and wxLogIn')
      let param = {
        router: this.$router,
        page: {name: 'Home'}
      }
      setTimeout(() => {
        console.log('log in')
      }, 2000)
      this.wxLogIn(param)
    }
  }
}
</script>

<style>
#logIn {
  height: 100%;
  width: 100%;
  background-color: #fff;
}
#logIn .loadWrapper {
  width: 45%;
  height: 25%;
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  opacity: 0.6;
}
#logIn .loadWrapper .load-pos {
  position: absolute;
  left: 36%;
  top: 20%;
  font-size: 250%;
}
#logIn .loadWrapper p {
  font-size: 80%;
  line-height: 60%;
  position: absolute;
  left: 20%;
  bottom: 10%;
}
</style>
