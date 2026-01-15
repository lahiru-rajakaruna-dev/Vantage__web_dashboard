import {User}                                from "@supabase/supabase-js";
import {Accessor, createContext, useContext} from "solid-js";

export const CNTXAuth = createContext<{
    isAuthed: Accessor<boolean>,
    isRegistered: Accessor<boolean>,
    userProfile: Accessor<User | undefined>
}>({
       isAuthed    : () => false,
       isRegistered: () => false,
       userProfile : () =>
           undefined
   })

export function useCNTXAuth() {
    const cntx = useContext(CNTXAuth)

    if (!cntx) {
        throw new Error('[useCNTXAuth] [-] Auth context provider not found')
    }

    return cntx
}
