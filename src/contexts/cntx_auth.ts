import {User}                                from "@supabase/supabase-js";
import {Accessor, createContext, useContext} from "solid-js";

export const CNTXAuth = createContext<{
    getIsAuthed: Accessor<boolean>,
    getIsRegistered: Accessor<boolean>,
    getSupabaseUserProfile: Accessor<User | undefined>
}>({
       getIsAuthed           : () => false,
       getIsRegistered       : () => false,
       getSupabaseUserProfile: () =>
           undefined
   })

export function useCNTXAuth() {
    const cntx = useContext(CNTXAuth)

    if (!cntx) {
        throw new Error('[useCNTXAuth] [-] Auth context provider not found')
    }

    return cntx
}
