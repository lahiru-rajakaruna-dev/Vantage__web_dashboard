import { User }                                                                        from '@supabase/supabase-js';
import { useQuery }                                                                    from '@tanstack/solid-query';
import { createEffect, createSignal, onMount, Show, }                                  from 'solid-js';
import App                                                                             from './App';
import LoadingScreen
                                                                                       from './common_components/LoadingScreen';
import { CNTXAuth }                                                                    from './contexts/cntx_auth';
import { attachCallbackToAuthStateChange, checkUserSession, fetchSupabaseUserProfile } from './supabase/authentication';
import api                                                                             from './wretch/api';



export default function Screen() {
    const [ getIsAuthenticated, setIsAuthenticated ]         = createSignal(false)
    const [ getIsLoading, setIsLoading ]                     = createSignal(true)
    const [ getSupabaseUserProfile, setSupabaseUserProfile ] = createSignal<User>()
    const queryIsRegistered                                  = useQuery(() => {
        return {
            queryKey: [ 'is_registered', localStorage.getItem('user_id') ],
            async queryFn() {
                try {
                    setIsLoading(true)
                    const response = await api.organization.isRegistered()
                    return response.isRegistered
                } finally {
                    setIsLoading(false)
                }
            },
            retry      : 3,
            initialData: () => {
                return false
            },
            enabled    : getSupabaseUserProfile() ? true : false
        }
    })
    
    createEffect(() => {
        if (getSupabaseUserProfile()) {
            queryIsRegistered.refetch()
        }
    })
    
    onMount(async () => {
        try {
            const session = await checkUserSession()
            
            if (import.meta.env.DEV) {
                console.debug('Screen: ', session)
            }
            
            if (!session) {
                setIsAuthenticated(false)
            } else {
                const supabaseUserProfile = await fetchSupabaseUserProfile()
                setSupabaseUserProfile(supabaseUserProfile)
                setIsAuthenticated(true)
            }
            
            attachCallbackToAuthStateChange(async (e, supabaseSession) => {
                if (import.meta.env.DEV) {
                    console.debug('Screen: ', e, supabaseSession)
                }
                
                if (!supabaseSession) {
                    setIsAuthenticated(false)
                    return
                }
                
                setIsAuthenticated(true)
            })
        } catch (e) {
            console.error('Authentication Failed...')
            if (import.meta.env.DEV) {
                console.debug(e)
            }
        }
        // return data.subscription.unsubscribe()
    })
    
    createEffect(async () => {
        const user = getSupabaseUserProfile()
        
        if (!user) {
            await window.cookieStore.delete('user_id')
            return
        }
        
        await window.cookieStore.set('user_id', user.id)
    })
    
    return (<CNTXAuth.Provider
            value={ {
                getIsAuthed           : getIsAuthenticated,
                getIsRegistered       : () => queryIsRegistered.data,
                getSupabaseUserProfile: getSupabaseUserProfile,
            } }
    >
        <Show
                when={ !getIsLoading() }
                // when={true} // FOR DEVELOPMENT
                fallback={ <LoadingScreen/> }
        >
            <App/>
        </Show>
    </CNTXAuth.Provider>)
    
}

