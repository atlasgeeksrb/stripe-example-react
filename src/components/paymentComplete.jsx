import { Component } from 'react';
import {getPaymentDetails} from '../services/stripePaymentService';
class PaymentComplete extends Component {
    state = {  
        paymentInfo: null,
    } 

    async componentDidMount() {
        const pmtId = new URLSearchParams(window.location.search).get(
            "payment_intent"
        );
        try {
            const deets = await getPaymentDetails(pmtId);
            this.setState({paymentInfo:deets.data});            
        } catch(ex) {
            console.log(ex);
        }
    }

    render() { 
        const {paymentInfo} = this.state;
        console.log(paymentInfo);
        const status = paymentInfo && paymentInfo.status ? `(${paymentInfo.status})` : "";
        return (
            `Your payment is complete! ${status}`
        );
    }
}
 
export default PaymentComplete;