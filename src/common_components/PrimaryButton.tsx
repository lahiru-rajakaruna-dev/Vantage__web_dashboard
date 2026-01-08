import {Button} from '@kobalte/core/button'

export default function PrimaryButton(props: {
    onClick: () => void
    label: string,
}) {
    return (
        <Button
            class={"w-auto min-w-20 h-fit px-8 py-5 leading-0 font-medium text-white bg-v-accent rounded-md"}
            onClick={props.onClick}>
            {
                props.label
            }
        </Button>
    )
}