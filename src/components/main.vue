<template>
  <div class="hello">
    <header class="clearfix">
      <div class="title-img"></div>
      <span class="title">{{level}}</span>
    </header>
    <div class="banner"></div>
    <footer>
      <img src="../assets/images/1-4.png" alt class="foot" @click="startAnswer" />
      <router-link to="item"></router-link>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: ""
    };
  },
  computed: mapState(["level"]),
  methods: {
    startAnswer() {
      console.log("触发了");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title-img {
  float: right;
  height: 2rem /* 150/75 */;
  width: 1.333333rem /* 100/75 */;
  background: url("../assets/images/WechatIMG2.png") no-repeat;
  background-size: 100% 100%;
}

.title {
  color: #1a1b1b;
  position: absolute;
  right: 0.32rem /* 24/75 */;
  top: 1.466667rem /* 110/75 */;
  font-size: 0.186667rem /* 14/75 */;
  font-weight: 700;
}
.banner {
  width: 4.666667rem /* 350/75 */;
  height: 4rem /* 300/75 */;
  background: url("../assets/images/1-2.png") no-repeat;
  background-size: 100% /*300/75*/ 100%;
  margin: 0 auto;
}
.foot {
  width: 1.333333rem /* 100/75 */;
}
/*
导致浮动的原因：子元素使用了浮动，脱离了标准流，父盒子的高度撑不起来。
清除浮动的方法：
1、可以给父盒子一个overflow：hidden的样式
   通过触发BFC方式，实现清除浮动
   缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素
2、可以给子元素增加一个div，增加一个clear：both的类
   缺点：添加无意义标签，语义化差
3、使用伪元素清楚法
  .clearfix:after{
    content:'';
    dispaly:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .clearfix{
    *zoom:1
    //ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行
  }
  4、双伪元素清楚法
  .clearfix:after,.clearfix:befire{
    content:'';
    display:table;
  }
  .clearfix:after{
    clear:both;
  }
  .clearfix{
    *zoom:1
  }
*/
.cl {
  overflow: hidden;
}
.qf {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
</style>
