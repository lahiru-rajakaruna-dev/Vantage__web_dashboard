import {User}                                                                        from "@supabase/supabase-js";
import {createSignal, onMount, Show,}                                                from 'solid-js';
import App                                                                           from "./App";
import LoadingScreen                                                                 from "./common_components/LoadingScreen";
import {CNTXAuth}                                                                    from "./contexts/cntx_auth";
import {attachCallbackToAuthStateChange, checkUserSession, fetchSupabaseUserProfile} from "./supabase/authentication";

export default function Screen() {
    const [getIsAuthenticated, setIsAuthenticated]         = createSignal(false)
    const [getIsLoading, setIsLoading]                     = createSignal(true)
    const [getSupabaseUserProfile, setSupabaseUserProfile] = createSignal<User>()

    onMount(async () => {
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


        attachCallbackToAuthStateChange((e, session) => {
            if (import.meta.env.DEV) {
                console.debug("Screen: ", e, session)
            }

            if (!session) {
                setIsAuthenticated(false)
            } else {
                setIsAuthenticated(true)
            }
        })

        setIsLoading(false)

        // return data.subscription.unsubscribe()
    })


    return (
        <CNTXAuth.Provider value={{
            isAuthed    : getIsAuthenticated,
            isRegistered: () => false,
            userProfile : getSupabaseUserProfile,
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

