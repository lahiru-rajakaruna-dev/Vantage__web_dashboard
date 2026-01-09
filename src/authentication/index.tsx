import {AiOutlineUser} from "solid-icons/ai";
import {BiLogosGoogle} from "solid-icons/bi";
import {createSignal} from "solid-js";
import PasswordInput from "../common_components/PasswordInput";
import PrimaryButton from "../common_components/PrimaryButton";
import TextInput from "../common_components/TextInput";
import {TStepProps} from "./types";
import {signupWithCredentials, signupWithGoogle} from '../supabase/authentication'

export default function UserSignup() {
    return (
        <div class={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-lg h-fit p-8 rounded-md bg-v-bg/30 backdrop-blur-sm v-glass flex flex-col items-stretch justify-start gap-4'}>

            <div class={'w-full h-fit text-lg font-normal text-v-text-body'}>Share your google profile to continue</div>

            <div class={"w-full h-fit flex flex-col items-stretch justify-start gap-3"}>
                <PrimaryButton
                    onClick={async () => {
                        const redirectUrl = await signupWithGoogle()

                        if (import.meta.env.DEV) {
                            console.debug(redirectUrl)
                        }

                        if (!redirectUrl) {
                            throw new Error('Google signup failed')
                        }

                        window.location.replace(redirectUrl);

                    }}
                    isBusy={false}
                    disabled={false}>
                    <PrimaryButton.Icon><BiLogosGoogle size={28}/></PrimaryButton.Icon>
                    <PrimaryButton.Label>
                        <div class={"text-lg"}>Login with Google</div>
                    </PrimaryButton.Label>
                </PrimaryButton>
            </div>
        </div>
    )
}