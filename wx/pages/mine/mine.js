//连接数据库（页面连接，仅当前页面范围内有效）
let db = wx.cloud.database()
//关联集合
let admin = db.collection("users")
//使用查询条件
let _ = db.command

// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move: null,
    num: 1,
    test: {
      age: _.gte(19)
    }
  },
  start() {
    //创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性
    let a = wx.createAnimation()
    let b = a.translateX(200).step().translateY(100).step().export()
    //export 方法每次调用后会清掉之前的动画操作
    let c = a.translateY(0).step().translateX(0).step().export()
    this.setData({
      move: this.data.num % 2 == 0 ? c : b,
      num: this.data.num + 1
    })
  },
  yunlogin(event){
    // 使用云函数登录，获取用户openid
    // 需要在project.config.json配置云函数存放目录
    // console.log(event.target.dataset.test)
    wx.cloud.callFunction({
      name: "login",
      data: {
        a: event.target.dataset.test,
        b: 456
      }
    }).then(res => {
      console.log(res)
    })
  },

  yunget(){
     //使用云函数获取数据可避开权限问题，以及突破20条限制（100）
     wx.cloud.callFunction({
       name:"get"
     }).then(res => {
      console.log(res)

    })
  },

  downfile(){
    wx.showLoading({
      title: '下载中',
    })
    //云存储下载
    wx.cloud.downloadFile({
      fileID:"cloud://project-9gxw1jrn07a19fac.7072-project-9gxw1jrn07a19fac-1311831266/13-1.png"
    }).then(res=>{
      //保存文件到本地
      let save=wx.getFileSystemManager()//getFileSystemManager 任务管理器
      save.saveFile({//saveFile 移动临时文件
        tempFilePath: res.tempFilePath,
        success(){
           wx.hideLoading()
        }
      })
    })
  },

  upfile(){
    //选择文件
    wx.chooseImage({
      count: 1,
    }).then(res=>{
      console.log(res)
      let filename=res.tempFilePaths[0].substr(11)
      //文件上传并设置保存名
      wx.cloud.uploadFile({
        filePath:res.tempFilePaths[0],
        cloudPath:filename
      })
    })
  },

  delfile(){
    //云存储删除
    wx.cloud.deleteFile({
      fileList:[
        "cloud://project-9gxw1jrn07a19fac.7072-project-9gxw1jrn07a19fac-1311831266/13-1.png"
      ],
      success(){
        console.log("删除成功")
      }
    })
  },
  add() {
    //关联云环境（局部关联，仅当前函数范围有效）
    // wx.cloud.init({
    //   env: "project-9gxw1jrn07a19fac"
    // })
    //连接数据库(局部连接，，仅当前函数范围有效)
    // let db = wx.cloud.database()
    //关联集合
    // let admin = db.collection("users")

    //添加数据
    for (let i = 1; i < 25; i++) {
      admin.add({
        data: {
          name: "张三" + i,
          age: 17 + i
        }
      }).then(res => {
        console.log(res)
      })
    }
  },

  read() {
    // 读取数据（云函数可避免权限问题和条数问题）
    // 注意权限限制（只能读取当前用户添加的数据）   
    // 每次只能读取20条
    // where构建条件查询
    // orderBy("age","asc")按照age属性的升序排序  desc 降序
    // field 在结果中排出某些字段不显示
    // limit 限制条数（不能突破20）
    // skip 跳过前面n条数据
    admin.where({
      age:_.gte(18)
    }).orderBy("age","asc").field({
      _openid:false,
      _id:false,
    }).limit(5).skip(5).get().then(res => {
      console.log(res)
    })
  },
  
  del(){
    //删除数据
    //注意权限问题
    admin.where({
      age:_.gte(22)
    }).remove().then(res=>{
      console.log(res)
    })
  },

  change(){
    //修改数据
    admin.where({
      age:19
    }).update({
      data:{
        name:"李四"
      }
    }).then(res=>{
      console.log(res)
    })
  },
  onPageScroll(event) {
    console.log("监听页面滚动", event)
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