<template>
  <el-container class="dish-list">
    <el-main>
      <div class="dish-item" v-for="dish in dishes" :key="dish.id">
        <img :src="dish.dish_img" />
        <div class="dish-right">
          <p class="name">{{ dish.name }}</p>
          <p class="desc">{{ dish.description }}</p>
          <div class="dish-bottom">
            <p class="price">¥ {{dish.price}}</p>
            <el-button class="dish-sub" id="dish-sub-in-dish-list" icon="el-icon-minus" circle></el-button>
            <!-- <div class="dish-count">{{ dish.num }}</div> -->
            <el-button class="dish-add" type="primary" icon="el-icon-plus" circle @click="addDishToCart(dish)"></el-button>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    dishes: 'shownDishes'
  }),
  methods: mapActions([
    'addDishToCart'
  ]),
  created () {
    this.$store.dispatch('getAllDishes')
    console.log('getAllDishes')
  }
}
</script>

<style>
.el-icon-circle-plus-outline {
  height: 100%;
}
.dish-list {
  height: 100%;
  width: 100%;
  top: 5%;
}
.dish-item {
  height: 5%;
  width: 100%;

}
.dish-button .dish-sub {
  font-size: 30px;
  text-align:center;
  vertical-align:middle;
  height:21px;
}

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
.dish-item .dish-right .dish-bottom .dish-add {
  position: absolute;
  right: 22vw;
  bottom: 3vw;
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
#dish-sub-in-dish-list {
  visibility: hidden;
  position: absolute;
  left: 67%;
  background-color: #909399;
}
</style>
