<template>
  <el-container class="dish-list">
    <el-main>
      <div class="dish-item" v-for="dish in dishes" :key="dish.id" @click="viewDetailedDish(dish, $event)">
        <div class="dish-pic"><img :src="dish.dish_img" /></div>
        <div class="dish-right">
          <p class="name">{{ dish.name }}</p>
          <p class="desc">{{ dish.description }}</p>
          <div class="dish-bottom">
            <p class="price">¥ {{dish.price}}</p>
            <!--
            <el-button class="dish-sub" circle @click="minusDishFromCart(dish)">
              <i class="el-icon-minus button-pos"></i>
            </el-button>
            -->
            <el-button class="dish-add" type="primary" circle @click="ClickToAddDishToCart(dish)">
              <i class="el-icon-plus button-pos"></i>
            </el-button>
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
  // 点击某个菜品时，将其加入餐盘： addDishToCart
  methods: {
    ...mapActions([
      'addDishToCart',
      'setDetailDish',
      'minusDishFromCart'
    ]),
    viewDetailedDish (d, event) {
      console.log(event.target.tagName)
      if (event.target.tagName === 'I') {
        console.log(this.dishes)
        console.log('prevent')
      } else {
        this.setDetailDish(d)
        this.$router.push({name: 'Details'})
      }
    },
    // 弹出提示成功添加到购物车
    notifyToAddToCart () {
      console.log('notification called')
      this.$notify({
        message: '已添加到购物车'
      })
    },
    ClickToAddDishToCart (dish) {
      this.$store.dispatch('addDishToCart', dish)
      this.notifyToAddToCart()
    }
  },

  // 初始创建页面时，得到所有菜品
  created () {
    if (this.$store.getters.allDishes === undefined || this.$store.getters.allDishes.length === 0) {
      this.$store.dispatch('getAllDishes')
      console.log('getAllDishes')
    }
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
.dish-list > .el-main {
  padding: 0;
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
  right: 2vw;
  bottom: 1.5vw;
  margin: 0;
  height: 4vw;
  width: 4vw;
}
.button-pos {
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 1.5vw;
}
.dish-item .dish-right .dish-bottom .dish-sub {
  position: absolute;
  right: 20vw;
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

.dish-pic {
  position: relative;
  height: 100%;
  width: 25vw;
  float: left;
}
</style>
