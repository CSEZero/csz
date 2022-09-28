<template>
  <div class="login">
    <!-- 登录+注册界面 start -->
    <div class="bgc" v-if="showLogin"></div>
    <div class="loginBox" v-if="showLogin">
      <div class="closeBtn" @click="show">
        <img src="../../static/login/error.png" alt="" />
      </div>

      <div class="login-one" v-show="loginWay1">
        <div class="login-o-main">
          <img
            src="../../static/login/login.png"
            alt=""
            class="l-o-p"
            @click="(loginWay1 = !loginWay1), (loginWay2 = !loginWay2)"
          />
          <div class="login-p"><span>登录</span><a>手机验证登录</a></div>
          <div class="login-o-b">
            <ul>
              <li class="username">
                <input
                  type="text"
                  placeholder="用户名/手机号/邮箱"
                  class="login-user"
                /><span class="err-usr">请输入用户名</span>
              </li>
              <li class="password">
                <input
                  type="password"
                  placeholder="密码"
                  class="login-psw"
                /><span class="err-psw"></span>
              </li>
              <li class="identify">
                <input type="text" placeholder="请输入计算结果" /><span
                  class="err-iden"
                  >请输入验证码</span
                >
              </li>
            </ul>
            <div class="autologin">
              <div class="al-l">
                <input type="checkbox" class="next-login" /><span
                  >下次自动登录</span
                >
              </div>
              <a href="">忘记密码</a>
            </div>
            <input type="submit" value="登 录" class="login-buttom" />
            <div class="otherways">
              <a href="" class="weixin"
                ><i class="iconfont icon-weixin3 w-p"></i> 微信</a
              >
              <a href="" class="QQ"><i class="iconfont icon-QQ Q-p"></i>QQ</a>
              <a href="" class="weibo"
                ><i class="iconfont icon-weibo wb-p"></i>微博</a
              >
              <span>|</span>
              <a
                class="now"
                @click="
                  (registShow = true),
                    (loginWay1 = false),
                    (loginWay2 = false),
                    (flag = true)
                "
                >立即注册</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="login-two" v-show="loginWay2">
        <div class="login-o-main">
          <img
            src="../../static/login/login2.png"
            alt=""
            class="l-t-p"
            @click="(loginWay2 = !loginWay2), (loginWay1 = !loginWay1)"
          />
          <div class="login-p">
            <span>扫码登录</span><a>免输入/更快/更安全</a>
          </div>
          <div class="login-o-b">
            <!-- 二维码 -->
            <div class="login-dimen">
              <img src="../../static/login/two-dimen.png" alt="" />
              <p>请用最新 <span>水彩客户端</span> 扫码</p>
            </div>
          </div>
          <div class="otherways">
            <a href="" class="weixin"
              ><i class="iconfont icon-weixin3 w-p"></i> 微信</a
            >
            <a href="" class="QQ"><i class="iconfont icon-QQ Q-p"></i>QQ</a>
            <a href="" class="weibo"
              ><i class="iconfont icon-weibo wb-p"></i>微博</a
            >
            <span>|</span>
            <a
              class="now"
              @click="
                (registShow = true),
                  (loginWay1 = false),
                  (loginWay2 = false),
                  (flag = false)
              "
              >立即注册</a
            >
          </div>
        </div>
      </div>
      <!-- 注册 -->
      <div class="register-one" v-show="registShow">
        <div class="register-o-main">
          <div class="register-p">
            <span>注册</span
            ><a
              class="quicklylogin"
              @click="
                (registShow = false), (loginWay1 = flag), (loginWay2 = !flag)
              "
              >快速登录</a
            >
          </div>
          <div class="register-o-b">
            <ul>
              <li class="phone">
                <input
                  type="text"
                  placeholder="手机号"
                  ref="phone_i"
                  @input="phoneReg"
                  v-model="regPhone"
                /><span class="err-phone"></span>
              </li>
              <li class="identify">
                <input type="text" placeholder="短信验证码" /><span
                  class="err-iden"
                  >获取验证码</span
                >
              </li>
              <li class="user">
                <input
                  type="text"
                  placeholder="昵称"
                  ref="user_i"
                  @input="userReg"
                  v-model="regUser"
                /><span class="err-name"></span>
              </li>
              <li class="setpsw">
                <input
                  type="password"
                  placeholder="设置密码"
                  ref="psw_i"
                  v-model="regPsw"
                  @input="pswReg"
                /><span class="err-paswd"></span>
                <i
                  class="iconfont icon-yanjing eye"
                  v-if="eyeShow"
                  @click="eyeChange1"
                ></i>
                <i
                  class="iconfont icon-yanjingbukejian eye-hide"
                  @click="eyeChange2"
                  v-else
                ></i>
              </li>
            </ul>
            <div class="rule">
              <div class="al-l">
                <input
                  type="checkbox"
                  class="rules"
                  v-model="isChecked"
                  @click="goChecked"
                /><span
                  >我已阅读并接受该公司 <a href="">《服务协议》</a>和<a href=""
                    >《账户协议》</a
                  ></span
                >
              </div>
            </div>
            <input
              type="submit"
              value="注 册"
              class="register_buttom"
              ref="register_buttom"
              @click="goRegister"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 登录+注册界面 end -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      // 登录的两种方式切换,loginWay1为账号密码登录，loginWay2为扫码登录
      loginWay1: true,
      loginWay2: false,
      // 注册和登录的切换
      registShow: false,
      // 密码是否可见
      eyeShow: false,
      // 是否同意注册协议
      isChecked: false,
      // 登录两种方式的标志,ture为账号密码登录，false为扫码登录
      flag: true,
      // 电话号码是否满足正则
      phoneFlag: false,
      // 昵称是否满足正则
      usrFlag: false,
      // 密码是否满足正则
      pswFlag: false,
      // 电话号码框输入的内容
      regPhone: '',
      // 昵称框输入的内容
      regUser: '',
      // 密码输入框内容
      regPsw: ''
    }
  },
  computed: {
    ...mapState(['showLogin'])
  },
  methods: {
    show() {
      this.$store.commit('SHOW')
    },
    // 注册
    // 密码是否可见
    eyeChange1() {
      this.eyeShow = !this.eyeShow
      this.$refs.psw_i.type = 'password'
    },
    eyeChange2() {
      this.eyeShow = !this.eyeShow
      this.$refs.psw_i.type = 'text'
    },
    // 电话号码验证
    phoneReg() {
      const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      this.phoneFlag = reg.test(this.regPhone)
      if (this.phoneFlag) {
        this.$refs.phone_i.nextSibling.innerHTML = ''
      } else if (this.regPhone === '') {
        this.$refs.phone_i.nextSibling.innerHTML = '请输入手机号'
      } else {
        this.$refs.phone_i.nextSibling.innerHTML = '请输入正确的手机号'
      }
    },
    userReg() {
      const reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{2,20}$/i
      this.usrFlag = reg.test(this.regUser)
      if (this.usrFlag) {
        // 如果账号合法，则判断账号是否已经注册
        // 获得当前cookie中的数据
        // const oUserList = JSON.parse(localStorage.getItem('user_list') || '[]')
        // this.usrFlag = !oUserList.some(function (item) {
        //   return item.name === account
        // })
        if (this.usrFlag) {
          this.$refs.user_i.nextSibling.innerHTML = '中文数字英文均可'
          this.$refs.user_i.nextSibling.style.color = '#ccc'
        } else if (this.regUser === '') {
          this.$refs.user_i.nextSibling.innerHTML = '请输入昵称'
          this.$refs.user_i.nextSibling.style.color = '#D13333'
        } else {
          this.$refs.user_i.nextSibling.innerHTML = '该账号已被注册'
          this.$refs.user_i.nextSibling.style.color = '#D13333'
        }
      } else if (this.regUser === '') {
        this.$refs.user_i.nextSibling.innerHTML = '请输入昵称'
        this.$refs.user_i.nextSibling.style.color = '#D13333'
      } else if (this.regUser.length < 2) {
        this.$refs.user_i.nextSibling.innerHTML = '长度要大于2'
        this.$refs.user_i.nextSibling.style.color = '#D13333'
      } else if (this.regUser.length > 20) {
        this.$refs.user_i.nextSibling.innerHTML = '长度要小于20'
        this.$refs.user_i.nextSibling.style.color = '#D13333'
      } else {
        this.$refs.user_i.nextSibling.innerHTML = '昵称不符合校验规则'
        this.$refs.user_i.nextSibling.style.color = '#D13333'
      }
    },
    pswReg() {
      const reg = /^.{6,20}$/
      this.pswFlag = reg.test(this.regPsw)
      if (this.pswFlag) {
        this.$refs.psw_i.nextSibling.innerHTML = ''
      } else {
        this.$refs.psw_i.nextSibling.innerHTML = '请输入6~20个字符'
        this.$refs.psw_i.nextSibling.style.color = '#D13333'
      }
    },
    // 同意注册服务
    goChecked() {
      this.isChecked = !this.isChecked
      if (this.isChecked) {
        this.$refs.register_buttom.style.backgroundColor = '#8c222c'
      } else {
        this.$refs.register_buttom.style.backgroundColor = '#aeaeae'
      }
    },
    // 点击注册
    goRegister() {
      if (this.phoneFlag && this.usrFlag && this.pswFlag && this.isChecked) {
        this.$refs.register_buttom.style.backgroundColor = '#8c222c'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  .bgc {
    position: fixed;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
    z-index: 9999;
    display: block;
  }

  .loginBox {
    width: 450px;
    height: 472px;
    // background-color: red;
    position: fixed;
    z-index: 10000000;
    top: 50%;
    left: 50%;
    margin-top: -236px;
    margin-left: -200px;
    display: block;

    .closeBtn {
      cursor: pointer;

      img {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 0px;
        right: -52px;
      }
    }

    .login-one {
      width: 450px;
      // height: 342px;
      padding: 40px 0 30px 0;
      box-sizing: border-box;
      background-color: #f7f7f6;

      .login-o-main {
        width: 350px;
        height: 272px;
        // background-color: green;
        margin: 0 auto;
        position: relative;

        img {
          width: 62px;
          height: 62px;
          position: absolute;
          top: -32px;
          right: -42px;
          cursor: pointer;
        }

        .login-p {
          width: 350px;
          height: 35px;
          // background-color: pink;
          margin-bottom: 30px;

          span {
            width: 100px;
            height: 35px;
            line-height: 35px;
            font-size: 30px;
            color: #666;
          }

          a {
            font-size: 12px;
            color: #999;
            float: right;
            margin-top: 10px;
            cursor: pointer;

            &:hover {
              color: #333333;
            }
          }
        }

        .login-o-b {
          width: 350px;

          // height: 207px;
          // background-color: skyblue;
          ul {
            border: 1px solid #ccc;
            border-bottom: 0;

            li {
              position: relative;
              display: block;
              input {
                width: 350px;
                height: 38px;
                padding: 10px 18px;
                font-size: 14px;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;
              }

              span {
                position: absolute;
                right: 18px;
                color: #d13333;
                font-size: 14px;
                line-height: 38px;
                top: 0px;
                display: none;
              }

              &:nth-of-type(3) {
                display: none;
              }
            }

            .identify {
              span {
                right: 140px;
              }
            }
          }

          .autologin {
            width: 350px;
            height: 18px;
            margin-top: 10px;
            line-height: 16px;
            // background-color: greenyellow;
            font-size: 12px;
            color: #999;

            .al-l {
              float: left;
              input {
                width: 12px;
                height: 12px;
                border: 1px solid #e6e6e6;
                border-radius: 2px;
                vertical-align: middle;
                margin-right: 2px;
              }
            }

            a {
              font-size: 12px;
              color: #999;
              float: right;
            }
          }

          .login-buttom {
            width: 350px;
            height: 40px;
            font-size: 16px;
            color: #fff;
            background-color: #8c222c;
            border-radius: 3px;
            letter-spacing: 10px;
            cursor: pointer;
            margin-bottom: 20px;

            &:hover {
              background-color: #6a000a;
            }
          }

          .otherways {
            width: 350px;
            height: 24px;

            .weixin {
              width: 62px;
              height: 24px;
              line-height: 24px;
              background-color: #77a877;
              margin-right: 27px;
              border-radius: 3px;
              color: #fff;
              display: block;
              text-align: center;
              float: left;
              font-size: 12px;

              &:hover {
                background-color: #669766;
              }

              .w-p {
                vertical-align: middle;
              }
            }

            .QQ {
              font-size: 12px;
              line-height: 24px;
              margin-right: 27px;
              color: #666;
              float: left;

              &:hover {
                color: #365899;
              }

              .Q-p {
                vertical-align: middle;
              }
            }

            .weibo {
              font-size: 12px;
              color: #666;
              margin-right: 52px;
              line-height: 24px;
              float: left;

              &:hover {
                color: #8c222c;
              }

              .wb-p {
                vertical-align: middle;
              }
            }

            span {
              font-size: 12px;
              color: #ccc;
              float: left;
              display: block;
              line-height: 24px;
            }

            .now {
              font-size: 12px;
              line-height: 24px;
              color: #bf7f5f;
              float: right;
              cursor: pointer;

              &:hover {
                color: #8c222c;
              }
            }
          }
        }
      }
    }

    .login-two {
      width: 450px;
      // height: 364px;
      padding: 40px 0 30px 0;
      box-sizing: border-box;
      background-color: #f7f7f6;
      display: block;

      .login-o-main {
        width: 350px;
        margin: 0 auto;
        position: relative;

        > img {
          width: 62px;
          height: 62px;
          position: absolute;
          top: -32px;
          right: -42px;
          cursor: pointer;
        }

        .login-p {
          width: 350px;
          height: 35px;
          // background-color: pink;
          margin-bottom: 30px;
          cursor: pointer;

          span {
            width: 100px;
            height: 35px;
            line-height: 35px;
            font-size: 30px;
            color: #666;
            margin-right: 10px;
          }

          a {
            font-size: 12px;
            color: #999;
            // float: right;
            margin-top: 10px;
            cursor: pointer;

            &:hover {
              color: #333333;
            }
          }
        }

        .login-o-b {
          width: 350px;
          height: 207px;

          // background-color: skyblue;
          .login-dimen {
            padding-bottom: 16px;
            border-bottom: 1px solid #ccc;

            > img {
              width: 160px;
              height: 160px;
              margin: 10px auto 0;
            }

            > p {
              font-size: 12px;
              color: #666;
              text-align: center;

              span {
                color: #9e100e;
              }
            }
          }
        }

        .otherways {
          width: 350px;
          height: 24px;

          .weixin {
            width: 62px;
            height: 24px;
            line-height: 24px;
            background-color: #77a877;
            margin-right: 27px;
            border-radius: 3px;
            color: #fff;
            display: block;
            text-align: center;
            float: left;
            font-size: 12px;

            &:hover {
              background-color: #669766;
            }

            .w-p {
              vertical-align: middle;
            }
          }

          .QQ {
            font-size: 12px;
            line-height: 24px;
            margin-right: 27px;
            color: #666;
            float: left;

            &:hover {
              color: #365899;
            }

            .Q-p {
              vertical-align: middle;
            }
          }

          .weibo {
            font-size: 12px;
            color: #666;
            margin-right: 52px;
            line-height: 24px;
            float: left;

            &:hover {
              color: #8c222c;
            }

            .wb-p {
              vertical-align: middle;
            }
          }

          span {
            font-size: 12px;
            color: #ccc;
            float: left;
            display: block;
            line-height: 24px;
          }

          .now {
            font-size: 12px;
            line-height: 24px;
            color: #bf7f5f;
            float: right;
            cursor: pointer;

            &:hover {
              color: #8c222c;
            }
          }
        }
      }
    }

    /* 注册 */
    .register-one {
      width: 450px;
      // height: 342px;
      padding: 40px 0 30px 0;
      box-sizing: border-box;
      background-color: #f7f7f6;
      display: block;

      .register-o-main {
        width: 350px;
        // height: 272px;
        // background-color: green;
        margin: 0 auto;
        position: relative;

        .register-p {
          width: 350px;
          height: 35px;
          // background-color: pink;
          margin-bottom: 30px;

          span {
            width: 100px;
            height: 35px;
            line-height: 35px;
            font-size: 30px;
            color: #666;
          }

          a {
            font-size: 12px;
            color: #999;
            float: right;
            margin-top: 10px;
            cursor: pointer;

            &:hover {
              color: #333333;
            }
          }
        }

        .register-o-b {
          width: 350px;

          // height: 207px;
          // background-color: skyblue;
          ul {
            border: 1px solid #ccc;
            border-bottom: 0;

            li {
              position: relative;

              input {
                width: 350px;
                height: 38px;
                padding: 10px 18px;
                font-size: 14px;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;

                &:nth-of-type(3) {
                  border-bottom: 0;
                }
              }

              span {
                position: absolute;
                right: 18px;
                color: #d13333;
                font-size: 14px;
                line-height: 38px;
                top: 0;
                z-index: 1;
                // display: none;
              }

              .eye {
                position: absolute;
                top: 11px;
                right: 17px;
                color: #999;
                display: block;
                cursor: pointer;
              }

              .err-paswd {
                top: 0;
                right: 39px;
              }

              .eye-hide {
                position: absolute;
                top: 13px;
                right: 18px;
                color: #999;
                // display: none;
                font-size: 12px;
                cursor: pointer;
              }

              .err-iden {
                width: 75px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                color: #666;
                background-color: #f3f0e9;
                top: 7px;
                cursor: pointer;
                display: block;
              }
            }
          }

          .rule {
            width: 350px;
            height: 18px;
            margin-top: 10px;
            line-height: 16px;
            // background-color: greenyellow;
            font-size: 12px;
            color: #999;

            .al-l {
              // float: left;
              display: flex;
              input {
                width: 12px;
                height: 12px;
                border: 1px solid #e6e6e6;
                border-radius: 2px;
                vertical-align: middle;
                margin-right: 2px;
              }

              a {
                font-size: 12px;
                color: #365899;
                // float: right;
              }
              span {
                display: flex;
              }
            }
          }

          .register_buttom {
            width: 350px;
            height: 40px;
            font-size: 16px;
            color: #fff;
            // background-color: #8c222c;
            background-color: #aeaeae;
            border-radius: 3px;
            letter-spacing: 10px;
            cursor: pointer;
            margin-bottom: 12px;
            margin-top: 20px;
            // &:hover {
            //     background-color: #6a000a;
            // }
          }
        }
      }
    }
  }
}
</style>
