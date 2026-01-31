import { wretchInstance }                                                                                     from '../index';
import { CreateSalesGroupRequest, SalesGroup, UpdateSalesGroupNameRequest, UpdateSalesGroupTerritoryRequest } from './types';





export const salesGroupApi = {
    // Create a new sales group
    create: async (data: CreateSalesGroupRequest) => {
        return wretchInstance.post(data, '/sales-group').json<SalesGroup[]>();
    },
    
    // Update sales group name
    updateName: async (salesGroupId: string, data: UpdateSalesGroupNameRequest) => {
        return wretchInstance.patch({}, `/sales-group/update/name/${ salesGroupId }`).json<SalesGroup[]>();
    },
    
    // Update sales group territory
    updateTerritory: async (salesGroupId: string, data: UpdateSalesGroupTerritoryRequest) => {
        return wretchInstance.patch({}, `/sales-group/update/territory/${ salesGroupId }`).json<SalesGroup[]>();
    },
    
    // Delete sales group
    delete: async (salesGroupId: string) => {
        return wretchInstance.delete(`/sales-group/delete/${ salesGroupId }`).json<SalesGroup[]>();
    },
    
    // Get sales group profile with employees
    getProfile: async (salesGroupId: string) => {
        return wretchInstance.get(`/sales-group/profile/${ salesGroupId }`).json<SalesGroup>();
    },
    
    // Get all sales groups by organization
    getByOrganization: async () => {
        return wretchInstance.get('/sales-group/view/organization').json<SalesGroup[]>();
    },
};
