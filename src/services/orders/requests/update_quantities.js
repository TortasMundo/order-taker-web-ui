class Request {
  constructor(code, newJamon, newLomo, newEspecial, newRefrescos) {
    this.code = code
    this.newJamon = newJamon
    this.newLomo = newLomo
    this.newEspecial = newEspecial
    this.newRefrescos = newRefrescos
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/update_quantities'
  }
  get payload() {
    return {
      code: this.code,
      newJamon: this.newJamon,
      newLomo: this.newLomo,
      newEspecial: this.newEspecial,
      newRefrescos: this.newRefrescos,
    }
  }
}

module.exports = Request
