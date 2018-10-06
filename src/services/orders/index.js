import * as apiRequester from '../api_requester'
import PlaceOrderRequest from './requests/place_order'

export async function placeOrder(jamon, lomo, especial, refrescos, notes) {
  const request = new PlaceOrderRequest(jamon, lomo, especial, refrescos, notes)
  const response = await apiRequester.send(request)
  return response && response.data
}
