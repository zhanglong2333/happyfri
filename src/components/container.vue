<template>
  <div class="hello">
    <header class="clearfix" v-if="fatherComp=='home'">
      <div class="title-img"></div>
      <span class="title">{{level}}</span>
    </header>
    <header class="clearfix" v-else-if="fatherComp=='item'">
      <div class="title-img"></div>
      <!-- <span class="title">题目{{itemNum}}</span> -->
      <span class="title">{{itemDetail[itemNum-1].topic_name}}</span>
    </header>
    <!-- 此处是banner区域变更所需要的代码 -->
    <div>
      <div class="banner" v-if="fatherComp=='home'"></div>
      <div v-else-if="fatherComp == 'item'" class="item-banner">
        <ul>
          <li
            class="list"
            v-for="(item,index) in itemDetail[itemNum-1].topic_answer"
            @click="checkAnswer(item.topic_answer_id,item.is_standard_answer)"
            :key="item.topic_answer_id"
          >
            <span :class="checkNum != item.topic_answer_id?'listNum':'checkdeListNum'">{{index+1}}</span>
            {{item.answer_name}}
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <div v-if="fatherComp=='home'||fatherComp=='item'">
        <router-link to="item">
          <img v-if="fatherComp=='home'" src="../images/1-4.png" alt class="foot" />
          <img
            v-else-if="fatherComp=='item'&&itemDetail.length != itemNum"
            src="../images/2-2.png"
            alt
            class="foot"
            @click="nextQuestion()"
          />
        </router-link>
      </div>
      <div v-if="itemDetail.length == itemNum">
        <img class="foot" src="../images/3-1.png" alt @click="subAnswer" />
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
      answerid: -1//默认是负数
    };
  },
  // computed: mapState(["level","itemNum","itemDetail"]),
  computed: {
    ...mapState({
      level: state => state.level,
      itemNum: state => state.itemNum,
      /**
       * 此处写法有两种，可是使用箭头函数，或者使用function函数，建议使用箭头函数
       * 注意点：如果使用function函数的时候 一定要return  箭头函数是会自动返回值的
       */
      itemDetail: state => state.itemDetail
      // itemDetail: function(state) {
      //   return state.itemDetail;
      // }
    })
  },
  created() {
    // document.body.style.backgroundImage = "url('../images/1-1.jpg')";

    if (this.fatherComp == "home") {
      this.initDatas();
    }
  },
  methods: {
    //选择答案获取的id，用于更改序号背景色
    checkAnswer(id, answerid) {
      console.log(id, answerid);

      this.checkNum == id
        ? ((this.checkNum = 0), (this.answerid = -1))
        : ((this.checkNum = id), (this.answerid = answerid));
    },
    //下一题
    nextQuestion() {
      if ( this.answerid  < 0) {
        alert("您还没有选择答案哦");
      } else {
        //换到下一题
        /**
         * 需要调用actions的时候有两种方法
         * 1、使用$store.dispatch调用
         * 2、使用...mapActions辅助函数映射出来，然后直接调用
         */
        // this.$store.dispatch('addItemNum');
        this.addItemNum(this.answerid);
        this.answerid = -1;
      }
    },
    //映射
    ...mapActions(["addItemNum", "initDatas"]),
    //提交答案
    subAnswer() {
      if (this.answerid  < 0) {
        alert("您还没有选择答案哦");
      } else {
        this.$router.push("/sub");
        this.nextQuestion();
      }
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
  background: url("../images/WechatIMG2.png") no-repeat;
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
  background: url("../images/1-2.png") no-repeat;
  background-size: 100% /*300/75*/ 100%;
}
.item-banner,
.banner {
  width: 4.666667rem /* 350/75 */;
  height: 4rem /* 300/75 */;
  margin: 0 auto;
}
.item-banner {
  background: url("../images/2-1.png") no-repeat;
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
