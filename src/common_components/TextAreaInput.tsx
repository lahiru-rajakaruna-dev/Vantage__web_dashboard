import {TextField} from "@kobalte/core/text-field";

export default function TextAreaInput(props: {
    onInputChange: (value: string) => void
    defaultValue?: string
    placeholder?: string
}) {
    return (
        <TextField
            class={'w-full h-fit p-3 bg-v-bg rounded-md shadow-sm'}
            defaultValue={props.defaultValue ?? ""}
            onChange={(value) => {
                if (import.meta.env.DEV) {
                    console.trace(value)
                }

                props.onInputChange(value)
            }}
        >
            <TextField.TextArea
                class={'w-full h-fit text-sm text-v-text-main outline-0'}
                placeholder={props.placeholder ?? ""}
            />
        </TextField>
    )
}