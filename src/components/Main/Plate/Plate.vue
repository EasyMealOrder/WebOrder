<template>
  <div class="plate-list">
      <div class="plate-item" v-for="dish in dishes" :key="dish.id">
        <img :src="dish.dish_img" />
        <div class="plate-right">
          <p class="name">{{ dish.name }}</p>
          <p class="desc">{{ dish.description }}</p>
          <div class="plate-bottom">
            <p class="price">¥ {{ dish.price }}</p>
            <el-button class="plate-sub" icon="el-icon-minus" circle @click="minusDishFromCart(dish)"></el-button>
            <div class="plate-count">
              <p class="count-text">{{ dish.quantity }}</p>
            </div>
            <el-button class="plate-button" type="primary" icon="el-icon-plus" @click="addDishToCart(dish)" circle></el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    dishes: 'cartDishes'
  }),
  methods: mapActions([
    'addDishToCart',
    'minusDishFromCart'
  ])
}
</script>

<style>
.plate-list {
  width: 100%;
  height: 95%;
  top: 5%;
}
.plate-list .plate-item {
  height: 25vw;
  margin: 0 0 1% 0;
  background-color: #fff;
}
.plate-item img {
  margin: 2.5vw 1% 1.5vw 1%;
  width: 20vw;
  height: 20vw;
  float: left;
}
.plate-item .plate-right {
  height: 100%;
}
.plate-item .plate-right .name {
  padding: 2.5% 0 2% 0;
  height: 20%;
  line-height: 2.5vw;
  font-size: 2.5vw;
  margin: 0 0 0 0;
}
.plate-item .plate-right .desc {
  line-height: 1.5vw;
  font-size: 1.5vw;
  color: #93999f;
  height: 10%;
  padding: 0 0 2% 0;
  margin: 0 0 0 0;
}

.plate-item .plate-right .plate-bottom {
  position: relative;
  height: 50%;
}
.plate-item .plate-right .plate-bottom .price {
  font-weight: bold;
  font-size: 3vw;
  line-height: 3vw;
  margin: 0;
}
.plate-item .plate-right .plate-bottom .plate-button {
  position: absolute;
  right: 2vw;
  bottom: 1.5vw;
  margin: 0;
  height: 4vw;
  width: 4vw;
}
.plate-item .plate-right .plate-bottom .plate-sub {
  position: absolute;
  right: 20vw;
  bottom: 1.5vw;
  height: 4vw;
  width: 4vw;
}
.plate-sub {
  background-color: #909399;
}
.plate-item .plate-right .plate-bottom .plate-count {
  position: absolute;
  height: 4vw;
  width: 4vw;
  right: 12vw;
  bottom: 3vw;
}
.plate-item .plate-right .plate-bottom .plate-count .count-text{
  height: 100%;
  margin: 0;
  text-align: center;
  vertical-align: top;
  line-height: 5vw;
}
</style>
