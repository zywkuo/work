//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    top5:[{
      top5Name:"江苏",
      top5Num:87
    },
    {
      top5Name:"广东",
      top5Num:83
    },
    {
      top5Name:"安徽",
      top5Num:77
    },{
      top5Name:"浙江",
      top5Num:74
    },
    {
      top5Name:"青海",
      top5Num:70
    }]
  },
  iconSearch:function(){
      wx.navigateTo({
        url:"../detail/detail"
      })
  },
  onShareAppMessage:function() {
    return {
      title: '旅游评价查询',
      desc: '酷旅数据平台提供数据查询',
      path: '/../app'
    }
  }
})
