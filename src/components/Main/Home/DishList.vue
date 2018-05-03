<template>
  <div class="dish-list">
      <div class="dish-item" v-for="dish in dishes" :key="dish.id">
        <img :src="dish.dish_img" />
        <div class="dish-right">
          <p class="name">{{ dish.name }}</p>
          <p class="desc">{{ dish.description }}</p>
          <div class="dish-bottom">
            <p class="price">¥ {{dish.price}}</p>
            <!-- <div class="dish-count">{{ dish.num }}</div> -->
            <el-button class="dish-button" type="primary" icon="el-icon-plus" circle></el-button>
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
.dish-item {
  height: 170px;
  background-color: #fff;
}
.dish-item img {
  margin: 10px 8px 10px auto;
  width: 150px;
  height: 150px;
  float: left;
}
.dish-item .dish-right {
  height: 170px;
}
.dish-item .dish-right .name {
  padding: 10px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
}
.dish-item .dish-right .desc {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}
.dish-item .dish-right .dish-bottom {
  height: 98px;
  position: relative;
}
.dish-item .dish-right .dish-bottom .price{
  font-weight: 700;
  line-height: 24px;
  padding: 50px 0 0 0;
}
.dish-item .dish-right .dish-bottom .dish-button {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
