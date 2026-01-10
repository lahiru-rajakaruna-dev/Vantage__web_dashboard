import {QueryClientProvider} from "@tanstack/solid-query";
import {Component, createEffect, createSignal, Show,} from 'solid-js';
import UserSignup from "./authentication";
import OrganizationRegistration from './registration';
import {supabase} from "./supabase";
import {QueryClientInstance} from "./tanstack_query";

const App: Component = () => {
    const [getAuthState, setAuthState] = createSignal(false)

    createEffect(async () => {
        supabase.auth.onAuthStateChange((e, session) => {
            if (!session) {
                setAuthState(false)
            } else {
                setAuthState(true)
            }
        })
    })

    return (
        <QueryClientProvider client={QueryClientInstance}>
            <div class={'w-full h-screen min-h-screen mx-auto bg-gradient-to-b from-v-bg to-v-accent'}>
                <Show when={getAuthState()}
                      fallback={
                          <UserSignup/>
                      }>
                    <Show when={true}>
                        <OrganizationRegistration/>
                    </Show>
                </Show>
            </div>
        </QueryClientProvider>
    )

};

export default App;
