import wretch from 'wretch'

export const api = wretch(import.meta.env.VITE_API_URL, {
    cache      : 'no-cache',
    credentials: 'include',
    priority   : 'high',
    mode       : 'cors',
})