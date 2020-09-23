const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/static/images/tabbar/home_icon.png",
        selectedIconPath: "/static/images/tabbar/home_icon_active.png",
        text: "设备管理"
      },
      {
        pagePath: "/pages/rules/rules",
        iconPath: "/static/images/tabbar/config_icon.png",
        selectedIconPath: "/static/images/tabbar/config_icon_active.png",
        text: "规则配置"
      },
      {
        pagePath: "/pages/maintain/maintain",
        iconPath: "/static/images/tabbar/setting_icon.png",
        selectedIconPath: "/static/images/tabbar/setting_icon_active.png",
        text: "设备维护"
      }
    ],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})