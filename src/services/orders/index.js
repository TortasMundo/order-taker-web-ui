import * as apiRequester from '../api_requester'
import PlaceOrderRequest from './requests/place_order'
import ListOrdersRequest from './requests/list_orders'
import UpdateOrderRequest from './requests/update'

export async function placeOrder(jamon, lomo, especial, refrescos, notes) {
  const request = new PlaceOrderRequest(jamon, lomo, especial, refrescos, notes)
  const response = await apiRequester.send(request)
  return response && response.data
}

export async function listOrders () {
  const request = new ListOrdersRequest.Builder().build()
  const response = await apiRequester.send(request)
  return response && response.data
}

export async function updateOrder(code, newJamon, newLomo, newEspecial, newRefrescos, newNotes) {
  const request = new UpdateOrderRequest(code, newJamon, newLomo, newEspecial, newRefrescos, newNotes)
  const response = await apiRequester.send(request)
  return response && response.data
}

