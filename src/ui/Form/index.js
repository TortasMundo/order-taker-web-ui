import React, { Component } from 'react'
import { styles } from './styles'
import Radium from 'radium'
import App from '../../App'
import * as orderService from '../../services/orders'

class Form extends Component {
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

  place = async () => {
    this.setState({ idle: false })
    const result = await orderService.placeOrder(
      this.state.jamon,
      this.state.lomo,
      this.state.especial,
      this.state.refrescos,
      this.state.notes,
    )
    await this.props.getOrders()
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

  changeQuantity = item => event => {
    this.setState({ [item]: event.target.value })
  }

  render() {
    return (<div style={styles.container}>
      <form>
        <div>
          Jamón{' '}
          <select onChange={this.changeQuantity('jamon')} value={this.state.jamon}>
            {Array(21)
              .fill()
              .map((_, i) => (
                <option key={i}>{i}</option>
              ))}
          </select>
        </div>
        <div>
          Lomo{' '}
          <select onChange={this.changeQuantity('lomo')} value={this.state.lomo}>
            {Array(21)
              .fill()
              .map((_, i) => (
                <option key={i}>{i}</option>
              ))}
          </select>
        </div>
        <div>
          Especial{' '}
          <select onChange={this.changeQuantity('especial')} value={this.state.especial}>
            {Array(21)
              .fill()
              .map((_, i) => (
                <option key={i}>{i}</option>
              ))}
          </select>
        </div>
        <div>
          Refrescos{' '}
          <select onChange={this.changeQuantity('refrescos')} value={this.state.refrescos}>
            {Array(21)
              .fill()
              .map((_, i) => (
                <option key={i}>{i}</option>
              ))}
          </select>
        </div>
        <div>
          Notas <input style={styles.notes} type="text" onChange={this.changeQuantity('notes')} value={this.state.notes}/>
        </div>
        <button style={styles.button} type="button" onClick={this.place} disabled={this.state.idle === false}>Enviar
        </button>
      </form>
    </div>)
  }
}

export default Form