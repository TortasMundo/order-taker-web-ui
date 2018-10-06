module.exports = {
  get API_URL() {
    return window.location.href === 'https://tortasmundo-order-taker-web-ui.herokuapp.com/'
      ? `https://tortasmundo-order-taker-api.herokuapp.com` : 'http://localhost:4001'
  },
  mocks: {
    store_location: {
      latitude: '28.1867348',
      longitude: '-105.4608849'
    }
  }
}
