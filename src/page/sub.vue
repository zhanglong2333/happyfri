<!-- 答题 -->
<template>
  <div>
    <!-- <img src="../images/4-2.png" alt=""> -->
    <div class="scoreBanner">
      <div class="score">100</div>
      <div class="scoreTitle">还不错，加油啊！</div>
    </div>
    <img src="../images/4-3.png" alt class="share" />
    <div class="info">关注葡萄之家，获取答案</div>
    <img src="../images/4-4.png" alt />
  </div>
</template>

<script>
import container from "@/components/container";
import { mapState } from 'vuex';
export default {
  components: {
    container
  },
  data() {
    return {
      score:'',//分数
    };
  },
  created() {
  },
  computed:{
    ...mapState({
      itemDetail:state=>state.itemDetail,
      answerid:state=>state.answerid,
    })
  },
  methods:{
    computedScore(){

    }
  },
  mounted() {}
};
</script>
<style >
body {
  background: url("../images/4-1.jpg") no-repeat;
  background-size: 100% 100%;
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
