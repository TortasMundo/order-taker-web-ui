import React, { Component } from 'react'
import './tacit-css.min.css'
import * as orderService from './services/orders'
import { Form } from './ui/Form'
import { Table } from './ui/Table'

class App extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      jamon: '0',
      lomo: '0',
      especial: '0',
      refrescos: '0',
      notes: '',
      idle: true,
    }
    this.state = {
      ...this.initialState,
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

  changeQuantity = item => event => {
    this.setState({ [item]: event.target.value })
  }

  place = async () => {
    this.setState({ idle: false })
    const result = await orderService.placeOrder(
      this.state.jamon,
      this.state.lomo,
      this.state.especial,
      this.state.refrescos,
      this.state.notes,
    )
    await this.getOrders()
    this.setState({ idle: true })
    if (result.success) {
      this.setState({
        ...this.initialState,
      })
      alert('La orden fue creada correctamente.')
    } else {
      alert(result.error)
    }
  }

  render() {
    return (
      <div>
        <Form changeQuantity={this.changeQuantity} place={this.place} {...this.state} />
        <Table orders={this.state.orders}/>
      </div>
    )
  }
}

export default App
