//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    array:['北京市','天津市','上海市','重庆市','河北省','山西省','陕西省','山东省','河南省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','江西省','福建省','湖北省','湖南省','四川省','贵州省','云南省','广东省','海南省','甘肃省','青海省','台湾省','内蒙古自治区','新疆维吾尔自治区','西藏自治区','广西壮族自治区','宁夏回族自治区','香港特别行政区','澳门特别行政区'
    ],
    index: 0
  },
  //选择城市改变函数
  change:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  //点击跳转页面函数
  click:function(e){
    var btnid = e.currentTarget.dataset.btnid;
    wx.navigateTo({
      url: '../detail/detail?id='+btnid
    })
  }
})

