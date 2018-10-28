import React from 'react'
import EditableRow from './components/EditableRow'
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
        <th></th>
      </tr>
      </thead>
      <tbody>
      {props.orders.map((order, index) => {
        if (order.status === 'ORDERED') {
         return <EditableRow key={order.code} order={order} index={props.orders.length - index} getOrders={props.getOrders}/>
        }
        return (<tr key={order.code}>
          <td>{props.orders.length - index}</td>
          <td>{order.jamon_quantity}</td>
          <td>{order.lomo_quantity}</td>
          <td>{order.especial_quantity}</td>
          <td>{order.refrescos_quantity}</td>
          <td>{order.notes}</td>
          <td>{}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </div>)
}