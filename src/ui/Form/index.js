import React from 'react'
import { styles } from './styles'

export const Form = (props) => {
  return ( <div>
    <form>
      <div>
        Jamón{' '}
        <select onChange={props.changeQuantity('jamon')} value={props.jamon}>
          {Array(21)
            .fill()
            .map((_, i) => (
              <option key={i}>{i}</option>
            ))}
        </select>
      </div>
      <div>
        Lomo{' '}
        <select onChange={props.changeQuantity('lomo')} value={props.lomo}>
          {Array(21)
            .fill()
            .map((_, i) => (
              <option key={i}>{i}</option>
            ))}
        </select>
      </div>
      <div>
        Especial{' '}
        <select onChange={props.changeQuantity('especial')} value={props.especial}>
          {Array(21)
            .fill()
            .map((_, i) => (
              <option key={i}>{i}</option>
            ))}
        </select>
      </div>
      <div>
        Refrescos{' '}
        <select onChange={props.changeQuantity('refrescos')} value={props.refrescos}>
          {Array(21)
            .fill()
            .map((_, i) => (
              <option key={i}>{i}</option>
            ))}
        </select>
      </div>
      <div>
        Notas <input className="notes" type="text" onChange={props.changeQuantity('notes')} value={props.notes}/>
      </div>
      <button type="button" onClick={props.place} disabled={props.sending}>Enviar</button>
      <div className="spinner" hidden={props.idle}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </form>
  </div>)
}