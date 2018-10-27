import React, { Component } from 'react'
import { styles } from './styles'
import { QuantityOptions } from '../../../components/QuantityOptions'

class EditableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newJamon: props.order.jamon_quantity,
      newLomo: props.order.lomo_quantity,
      newEspecial: props.order.especial_quantity,
      newRefrescos: props.order.refrescos_quantity,
      notes: this.props.order.notes,
    }
  }

  changeQuantity = item => event => {
    this.setState({ [item]: event.target.value })
  }

  render() {
    return (
      (<tr>
        <td>{this.props.index}</td>
        <td><select onChange={this.changeQuantity('newJamon')} value={this.state.newJamon}>
          <QuantityOptions/>
        </select></td>
        <td><select onChange={this.changeQuantity('newLomo')} value={this.state.newLomo}>
          <QuantityOptions/>
        </select></td>
        <td><select onChange={this.changeQuantity('newEspecial')} value={this.state.newEspecial}>
          <QuantityOptions/>
        </select></td>
        <td><select onChange={this.changeQuantity('newRefrescos')} value={this.state.newRefrescos}>
          <QuantityOptions/>
        </select></td>
        <td><input value={this.state.notes} style={styles.notes}/></td>
        <td>
          <button>Actualizar</button>
        </td>
      </tr>)
    )
  }
}

export default EditableRow