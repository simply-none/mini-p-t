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
    imgUrls: [{
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
    tabbar: [{
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
    tabbar1: [{
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
    scrollEnd: false,
    count: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  bindgetphonenumber(e) {
    wx.showModal({
      title: '打开弹窗',
      content: '哈哈哈'
    })
    console.log(e, 'phone')
  },
  getUser() {
    wx.scanCode({
      fail(e) {
        console.log(e, 'err')
      },
      success(e) {
        console.log(e, '获取')
      }
    })
  },
  // 下拉时
  bindrefresherpulling(e) {
    console.log(e.type, 1)
  },
  // 下拉后展开自定义刷新控件时
  bindrefresherrefresh(e) {
    console.log(e.type, 2)
  },
  // 下拉后展开自定义刷新控件后，让其复位（关闭该控件）
  bindrefresherrestore(e) {
    console.log(e.type, 3)
  },
  // 下拉时，关闭该控件
  bindrefresherabort(e) {
    console.log(e.type, 4)
  },
  getNextData(e) {
    console.log(this.data.count)
    if (this.data.count === 5) {
      this.setData({
        scrollEnd: true
      })
      return false
    }
    this.setData({
      count: this.data.count + 1,
      tabbar: this.data.tabbar.concat(this.data.tabbar1)
    })
  },
  clickCurTab(e) {
    this.setData({
      menuId: Number(e.currentTarget.id)
    })
  },
  bigImageClick(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.gid,
    })
  }
})