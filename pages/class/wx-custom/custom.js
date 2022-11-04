Component({
  properties: {
    innerText: String,
    style: String
  },
  data: {
    src: [],
    a: '',
    b: {}
  },
  externalClasses: ['large-text'],
  options: {
    virtualHost: true
  },
  observers: {
    'a'(aa, bb) {
      console.log(aa, bb, 'a, b', arguments)
    },
    'b.ki'(ki) {
      console.log(ki)
    }
  },
  // 生命周期方法
  lifetimes: {
    created() {
      console.log('created hhh')
    },
    attached() {
      this.setUpdatePerformanceListener({
        withDataPaths: true
      }, (res) => {
        console.log(res, '测试setData更新的性能')
      })
      console.log('attached')
    },
    detached() {
      console.log('detached')
    },
    ready() {
      console.log('ready')
    }
  },
  pageLifetimes: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    },
    resize() {
      console.log('resize')
    }
  },
  methods: {
    sysFileTest () {
      const fs = wx.getFileSystemManager()
      const that = this
      wx.chooseImage({
        count: (100),
        success (res) {
          console.log(res, 'choose image')
          const src = []
          res.tempFilePaths.forEach(file => {
            const _that = that
            // fs.saveFile({
            //   tempFilePath: file,
            //   success (res) {
            //     console.log(res, 'res')
            //     src.push(res.savedFilePath)
            //     _that.setData({
            //       src: src
            //     })
            //   }
            // })
            try {
              console.log(fs.copyFileSync(file, 'FDSA'))
            } catch (e) {
              console.log(e)
            }
            
            fs.access({
              path: file,
              success (res) {
                console.log(res, '是否存在')
              },
              fail (res) {
                console.log(res, '不存在')
              }
            })
          })
        }
      })
    },
    getDataListenerOnParent(e, o) {
      console.log(e, o)
    },
    getDataListenerOnChild(e, o) {
      console.log(e, o)
    },
    onTap(e, o) {
      console.log(e, o)
      this.triggerEvent('getdata', {
        ji: 'ji'
      }, {})
      this.setData({
        a: Date.now() + 'a',
        'b.ci': {
          ki: 'ki'
        }
      })
      this.setData({
        a: Date.now() + 'a',
        'b.ci': {
          ki: 'ki'
        }
      })
    },
  }
})