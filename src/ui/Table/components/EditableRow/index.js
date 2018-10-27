import React from 'react'
import { styles } from './styles'

export const EditableRow = (props) => {
  return (
    (<tr>
      <td>{props.index}</td>
      <td><input value={props.order.jamon_quantity} style={styles.quantity}/></td>
      <td><input value={props.order.lomo_quantity} /></td>
      <td><input value={props.order.especial_quantity} /></td>
      <td><input value={props.order.refrescos_quantity} /></td>
      <td>{props.order.status}</td>
      <td><input value={props.order.notes} /></td>
      <td><button >Actualizar</button></td>
    </tr>)
  )
}