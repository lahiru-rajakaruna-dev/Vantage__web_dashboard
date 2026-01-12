import {supabase} from "./index";

export async function signupWithGoogle() {
    try {
        const response = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options : {
                redirectTo : "http://localhost:3000",
                queryParams: {
                    signedIn: "true"
                }
            }
        })

        if (import.meta.env.DEV) {
            console.debug(response)
        }

        return response.data.url
    } catch (e) {
        throw new Error('[-] Could not sign in with google...')
    }
}

export async function signupWithCredentials(email: string, password: string) {
    try {
        const response = await supabase.auth.signUp({
            email   : email,
            password: password,
        })

        if (import.meta.env.DEV) {
            console.debug(response)
        }

        if (!response.data.session) {
            throw new Error('[-] Session not found')
        }

        const sessionSetResponse = await supabase.auth.setSession(response.data.session)

        if (import.meta.env.DEV) {
            console.debug(sessionSetResponse)
        }

        return response.data.user
    } catch (e) {
        console.warn(e)
        throw new Error('[-] Could not sign up...')
    }
}

export async function checkUserSession() {
    const {
              data: session,
              error
          } = await supabase.auth.getSession()

    return session

}

export async function fetchSupabaseUserProfile() {
    const supabaseUserResponse = await supabase.auth.getUser()

    if (!supabaseUserResponse.data || !supabaseUserResponse.data.user) {
        throw new Error('[-] Could not fetch user profile...')
    }

    return supabaseUserResponse.data.user
}
