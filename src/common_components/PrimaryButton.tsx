import {Button}                                       from '@kobalte/core/button'
import {FaSolidGear}                                  from "solid-icons/fa";
import {createContext, ParentProps, Show, useContext} from "solid-js";


const CNTXButton = createContext<{
    getIsBusy: () => boolean
}>({getIsBusy: () => false})

export default function PrimaryButton(props: ParentProps<{
    onClick: () => void
    getIsBusy: () => boolean;
    getIsDisabled: () => boolean;
}>) {
    return (
        <CNTXButton.Provider value={{getIsBusy: props.getIsBusy}}>
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
    const {getIsBusy} = useContext(CNTXButton)

    return <Show
        when={!getIsBusy()}
        fallback={<FaSolidGear/>}>
        {
            props.children
        }
    </Show>
}

function Label(props: ParentProps) {
    const {getIsBusy} = useContext(CNTXButton)

    return <Show
        when={!getIsBusy()}
        fallback={<>In Progress...</>}>
        {props.children}
    </Show>
}

PrimaryButton.Icon  = Icon
PrimaryButton.Label = Label