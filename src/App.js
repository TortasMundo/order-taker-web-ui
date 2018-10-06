import React, { Component } from 'react'
import './tacit-css.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
          Jamón{' '}
          <select>
            {
              Array(21).fill().map((_, i) => <option>{i}</option>)
            }
          </select>
          </div>
          <div>
            Lomo{' '}
            <select>
              {
                Array(21).fill().map((_, i) => <option>{i}</option>)
              }
            </select>
          </div>
          <div>
            Especial{' '}
            <select>
              {
                Array(21).fill().map((_, i) => <option>{i}</option>)
              }
            </select>
          </div>
          <div>
            Refrescos{' '}
            <select>
              {
                Array(21).fill().map((_, i) => <option>{i}</option>)
              }
            </select>
          </div>
          <div>
            Notas {' '}
            <input className='notes' type='text' />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}

export default App
