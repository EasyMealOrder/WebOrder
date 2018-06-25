<template>
  <el-carousel id="carousel-style" :interval="3000">
    <el-carousel-item v-for="item in allDishes" :key="item.id">
      <img :src="item.dish_img" class="carousel-img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'allDishes'
    ])
  }
}
</script>

<style>
#carousel-style {
  width: 100%;
  height: 100%;
}
#carousel-style .carousel-img {
  width: 100%;
  height: 100%;
}
</style>
