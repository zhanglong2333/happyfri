<template>
  <div class="hello">
    <header class="clearfix">
      <div class="title-img"></div>
      <span class="title" v-if="fatherComp=='home'">{{level}}</span>
      <span class="title" v-else-if="fatherComp=='item'">题目{{itemNum}}</span>
    </header>
    <!-- 此处是banner区域变更所需要的代码 -->
    <div>
      <div class="banner" v-if="fatherComp=='home'"></div>
      <div v-else-if="fatherComp == 'item'" class="item-banner">
        <div class="list-title">{{itemDetail[itemNum-1].topic_name}}</div>
        <ul>
          <li
            class="list"
            v-for="item,index in itemDetail[itemNum-1].topic_answer"
            @click="checkAnswer(item.topic_answer_id,item.topic_answer_id)"
            :key="item.topic_answer_id"
          >
            <span :class="checkNum != item.topic_answer_id?'listNum':'checkdeListNum'">{{index+1}}</span>
            {{item.answer_name}}
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <router-link to="item">
        <img v-if="fatherComp=='home'" src="../assets/images/1-4.png" alt class="foot" />
        <img
          v-else-if="fatherComp=='item'"
          src="../assets/images/2-2.png"
          alt
          class="foot"
          @click="nextQuestion()"
        />
      </router-link>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    fatherComp: {
      type: String
    }
  },
  data() {
    return {
      checkNum: 0, //选择序号
      answerid: "" //
    };
  },
  computed: mapState(["level", "itemNum", "itemDetail"]),
  methods: {
    //选择答案获取的id，用于更改序号背景色
    checkAnswer(id, answerid) {
      this.checkNum == id
        ? ((this.checkNum = 0), (this.answerid = ''))
        : ((this.checkNum = id), (this.answerid = answerid));
    },
    //下一题
    nextQuestion() {
      if (this.answerid == '') {
        alert("您还没有选择答案哦");
      }
      console.log(this.answerid);
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
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
  background: url("../assets/images/1-2.png") no-repeat;
  background-size: 100% /*300/75*/ 100%;
}
.item-banner,
.banner {
  width: 4.666667rem /* 350/75 */;
  height: 4rem /* 300/75 */;
  margin: 0 auto;
}
.item-banner {
  background: url("../assets/images/2-1.png") no-repeat;
  background-size: 100% /*300/75*/ 100%;
}
.list {
  font-size: 0.266667rem /* 20/75 */;
  color: #fff;
  width: 100%;
  margin: 20px 0;
}
.listNum {
  border: 1px solid #f5e153;
  border-radius: 51%;
  padding: 0px 5px;
}
.checkdeListNum {
  border: 1px solid #f5e153;
  border-radius: 51%;
  padding: 0px 5px;
  background-color: #f5e153;
}
.list-title {
  color: #fff;
  font-size: 0.266667rem /* 20/75 */;
  text-align: left;
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
