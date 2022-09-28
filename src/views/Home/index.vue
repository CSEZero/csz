<template>
  <div class="home">
    <Login v-if="showLogin" />
    <!-- header -->
    <header>
      <div class="logo">
        <img class="logo1" src="../../static/logo/Ellipse.png" alt="" />
        <img class="logo2" src="../../static/logo/csezero.png" alt="" />
      </div>
      <ul>
        <li v-for="item in liData" :key="item.id">
          <a>{{ item }}</a>
        </li>
      </ul>
      <div class="search"></div>
      <ul>
        <li><a @click="show">登录/注册</a></li>
        <li><a>会员中心</a></li>
        <li><a>足迹</a></li>
        <li><a>动态</a></li>
        <li><a>消息</a></li>
      </ul>
    </header>
    <!-- 备案信息 -->
    <footer>湘ICP备2022019370号-1</footer>
  </div>
</template>
<script>
import Login from '../../components/login/index.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 是否展示登录信息
      liData: ['下载', '学习', '社区', '分享']
    }
  },
  components: {
    Login
  },
  computed: {
    ...mapState(['showLogin'])
  },
  methods: {
    show() {
      this.$store.commit('SHOW')
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  min-width: 100%;
  // 防止文字掉落
  width: max-content;
  ul {
    display: flex;
    li {
      display: flex;
    }
  }
  a {
    height: 48px;
    padding: 0 10px;
    cursor: pointer;
  }
  header {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    img {
      display: inline-block;
    }
    .logo {
      width: 146px;
      margin-left: 20px;
      .logo1 {
        width: 26px;
        height: 26px;
        margin-right: 5px;
        vertical-align: middle;
      }
      .logo2 {
        height: 16px;
        vertical-align: middle;
      }
    }
    .search {
      width: 400px;
      height: 40px;
      margin: 0 15px;
      border-radius: 8px;
      background-color: #f5f6f7;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 36px;
    line-height: 36px;
    color: 2c3e50;
    text-align: center;
    background-color: #fff;
  }
}
</style>
