<template>
  <div class="home">
    <Login v-if="showLogin" />
    <!-- header -->
    <header>
      <div class="logo">
        <img class="logo1" src="../../static/logo/Ellipse.png" alt="" />
        <img class="logo2" src="../../static/logo/csezero.png" alt="" />
      </div>
      <ul class="leftUl">
        <li v-for="item in liData" :key="item.id">
          <a>{{ item }}</a>
        </li>
      </ul>
      <div class="search"></div>
      <ul class="rightUl">
        <li>
          <a @click="show" v-show="loginTxt">登录/注册</a>
          <img
            v-show="!loginTxt"
            class="avatar"
            src="../../static/login/avatar.png"
          />
          <div class="userInfo">
            <img src="../../static/login/avatar.png" alt="" class="userImg" />
            <div class="userName">斟秋</div>
            <div class="fans">
              <div class="fansBox">
                <div class="fansNum">--</div>
                <div class="fansTxt">粉丝</div>
              </div>
              <div class="fansBox">
                <div class="fansNum">9</div>
                <div class="fansTxt">关注</div>
              </div>
              <div class="fansBox">
                <div class="fansNum">--</div>
                <div class="fansTxt">获赞</div>
              </div>
            </div>
            <el-col :span="12" class="infoMore">
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="1">
                  <i class="el-icon-location"></i>
                  <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">内容管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">我的学习</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">我的认证</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">我的认证</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="12" class="goOut">
              <el-menu>
                <el-menu-item>
                  <i class="el-icon-setting"></i>
                  <span slot="title">退出登录</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </div>
        </li>
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
  .leftUl {
    display: flex;
    li {
      display: flex;
      align-items: center;
      &:hover {
        background-color: #f5f6f7;
      }
    }
  }
  .rightUl {
    display: flex;
    li {
      position: relative;
      display: flex;
      align-items: center;
      .avatar {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        padding: 0 10px;
        cursor: pointer;
      }
      .userInfo {
        position: absolute;
        top: 52px;
        left: -100px;
        width: 248px;
        height: 500px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        .userImg {
          position: absolute;
          top: -30px;
          left: 50%;
          margin-left: -24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .userName {
          padding: 0 16px;
          height: 93px;
          line-height: 93px;
          text-align: center;
          font-size: 20px;
          border-bottom: 1px solid #f5f6f7;
        }
        .fans {
          display: flex;
          justify-content: space-evenly;
          box-sizing: border-box;
          height: 67px;
          padding: 8px 0;
          border-bottom: 1px solid #f5f6f7;
          .fansBox {
            display: flex;
            flex-direction: column;
            align-items: center;
            .fansNum {
              display: flex;
              align-items: center;
              height: 50%;
              font-size: 20px;
              color: #222;
            }
            .fansTxt {
              display: flex;
              align-items: center;
              height: 50%;
              font-size: 14px;
              color: #c0c4cc;
            }
          }
        }
        .infoMore {
          width: 249px;
          box-sizing: content-box;
          border-bottom: 1px solid #f5f6f7;
        }
        .goOut {
          width: 249px;
        }
      }
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
