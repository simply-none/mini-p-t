Component({
  methods: {
    onTap (e,o) {
      console.log(e, o)
      this.triggerEvent('getdata', { ji: 'ji'}, {
        bubbles: true,
        composed: true
      })
    },
    getDataListenerOnChildRoot (e,o) {
      console.log(e, o)
    },
  }
})