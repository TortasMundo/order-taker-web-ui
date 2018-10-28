import React, { Component } from 'react'
import { styles } from './styles'
import { QuantityOptions } from '../../../components/QuantityOptions'
import * as orderService from '../../../../services/orders'

class EditableRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newJamon: props.order.jamon_quantity,
      newLomo: props.order.lomo_quantity,
      newEspecial: props.order.especial_quantity,
      newRefrescos: props.order.refrescos_quantity,
      newNotes: this.props.order.notes,
    }
  }

  update = async () => {
    const result = await orderService.updateOrder(
      this.props.order.code,
      this.state.newJamon,
      this.state.newLomo,
      this.state.newEspecial,
      this.state.newRefrescos,
      this.state.newNotes)
    if (result.success) {
      alert('La orden fue actualizada correctamente.')
    } else {
      alert(result.error)
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
        <td><input onChange={this.changeQuantity('newNotes')} value={this.state.newNotes} style={styles.notes}/></td>
        <td>
          <button type="button" onClick={this.update}>Actualizar</button>
        </td>
      </tr>)
    )
  }
}

export default EditableRow