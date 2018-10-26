import React, { Component } from 'react'
import './tacit-css.min.css'
import './App.css'
import * as orderService from './services/orders'
import { Form } from './ui/Form'

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
    this.state = this.initialState
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
      <Form changeQuantity={this.changeQuantity} place={this.place} {...this.state} />
    )
  }
}

export default App
