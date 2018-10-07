import React, { Component } from 'react'
import './tacit-css.min.css'
import './App.css'
import * as orderService from './services/orders'

class App extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      jamon: '0',
      lomo: '0',
      especial: '0',
      refrescos: '0',
      notes: '',
    }
    this.state = this.initialState
  }

  changeOrder = item => event => {
    this.setState({ [item]: event.target.value })
  }

  place = async () => {
    const result = await orderService.placeOrder(
      this.state.jamon,
      this.state.lomo,
      this.state.especial,
      this.state.refrescos,
      this.state.notes,
    )
    debugger
    if (result.success) {
      this.setState({
        ...this.initialState
      })
      alert('La orden fue creada correctamente.')
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            Jamón{' '}
            <select onChange={this.changeOrder('jamon')}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Lomo{' '}
            <select onChange={this.changeOrder('lomo')}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Especial{' '}
            <select onChange={this.changeOrder('especial')}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Refrescos{' '}
            <select onChange={this.changeOrder('refrescos')}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Notas <input className="notes" type="text" onChange={this.changeOrder('notes')} />
          </div>
          <button type="button" onClick={this.place}>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App
