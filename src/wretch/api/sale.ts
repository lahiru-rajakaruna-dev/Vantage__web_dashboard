import { wretchInstance }          from '../index';
import { CreateSaleRequest, Sale } from './types';





export const saleApi = {
    // Create a new sale
    create: async (data: CreateSaleRequest) => {
        return wretchInstance.post(data, '/sale').json<Sale[]>();
    },
    
    // Get sale profile
    getProfile: async (saleId: string) => {
        return wretchInstance.get(`/sale/profile/${ saleId }`).json<Sale[]>();
    },
    
    // Get all sales by organization
    getByOrganization: async () => {
        return wretchInstance.get('/sale/view/organization',).json<Sale[]>();
    },
    
    // Get sales by employee
    getByEmployee: async (employeeId: string) => {
        return wretchInstance.get(`/sale/view/employee/${ employeeId }`).json<Sale[]>();
    },
    
    // Get sales by item
    getByItem: async (itemId: string) => {
        return wretchInstance.get(`/sale/view/item/${ itemId }`).json<Sale[]>();
    },
    
    // Get sales by client
    getByClient: async (clientId: string) => {
        return wretchInstance.get(`/sale/view/client/${ clientId }`).json<Sale[]>();
    },
    
    // Get sales by date
    getByDate: async (date: number) => {
        return wretchInstance.get(`/sale/view/date/${ date }`).json<Sale[]>();
    },
    
    // Get sales within date range
    getByDateRange: async (dateStart: number, dateEnd: number) => {
        return wretchInstance.get(`/sale/view/date-range/${ dateStart }/${ dateEnd }`).json<Sale[]>();
    },
};