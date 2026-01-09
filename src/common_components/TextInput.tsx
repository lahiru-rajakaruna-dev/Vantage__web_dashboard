import {TextField} from "@kobalte/core/text-field";
import {JSX} from "solid-js";

export default function TextInput(props: {
    onChange: (value: string) => void
    placeholder: string
    description?: string,
    dataDataValidationFunction?: (value: string) => 'valid' | 'invalid'
    errorMessage?: string
    inputConfig: Pick<JSX.InputHTMLAttributes<HTMLInputElement>, 'type'>
}) {

    return (
        <TextField
            class={'w-full h-fit px-4 py-2 rounded-md bg-v-bg shadow-sm text-sm font-normal'}
            onChange={(value) => {
                props.onChange(value)
            }}

        >
            <TextField.Input
                type={props.inputConfig.type}
                class={'w-full h-fit outline-0'}
                placeholder={props.placeholder}/>
            {
                props.description ??
                <TextField.Description>{props.description}</TextField.Description>
            }
            <TextField.ErrorMessage>{props.errorMessage ?? "Invalid data..."}</TextField.ErrorMessage>
        </TextField>
    )
}