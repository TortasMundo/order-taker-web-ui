module.exports = {
  get API_URL() {
    if (window.location.href === 'https://tortasmundo-order-taker-web-ui.herokuapp.com/') {
      return `https://tortasmundo-order-taker-api.herokuapp.com`
    }
    if (window.location.href === 'http://tortasmundo-order-taker-web-ui-1588083847.us-east-2.elb.amazonaws.com/') {
      return 'http://tortasmundo-order-taker-api-560142853.us-east-2.elb.amazonaws.com'
    }
    return  'http://localhost:4001'
  },
  mocks: {
    store_location: {
      latitude: '28.1867348',
      longitude: '-105.4608849'
    }
  }
}
