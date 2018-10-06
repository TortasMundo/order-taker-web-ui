class Request {
  constructor(jamon, lomo, especial, refrescos, notes) {
    this.jamon = jamon
    this.lomo = lomo
    this.especial = especial
    this.refrescos = refrescos
    this.notes = notes
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/place'
  }
  get payload() {
    return {
      jamon: this.jamon,
      lomo: this.lomo,
      especial: this.especial,
      refrescos: this.refrescos,
      customerLocation: {
        latitude: 27.691241,
        longitude: -105.1717484
      },
      notes: this.notes
    }
  }
}

module.exports = Request
