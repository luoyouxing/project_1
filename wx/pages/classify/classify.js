let app = getApp() //获取全局app实例
let mokuai = require("../../mokuai.js") //加载模块内容
// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bool: false,
    meg: "123456",
    num: "1",
    arr: "123456",
    xiala:true
  },
  add() {
    this.setData({
      arr: "0123456789abcdefghi",
      xiala: false
    })
  },
  turn(val) {
    //读取全局app内容
    console.log(app)
    console.log(app.a)
    console.log(app.b)

    //读取模块内容
    console.log(mokuai.obj.a)
    mokuai.obj.b()

    //读取事件的传值
    console.log(val.target.dataset)
    console.log(val.currentTarget.dataset)

    console.log(this.data.bool)
    this.setData({
      bool: !this.data.bool
    })
  },
  maopao(val) {
    console.log(val)
    console.log(val.target.dataset) //获取底层元素上绑定的数据
    console.log(val.currentTarget.dataset) //获取当前元素上绑定的数据
  },
  zujian(val) { //用形参val接收子组件传过来的值
    this.setData({
      meg: val.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    setInterval(() => {
      this.setData({
        num: this.data.num >= 100 ? 1 : this.data.num + 1
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})