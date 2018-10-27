import React, { Component } from 'react'
import { styles } from './styles'

class EditableRow extends Component {
  render() {
    return (
      (<tr>
        <td>{this.props.index}</td>
        <td><input value={this.props.order.jamon_quantity} style={styles.quantity}/></td>
        <td><input value={this.props.order.lomo_quantity} style={styles.quantity}/></td>
        <td><input value={this.props.order.especial_quantity} style={styles.quantity}/></td>
        <td><input value={this.props.order.refrescos_quantity} style={styles.quantity}/></td>
        <td>{this.props.order.status}</td>
        <td><input value={this.props.order.notes} style={styles.notes}/></td>
        <td><button >Actualizar</button></td>
      </tr>)
    )
  }
}

export default EditableRow