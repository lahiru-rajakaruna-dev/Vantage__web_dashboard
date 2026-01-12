import {User} from "@supabase/supabase-js";
import {QueryClientProvider} from "@tanstack/solid-query";
import {
    Component,
    createContext,
    createEffect,
    createResource,
    createSignal,
    onCleanup,
    onMount,
    Show,
    useContext,
} from 'solid-js';
import UserSignup from "./authentication";
import OrganizationRegistration from './registration';
import {supabase} from "./supabase";
import {checkUserSession, fetchSupabaseUserProfile} from "./supabase/authentication";
import {QueryClientInstance} from "./tanstack_query";
import {api} from "./wretch";

const CNTXAuth = createContext({
    isAuthed    : false,
    isRegistered: false
})

const Screen: Component = () => {
    const [getAuthState, setAuthState] = createSignal(false)
    const [getIsLoading, setIsLoading] = createSignal(true)
    const [getSupabaseUser, setSupabaseUser] = createSignal<User>()

    onMount(async () => {

        const session = await checkUserSession()

        if (!session) {
            setAuthState(false)
        } else {
            const supabaseUserProfile = await fetchSupabaseUserProfile()
            setSupabaseUser(supabaseUserProfile)
            setAuthState(true)
        }

        supabase.auth.onAuthStateChange((e, session) => {
            if (!session) {
                setAuthState(false)
            } else {
                setAuthState(true)
            }
        })

        setIsLoading(false)

        // return data.subscription.unsubscribe()
    })


    return (
        <CNTXAuth.Provider value={{
            isAuthed    : getAuthState(),
            isRegistered: false
        }}>
            <Show
                when={!getIsLoading()}
                fallback={
                    <div class={'absolute inset-0 w-full h-full text-3xl font-bold'}>
                        <div class={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold"}>
                            Loading...
                        </div>
                    </div>}>
                <App/>
            </Show>
        </CNTXAuth.Provider>
    )

}

export default Screen;


function App() {
    const {
              isAuthed,
              isRegistered
          } = useContext(CNTXAuth)

    return (
        <QueryClientProvider client={QueryClientInstance}>
            <div class={'w-full h-screen min-h-screen mx-auto bg-gradient-to-b from-v-bg to-v-accent'}>
                <Show when={!isAuthed}
                      fallback={
                          <UserSignup/>
                      }>
                    <Show when={!isRegistered}>
                        <OrganizationRegistration/>
                    </Show>
                </Show>
            </div>
        </QueryClientProvider>
    )
}