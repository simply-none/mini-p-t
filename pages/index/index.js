// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    menuId: 1,
    indicatorDots: true,
    imageWidth: "100%",
    imageHeight: "100px",
    autoplay: true,
    interval: 10000,
    imgUrls: [
      {
        iTargetType: '今日推荐',
        sLink: '1000',
        sPicLink: 'https://img20.360buyimg.com/babel/s1180x940_jfs/t1/115597/2/31296/86359/635b5f69Ed326c6de/4c0297fa5e361d56.png.avif'
      },
      {
        iTargetType: '今日推荐2',
        sLink: '1001',
        sPicLink: 'https://imgcps.jd.com/ling4/100038004353/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa64/d664b576/cr/s/q.jpg'
      },
      {
        iTargetType: '今日推荐3',
        sLink: '1002',
        sPicLink: 'https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100004050617/FocusFullshop/CkRqZnMvdDEvMTE2NTc1LzIyLzI5NTY0LzcwNzI0NC82MzRiMDkxZEU4NWU3OTc5YS8xZTUxMzNlM2NiMWJlZWMwLnBuZxIJMy10eV8wXzU0MAI47ot6QhcKE-asp-S5kELnlLXliqjniZnliLcQAUIQCgznm5vmg6Dni6zkuqsQAkIQCgznq4vljbPmiqLotK0QBkIKCgbkvJjotKgQB1i57dLF9AI/cr/s/q.jpg'
      }
    ],
    tabbar: [
      {
        text: '今日推荐'
      },
      {
        text: '时尚美妆'
      },
      {
        text: '数码电器'
      },
      {
        text: '个护清洁'
      },
      {
        text: '时尚美妆'
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  clickCurTab (e) {
    this.setData({
      menuId: Number(e.currentTarget.id)
    })
  },
  bigImageClick (e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.gid,
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
