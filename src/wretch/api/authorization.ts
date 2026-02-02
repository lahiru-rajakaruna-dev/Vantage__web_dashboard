import { wretchInstance } from '../index';





export const authorizationApi = {
    isRegistered: async () => {
        return await wretchInstance.get('/organization/is_registered').json<{ isRegistered: boolean }>()
    }
}