class Request {
  constructor(code, newJamon, newLomo, newEspecial, newRefrescos, newNotes) {
    this.code = code
    this.newJamon = newJamon
    this.newLomo = newLomo
    this.newEspecial = newEspecial
    this.newRefrescos = newRefrescos
    this.newNotes = newNotes
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'orders/update'
  }
  get payload() {
    return {
      code: this.code,
      newJamon: this.newJamon,
      newLomo: this.newLomo,
      newEspecial: this.newEspecial,
      newRefrescos: this.newRefrescos,
      newNotes: this.newNotes,
    }
  }
}

module.exports = Request
