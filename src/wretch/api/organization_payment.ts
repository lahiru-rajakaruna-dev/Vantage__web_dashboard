import { wretchInstance }                                                                                from '../index';
import { CreateOrganizationPaymentRequest, OrganizationPayment, UpdateOrganizationPaymentAmountRequest } from './types';





export const organizationPaymentApi = {
    // Create a new organization payment
    create: async (data: CreateOrganizationPaymentRequest) => {
        return wretchInstance.post(data, '/organization-payment').json<OrganizationPayment[]>();
    },
    
    // Update organization payment amount
    updateAmount: async (paymentId: string, data: UpdateOrganizationPaymentAmountRequest) => {
        return wretchInstance.patch(`/organization-payment/update/amount/${ paymentId }`).json<OrganizationPayment[]>();
    },
    
    // Set payment status to pending
    setStatusPending: async (paymentId: string) => {
        return wretchInstance.patch(
            {},
            `/organization-payment/update/status/pending/${ paymentId }`
        ).json<OrganizationPayment[]>();
    },
    
    // Set payment status to paid
    setStatusPaid: async (paymentId: string) => {
        return wretchInstance.patch(
            {},
            `/organization-payment/update/status/paid/${ paymentId }`
        ).json<OrganizationPayment[]>();
    },
    
    // Set payment status to verified
    setStatusVerified: async (paymentId: string) => {
        return wretchInstance.patch(
            {},
            `/organization-payment/update/status/verified/${ paymentId }`
        ).json<OrganizationPayment[]>();
    },
    
    // Set payment status to refunded
    setStatusRefunded: async (paymentId: string) => {
        return wretchInstance.patch(
            {},
            `/organization-payment/update/status/refunded/${ paymentId }`
        ).json<OrganizationPayment[]>();
    },
    
    // Get organization payment profile
    getProfile: async (paymentId: string) => {
        return wretchInstance.get(`/organization-payment/profile/${ paymentId }`).json<OrganizationPayment>();
    },
    
    // Get all payments by organization
    getByOrganization: async () => {
        return wretchInstance.get('/organization-payment/view/organization').json<OrganizationPayment[]>();
    },
};