<!-- 答题 -->
<template>
  <div>
    <!-- <img src="../images/4-2.png" alt=""> -->
    <div class="scoreBanner">
      <div class="score">{{score}}</div>
      <div class="scoreTitle">{{this.scoreTitle[titleNum]}}</div>
    </div>
    <img src="../images/4-3.png" alt class="share" />
    <div class="info">关注葡萄之家，获取答案</div>
    <img src="../images/4-4.png" alt />
  </div>
</template>

<script>
import container from "@/components/container";
import { mapState } from "vuex";
export default {
  components: {
    container
  },
  data() {
    return {
      score: 0, //分数
      scoreTitle: [
        "",
        "你真棒！",
        "哎呦，不错哟",
        "需要努力了",
        "菜的抠脚",
        "垃圾，滚"
      ],
      titleNum: 0
    };
  },
  created() {
    this.computedScore();
  },
  computed: {
    ...mapState({
      itemDetail: state => state.itemDetail,
      answerid: state => state.answerid
    })
  },
  methods: {
    //计算分数
    computedScore() {
      this.answerid.forEach(item => {
        if (item == 1) {
          this.score += 20;
        }
      });
      switch (true) {
        case this.score == 100:
          this.titleNum = 1;
          break;
        case this.score >= 80:
          this.titleNum = 2;
          break;
        case this.score >= 60:
          this.titleNum = 3;
          break;
        case this.score >= 40:
          this.titleNum = 4;
          break;
        case this.score <= 20:
          this.titleNum = 5;
          break;
        default:
          this.titleNum = 0;
          break;
      }
    }
  },
  mounted() {}
};
</script>
<style >
body {
  background-image: url("../images/4-1.jpg");
}
.scoreBanner {
  width: 4rem /* 300/75 */;
  height: 2.666667rem /* 200/75 */;
  background: url("../images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0.666667rem /* 50/75 */ auto 0;
}
.score {
  font-size: 0.666667rem /* 50/75 */;
  color: #c33939;
  padding-top: 1.2rem /* 90/75 */;
  margin: 0 auto;
}
.scoreTitle {
  font-size: 0.266667rem /* 20/75 */;
  padding-top: 1.6rem 120/75;
  margin: 0 auto;
}
.share {
  margin: 0.4rem /* 30/75 */ auto 0;
}
.info {
  font-size: 0.266667rem /* 20/75 */;
  margin-top: 0.4rem /* 30/75 */;
}
</style>
