import wretch from 'wretch'





export const wretchInstance = wretch(import.meta.env.VITE_API_URL || 'http://localhost:3000', {
    cache      : 'no-cache',
    credentials: 'include',
    priority   : 'high',
    mode       : 'cors',
})