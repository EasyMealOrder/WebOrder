<template>
  <div class="middle-block">
    <div class="middle-item" v-for="item in items" :key="item.id">
      <i :class="item.icon"></i>
      <p>{{ item.val }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 0,
          val: '待开发项',
          icon: 'el-icon-time icon-pos'
        },
        {
          id: 2,
          val: '待开发项',
          icon: 'el-icon-time icon-pos'
        },
        {
          id: 3,
          val: '待开发项',
          icon: 'el-icon-time icon-pos'
        }
      ]
    }
  }
}
</script>

<style>
.middle-block {
  height: 30%;
  background-color: #fff;
}
.middle-block .middle-item {
  height: 28%;
}
.icon-pos {
  height: 100%;
  float: left;
  padding: 3% 2% 0 4%;
  margin: 0;
}
.middle-block .middle-item p {
  height: 50%;
  line-height: 2.5vw;
  padding: 4% 0 1.5% 15%;
  font-size: 4.5vw;
  margin-bottom: 0;
}
</style>
