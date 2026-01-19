import {User}                                                                        from "@supabase/supabase-js";
import {createEffect, createResource, createSignal, onMount, Show,}                  from 'solid-js';
import App                                                                           from "./App";
import LoadingScreen                                                                 from "./common_components/LoadingScreen";
import {CNTXAuth}                                                                    from "./contexts/cntx_auth";
import {attachCallbackToAuthStateChange, checkUserSession, fetchSupabaseUserProfile} from "./supabase/authentication";
import {api}                                                                         from "./wretch";

export default function Screen() {
    const [getIsAuthenticated, setIsAuthenticated]         = createSignal(false)
    const [getIsLoading, setIsLoading]                     = createSignal(true)
    const [getSupabaseUserProfile, setSupabaseUserProfile] = createSignal<User>()
    const [getIsRegistered, actions]                       = createResource(
        getIsAuthenticated, async (isAuthenticated) => {
            if (!isAuthenticated) {
                return false
            }

            const response = await api.get('/organization/is_registered')
                                      .json<{
                                          isRegistered: boolean
                                      }>()

            return response.isRegistered
        }, {
            initialValue: false,
        })

    onMount(async () => {
        try {
            const session = await checkUserSession()

            if (import.meta.env.DEV) {
                console.debug("Screen: ", session)
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
                    console.debug("Screen: ", e, supabaseSession)
                }

                if (!supabaseSession) {
                    setIsAuthenticated(false)
                    return
                }

                setIsAuthenticated(true)
            })
        } finally {
            setIsLoading(false)
        }
        // return data.subscription.unsubscribe()
    })

    createEffect(async () => {
        const user = getSupabaseUserProfile()

        if (!user) {
            await window.cookieStore.delete('user_id')
            return
        }

        await window.cookieStore.set("user_id", user.id)
    })


    return (
        <CNTXAuth.Provider value={{
            getIsAuthed           : getIsAuthenticated,
            getIsRegistered       : getIsRegistered,
            getSupabaseUserProfile: getSupabaseUserProfile,
        }}>
            <Show
                when={!getIsLoading()}
                fallback={
                    <LoadingScreen/>
                }>
                <App/>
            </Show>
        </CNTXAuth.Provider>
    )

}

