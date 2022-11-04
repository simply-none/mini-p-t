var app = getApp()
Page({
  data: {
    list: [{
      "id": "101",
      "iSortOrder": "1",
      "title": "手机数码",
      "submit": [{
        "id": "121",
        "title": "小米手机"
      }, {
        "id": "122",
        "title": "华为手机"
      }, {
        "id": "208",
        "title": "魅族手机"
      }, {
        "id": "676",
        "title": "三星手机"
      }]
    }, {
      "id": "119",
      "iSortOrder": "4",
      "title": "家用电器",
      "submit": [{
        "id": "126",
        "title": "电水壶"
      }, {
        "id": "125",
        "title": "电饭煲"
      }, {
        "id": "125",
        "title": "电磁炉"
      }, {
        "id": "125",
        "title": "微波炉"
      }]
    }, {
      "id": "119",
      "iSortOrder": "4",
      "title": "运动户外",
      "submit": [{
        "id": "126",
        "title": "跑步鞋"
      }, {
        "id": "125",
        "title": "体育用品"
      }, {
        "id": "125",
        "title": "山地车"
      }, {
        "id": "125",
        "title": "跑步机"
      }]
    }, {
      "id": "119",
      "iSortOrder": "4",
      "title": "男女服饰",
      "submit": [{
        "id": "126",
        "title": "早春新品"
      }, {
        "id": "125",
        "title": "连衣裙"
      }, {
        "id": "125",
        "title": "衬衫"
      }, {
        "id": "125",
        "title": "牛仔裤"
      }, {
        "id": "125",
        "title": "卫衣"
      }, {
        "id": "125",
        "title": "针织衫"
      }]
    }, ]
  },
  // 按钮点击事件
  tapClick(e) {
    var p = e.currentTarget.id
    console.log('/pages/productlist/productlist?id=' + p);
    wx.navigateTo({
      url: '/pages/productlist/productlist?id=' + p
    })
  },
})