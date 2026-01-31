export default function PasswordInput(props: {
    placeholder: string,
    onInputChange: (value: string) => void
}) {
    return (
        <input type={'password'}
               placeholder={props.placeholder ?? "PineappleBananaPizza17"}
               onChange={(e) => props.onInputChange(e.currentTarget.value)}
               class={"w-full h-fit px-4 py-2 text-v-text-body text-sm font-normal bg-v-bg rounded-md shadow-sm"}
        />
    )
}