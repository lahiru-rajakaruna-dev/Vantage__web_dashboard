import {createSignal} from "solid-js";
import PrimaryButton from "../../common_components/PrimaryButton";
import TextAreaInput from "../../common_components/TextAreaInput";
import {TStepProps} from "../types";

export default function Step_3(props: TStepProps) {
    const [getEmails, setEmails] = createSignal<string[]>([])

    function onButtonClick() {
        props.onButtonClick({emails: getEmails()})
    }


    return (
        <div
            class={'w-fit min-w-lg h-fit p-8 flex flex-col items-stretch justify-start gap-12 bg-v-bg/80 shadow-[inset_0px_0px_1px_3px] shadow-v-accent-glow backdrop-blur-md rounded-md'}>
            <div class={"flex flex-col items-stretch justify-start gap-2"}>
                <TextAreaInput
                    onInputChange={(emails) => {
                        setEmails(emails.trim().split(/^,\s+/))
                    }}
                    description={'Comma separated emails of your employees'}/>
            </div>
            <PrimaryButton
                onClick={onButtonClick}
                label={'Invite & Go to dashboard'}/>
        </div>
    )
}