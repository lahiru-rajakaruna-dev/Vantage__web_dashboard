import {BiRegularPlus} from "solid-icons/bi";
import {BsFire} from "solid-icons/bs";
import {createEffect, createSignal, For} from "solid-js";
import PrimaryButton from "../../common_components/PrimaryButton";
import TextAreaInput from "../../common_components/TextAreaInput";
import {TStepProps} from "../../authentication/types";
import TextInput from "../../common_components/TextInput";

export default function Step_3(props: TStepProps) {
    const [getEmails, setEmails] = createSignal<Array<Record<string, string>>>([{email_0: ""}])

    createEffect(() => {
        console.log(getEmails())
    })

    function onButtonClick() {
        props.onButtonClick({emails: getEmails()})
    }

    function addEmailInput() {
        setEmails((prevEmails) => {
            const emailId = `email_${prevEmails.length}`

            return {
                ...prevEmails,
                [emailId]: ""
            }
        })
    }

    return (
        <div
            class={'w-fit min-w-lg h-fit p-8 flex flex-col items-stretch justify-start gap-12 bg-v-bg/80 shadow-[inset_0px_0px_1px_3px] shadow-v-accent-glow backdrop-blur-md rounded-md'}>
            <div class={"flex flex-col items-stretch justify-start gap-2"}>
                <For each={getEmails()}>
                    {
                        (item) => {
                            console.log(item)
                            return <TextInput
                                onChange={(email) => {
                                    const {
                                              key,
                                              value
                                          } = item

                                    let timeoutId;

                                    if (timeoutId) {
                                        clearTimeout(timeoutId)
                                    }

                                    timeoutId = setTimeout(() => {
                                        setEmails((prevState) => {
                                            return {
                                                ...prevState,
                                                [key]: email
                                            }
                                        })
                                    }, 100)

                                }}
                                placeholder={'Employee email address'}
                                inputConfig={{type: 'email'}}/>
                        }
                    }
                </For>

                <button
                    class={'w-full h-fit px-4 py-3 flex flex-row items-center justify-center rounded-md bg-white cursor-pointer'}
                    onClick={addEmailInput}>
                    <BiRegularPlus/>
                </button>

            </div>
            <PrimaryButton
                onClick={onButtonClick}
                isBusy={props.isBusy}
                disabled={props.isBusy}
            >
                <PrimaryButton.Icon>
                    <BsFire/>
                </PrimaryButton.Icon>
                <PrimaryButton.Label>Invite & Go to dashboard</PrimaryButton.Label>
            </PrimaryButton>
        </div>
    )
}