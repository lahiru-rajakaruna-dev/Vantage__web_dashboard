import { wretchInstance }                                                                                         from '../index';
import { Client, CreateClientRequest, UpdateClientNameRequest, UpdateClientNicRequest, UpdateClientPhoneRequest } from './types';





export const clientApi = {
    // Create a new client
    create: async (data: CreateClientRequest) => {
        return wretchInstance.post(data, '/client').json<Client[]>();
    },
    
    // Update client name
    updateName: async (clientId: string, data: UpdateClientNameRequest) => {
        return wretchInstance.patch(data, `/client/update/name/${ clientId }`).json<Client[]>();
    },
    
    // Update client NIC
    updateNic: async (clientId: string, data: UpdateClientNicRequest) => {
        return wretchInstance.patch(data, `/client/update/nic/${ clientId }`).json<Client[]>();
    },
    
    // Update client phone
    updatePhone: async (clientId: string, data: UpdateClientPhoneRequest) => {
        return wretchInstance.patch(data, `/client/update/phone/${ clientId }`).json<Client[]>();
    },
    
    // Set client status to active
    setStatusActive: async (clientId: string) => {
        return wretchInstance.patch({}, `/client/update/status/active/${ clientId }`).json<Client[]>();
    },
    
    // Set client status to deactivated
    setStatusDeactivated: async (clientId: string) => {
        return wretchInstance.patch({}, `/client/update/status/deactivated/${ clientId }`).json<Client[]>();
    },
    
    // Set client status to unverified
    setStatusUnverified: async (clientId: string) => {
        return wretchInstance.patch({}, `/client/update/status/unverified/${ clientId }`).json<Client[]>();
    },
    
    // Get client profile
    getProfile: async (clientId: string) => {
        return wretchInstance.get(`/client/profile/${ clientId }`).json<Client>();
    },
    
    // Get all clients by organization
    getByOrganization: async () => {
        return wretchInstance.get('/client/view/organization').json<Client>();
    },
};