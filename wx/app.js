// app.js
App({
  a:123,
  b(){
    console.log(this.a)
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }),
    wx.cloud.init({
      env: "project-9gxw1jrn07a19fac"
    })
  },
  globalData: {
    userInfo: null
  }
})
