import {QueryClientProvider}    from "@tanstack/solid-query";
import {Show,}                  from "solid-js";
import {Toaster}                from "solid-toast";
import UserSignup               from "./authentication";
import {useCNTXAuth}            from "./contexts/cntx_auth";
import OrganizationRegistration from "./registration";
import {QueryClientInstance}    from "./tanstack_query";

export default function App() {
    const {
              getIsAuthed,
              getIsRegistered
          } = useCNTXAuth()

    return (
        <QueryClientProvider client={QueryClientInstance}>
            <div class={'w-full h-screen min-h-screen mx-auto bg-gradient-to-b from-v-bg to-v-accent'}>
                <Toaster/>
                <Show when={getIsAuthed()}
                      fallback={
                          <UserSignup/>
                      }>
                    <Show
                        when={getIsRegistered()}
                        fallback={
                            <OrganizationRegistration/>
                        }>
                        <div>
                            DASHBOARD
                        </div>
                    </Show>
                </Show>
            </div>
        </QueryClientProvider>
    )
}