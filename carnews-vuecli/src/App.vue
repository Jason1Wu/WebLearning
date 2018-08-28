<template>
<div>
  <div id="app">
  <header>
    <a class="left">二手车</a>
    <h1>汽车新闻</h1>
    <router-link to="/index" class = "home" tag = "div"></router-link>
  </header>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{margin: 0;padding: 0}
body{color: #eee;height: 100%}
header{width: 640px;height: 1.625rem;background-color: #fcce06;color: #333333;}
header a{line-height: 1.625rem;font-size: 0.5625rem;margin-left: 0.28125rem;width:3.625rem;float: left;}
header h1{float: left;font-size: 0.625rem;line-height: 1.625rem;width: 2.546875rem;}
header .home{width: 0.5rem;height: 0.46875rem;background: url(./assets/home.png) no-repeat;position: absolute;top: 0.484375rem;right: 0.796875rem;}
.list{padding-top: 0.15625rem;overflow: hidden;background-color: #eeeeee;}
.item{width: 9.4375rem;height: 1.9375rem;border: 1px #dadada solid;border-radius: 0.15625rem;margin: 0.4375rem auto; background-color: #fff;padding-left: 0.296875rem;padding-top: 0.203125rem;box-sizing: border-box;position: relative; }
.list .title{font-size: 0.5rem;color: #333;width: 7.1875rem;line-height: 0.796875rem;}
.list .info{line-height: 0.703125rem;font-size: 0.53125rem;color: #a9a9a9;}
.list .icon-hot{position: absolute;width: 0.515625rem;height: 0.4375rem;background: url(./assets/hot.png) no-repeat 0 0 /cover;right: 1.328125rem;top: 0.421875rem;}
.wrapper{padding: 0.625rem;background-color: #fff;}
h2{font-size: 0.5625rem;color: #040404;font-weight: bold;line-height: 1.25rem;}
.subtitle{font-size: 0.375rem;color: #b7b7b7;line-height: 0.78125rem;padding-bottom: 0.359375rem;border-bottom: 1px solid #e8e8e8;}
.cover{padding: 0.5625rem 0 0.21875rem;}
.cover-info{line-height: 0.828125rem;color: #b7b7b7;font-size: 0.375rem;text-align: center;padding-bottom: 0.3125rem;}
.content{font-size: 0.46875rem;line-height: 0.9437rem;color: #3e3d45;}
</style>

