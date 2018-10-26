import React from 'react'
import { styles } from './styles'

export const Table = (props) => {
  return ( <div>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Jamon</th>
        <th>Lomo</th>
        <th>Especial</th>
        <th>Refrescos</th>
        <th>Notas</th>
      </tr>
      </thead>
      <tbody>
      {props.orders.map((order, index) => {
        return (<tr>
          <td>{props.orders.length - index}</td>
          <td>{order.jamon_quantity}</td>
          <td>{order.lomo_quantity}</td>
          <td>{order.especial_quantity}</td>
          <td>{order.refrescos_quantity}</td>
          <td>{order.notes}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </div>)
}