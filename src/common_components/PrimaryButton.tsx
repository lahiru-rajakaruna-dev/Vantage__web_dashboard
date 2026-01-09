import {Button} from '@kobalte/core/button'
import {VsLoading} from "solid-icons/vs";
import {createContext, ParentProps, Show, useContext} from "solid-js";


const CNTXButton = createContext({isBusy: false})

export default function PrimaryButton(props: ParentProps<{
    onClick: () => void
    isBusy: boolean;
    disabled: boolean;
}>) {
    return (
        <CNTXButton.Provider value={{isBusy: props.isBusy ?? false}}>
            <Button
                class={"w-auto min-w-20 h-fit px-8 py-3 flex flex-row items-center justify-center gap-4 leading-0 font-medium text-white bg-v-accent rounded-md v-skeuo cursor-pointer"}
                onClick={props.onClick}>
                {
                    props.children
                }
            </Button>
        </CNTXButton.Provider>
    )
}

function Icon(props: ParentProps) {
    const {isBusy} = useContext(CNTXButton)

    return <Show
        when={!isBusy}
        fallback={<VsLoading/>}>
        {
            props.children
        }
    </Show>
}

function Label(props: ParentProps) {
    const {isBusy} = useContext(CNTXButton)

    return <Show when={!isBusy}
                 fallback={<>In Progress...</>}>{props.children}</Show>
}

PrimaryButton.Icon = Icon
PrimaryButton.Label = Label