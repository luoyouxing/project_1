// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ["123", "456", "789"],
    video: null
  },
  dian() {
    //ajax请求
    // wx.request({
    //   url: 'http://localhost:3004/posts',
    //   data:{
    //     title:"json-server",
    //   },
    //   method: "GET",
    //   success(res) {
    //     console.log(res)
    //   },
    // })

    //下载文件
    //npm run mock 打开，里面不需要引号"mock": "json-server db.json -s . -p 3004"
    // wx.downloadFile({
    //   url: 'http://localhost:3004/123.docx',
    //   success(res){
    //     console.log(res)
    //     //打开文件查看
    //     wx.openDocument({
    //       filePath: res.tempFilePath,
    //     })
    //   }
    // })

    //设置或存储本地存储数据
    // wx.setStorage({
    //   key:"shop",
    //   data:this.data.arr
    // }).then(res=>{
    //   console.log("添加成功")
    // })

    //获取本地存储数据
    // wx.getStorage({
    //   key:"shop"
    // }).then(res=>{
    //   console.log(res.data[0])
    // })

    //点击获取位置
    // wx.getLocation({}).then(res=>{
    //   console.log(res)
    // })

    //在地图上选择位置
    // wx.chooseLocation({}).then(res=>{
    //   console.log(res)
    // })

    //地图上查看位置
    // wx.getStorage({
    //   key: "shop",
    // }).then(res => {
    //   console.log(res)
    //   wx.chooseLocation({
    //     latitude: res.data.latitude,
    //     longitude:res.data.longitude,
    //     success(add){
    //       console.log(add)
    //     }
    //   })
    // })

    //选择图片
    // wx.chooseImage({
    //   count: 1,
    // }).then(add => {
    //   console.log(add.tempFilePaths[0])

    //   // 保存本地相册
    //   wx.saveImageToPhotosAlbum({
    //     filePath: add.tempFilePaths[0]
    //   }).then(res => {
    //     console.log(res)
    //   })
    // })

    //选择音频
    // wx.chooseVideo().then(res => {
    //   console.log(res.tempFilePath)
    //   this.setData({
    //     video: res.tempFilePath
    //   })
    // })

    //开始录音
    // let n=wx.getRecorderManager()
    // n.start()
    //结束录音
    // setTimeout(()=>{
    //   n.stop()
    // },5000)

    //调用camera相机标记，拍照保存
    // let n=wx.createCameraContext()
    // n.takePhoto({
    //   success(res){
    //     wx.saveImageToPhotosAlbum({
    //       filePath: res.tempImagePath,
    //     }).then(val=>{
    //       console.log(val)
    //     })
    //   }
    // })

    //获取收获地址（没有地址，则自动跳转新增编辑）
    // wx.chooseAddress({
    //   success(res){
    //     console.log(res)
    //   }
    // })

    //选择联系人
    // wx.chooseContact({
    //   success(res) {
    //     //拨打电话
    //     wx.makePhoneCall({
    //       phoneNumber: res.phoneNumber
    //     })
    //   }
    // })
  },
  // play(){
  //   //播放音频（通过id名关联video标记）
  //   let m=wx.createVideoContext('asd')
  //   m.play()
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // //自动获取位置信息
    // wx.getLocation({}).then(res => {
    //   // console.log(res)
    //   wx.setStorage({
    //     key: "shop",
    //     data: {latitude:res.latitude, longitude:res.longitude}
    //   }).then(res => {
    //     console.log("存储成功")
    //   })
    // })
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