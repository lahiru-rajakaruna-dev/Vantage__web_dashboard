import { wretchInstance }                                                              from '../index';
import { ClientPayment, CreateClientPaymentRequest, UpdateClientPaymentAmountRequest } from './types';





export const clientPaymentApi = {
    // Create a new client payment
    create: async (data: CreateClientPaymentRequest) => {
        return wretchInstance.post(data, '/client-payment').json<ClientPayment[]>();
    },
    
    // Update client payment amount
    updateAmount: async (clientPaymentId: string, data: UpdateClientPaymentAmountRequest) => {
        return wretchInstance.patch(`/client-payment/update/amount/${ clientPaymentId }`).json<ClientPayment[]>();
    },
    
    // Set payment status to pending
    setStatusPending: async (clientPaymentId: string) => {
        return wretchInstance.patch(
            {},
            `/client-payment/update/status/pending/${ clientPaymentId }`
        ).json<ClientPayment[]>();
    },
    
    // Set payment status to paid
    setStatusPaid: async (clientPaymentId: string) => {
        return wretchInstance.patch(
            {},
            `/client-payment/update/status/paid/${ clientPaymentId }`
        ).json<ClientPayment[]>();
    },
    
    // Set payment status to verified
    setStatusVerified: async (clientPaymentId: string) => {
        return wretchInstance.patch(
            {},
            `/client-payment/update/status/verified/${ clientPaymentId }`
        ).json<ClientPayment[]>();
    },
    
    // Set payment status to refunded
    setStatusRefunded: async (clientPaymentId: string) => {
        return wretchInstance.patch(
            {},
            `/client-payment/update/status/refunded/${ clientPaymentId }`
        ).json<ClientPayment[]>();
    },
    
    // Get client payment profile
    getProfile: async (clientPaymentId: string) => {
        return wretchInstance.get(`/client-payment/profile/${ clientPaymentId }`).json<ClientPayment>();
    },
    
    // Get all payments by client
    getByClient: async (clientId: string) => {
        return wretchInstance.get(`/client-payment/view/client/${ clientId }`).json<ClientPayment>();
    },
};