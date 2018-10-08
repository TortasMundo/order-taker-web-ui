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
      sending: false
    }
    this.state = this.initialState
  }

  changeOrder = item => event => {
    this.setState({ [item]: event.target.value })
  }

  place = async () => {
    this.setState({sending: true})
    const result = await orderService.placeOrder(
      this.state.jamon,
      this.state.lomo,
      this.state.especial,
      this.state.refrescos,
      this.state.notes,
    )
    this.setState({sending: false})
    if (result.success) {
      this.setState({
        ...this.initialState
      })
      alert('La orden fue creada correctamente.')
    } else {
      alert(result.error)
    }
  }

  render() {
    return (
      <div>
        <form>
          <div>
            Jamón{' '}
            <select onChange={this.changeOrder('jamon')} value={this.state.jamon}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Lomo{' '}
            <select onChange={this.changeOrder('lomo')} value={this.state.lomo}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Especial{' '}
            <select onChange={this.changeOrder('especial')} value={this.state.especial}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Refrescos{' '}
            <select onChange={this.changeOrder('refrescos')} value={this.state.refrescos}>
              {Array(21)
                .fill()
                .map((_, i) => (
                  <option key={i}>{i}</option>
                ))}
            </select>
          </div>
          <div>
            Notas <input className="notes" type="text" onChange={this.changeOrder('notes')} value={this.state.notes}/>
          </div>
          <button type="button" onClick={this.place} disabled={this.state.sending}>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App
