import { wretchInstance }                                                         from '../index';
import { CreateItemRequest, Item, UpdateItemNameRequest, UpdateItemStockRequest } from './types';





export const itemApi = {
    // Create a new item
    create: async (data: CreateItemRequest) => {
        return wretchInstance.post(data, '/item',).json<Item[]>;
    },
    
    // Update item name
    updateName: async (itemId: string, data: UpdateItemNameRequest) => {
        return wretchInstance.patch(data, `/item/update/name/${ itemId }`).json<Item[]>();
    },
    
    // Update item stock
    updateStock: async (itemId: string, data: UpdateItemStockRequest) => {
        return wretchInstance.patch(data, `/item/update/stock/${ itemId }`).json<Item[]>();
    },
    
    // Delete single item
    delete: async (itemId: string) => {
        return wretchInstance.delete(`/item/delete/${ itemId }`).json<Item[]>();
    },
    
    // Delete multiple items
    deleteBatch: async (itemIds: string[]) => {
        return wretchInstance.delete(`/item/delete-batch?item_ids=${ itemIds.join(',') }`).json<Item[]>();
    },
    
    // Get item profile
    getProfile: async (itemId: string) => {
        return wretchInstance.get(`/item/profile/${ itemId }`).json<Item>();
    },
    
    // Get all items by organization
    getByOrganization: async () => {
        return wretchInstance.get('/item/view/organization').json<Item[]>();
    },
};