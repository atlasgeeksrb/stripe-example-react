import http from "./httpService";
import config from "../config.json";

const paymentApiRouteBase = config.paymentApiRouteBase;

export async function initiatePayment(amount, items) {
    const data = {
        amount: amount,
        items: items
    }
    let response = await http.post(`${paymentApiRouteBase}initiatePayment`, data);
    return response;
}

export async function getPaymentDetails(id) {
  let response = await http.get(`${paymentApiRouteBase}${id}`);
  return response;
}
