<template>
  <div class="dish-list">
      <div class="dish-item" v-for="dish in dishes" :key="dish.id">
        <img :src="dish.dish_img" />
        <div class="dish-right">
          <p class="name">{{ dish.name }}</p>
          <p class="desc">{{ dish.description }}</p>
          <div class="dish-bottom">
            <p class="price">¥ {{dish.price}}</p>
            <el-button class="dish-sub" circle></el-button>
            <!-- <div class="dish-count">{{ dish.num }}</div> -->
            <el-button class="dish-button" type="primary" circle></el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['dishes']
}
</script>

<style>
.dish-list {
  height: 100%;
}
.dish-list .dish-item {
  height: 25vw;
  margin: 0 0 1% 0;
  background-color: #fff;
}
.dish-item img {
  margin: 2.5vw 1% 1.5vw 1%;
  width: 20vw;
  height: 20vw;
  float: left;
}
.dish-item .dish-right {
  height: 100%;
}
.dish-item .dish-right .name {
  padding: 2.5% 0 2% 0;
  height: 20%;
  line-height: 2.5vw;
  font-size: 2.5vw;
  margin: 0 0 0 0;
}
.dish-item .dish-right .desc {
  line-height: 1.5vw;
  font-size: 1.5vw;
  color: #93999f;
  height: 10%;
  padding: 0 0 2% 0;
  margin: 0 0 0 0;
}
.dish-item .dish-right .dish-bottom {
  position: relative;
  height: 50%;
}
.dish-item .dish-right .dish-bottom .price{
  font-weight: bold;
  font-size: 3vw;
  line-height: 3vw;
  margin: 0;
}
.dish-item .dish-right .dish-bottom .dish-button {
  position: absolute;
  right: 2vw;
  bottom: 1.5vw;
  margin: 0;
  height: 4vw;
  width: 4vw;
}
.dish-item .dish-right .dish-bottom .dish-sub {
  position: absolute;
  right: 15vw;
  bottom: 1.5vw;
  height: 4vw;
  width: 4vw;
}
</style>
