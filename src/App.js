import React, { Component } from 'react'
import './tacit-css.min.css'
import * as orderService from './services/orders'
import Form from './ui/Form'
import { Table } from './ui/Table'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

  async componentDidMount() {
    await this.getOrders()
  }

  getOrders = async () => {
    const response = await orderService.listOrders()
    if (response && response.data && response.data.length) {
      response.data.reverse()
      this.setState({ orders: response.data })
    }
  }

  render() {
    return (
      <div>
        <Form getOrders={this.getOrders}/>
        <Table orders={this.state.orders}/>
      </div>
    )
  }
}

export default App
