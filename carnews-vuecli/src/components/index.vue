<template>
  <div>
  <ul class="list">
    <router-link to="/desc" class = "item" tag = "li">
      <div class="icon-hot"></div>
      <p class="title">最美自主车致尚XT竞争力分析</p>
      <div class="info">
        <span class="date">07-04 06:30</span>
        <span class="author">搜狐汽车</span>
      </div>
    </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
