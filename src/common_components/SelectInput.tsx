import {Select} from '@kobalte/core/select';

export default function SelectInput(props: {
    options: Array<string>
    placeholder: string,
    onValueSelect: (value: string | number) => void,
}) {

    return (
        <Select
            class={'w-full h-fit bg-b-bg flex flex-col items-start justify-start gap-2'}
            options={[
                "Owner",
                "Director",
                "CEO",
                "Quality Examiner",
                "Manager"
            ]}
            placeholder={"Select Your Job Title"}
            itemComponent={(props) => {
                return (
                    <Select.Item class={'w-full h-fit cursor-pointer flex flex-row items-center justify-between'}
                                 item={props.item}>
                        <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
                        <Select.ItemIndicator>SELECTED</Select.ItemIndicator>
                    </Select.Item>
                )
            }}
            onChange={(value) => {
                if (import.meta.env.DEV) {
                    console.debug("[SelectInput] ", value)
                }

                props.onValueSelect(value!)
            }}
        >

            <Select.Trigger class={'w-full h-fit px-4 py-2 flex flex-row items-center justify-between rounded-md bg-v-bg text-v-text-body font-normal text-sm shadow-md'}>
                <Select.Value>
                    {
                        (state) => {
                            return <>{state.selectedOption()}</>
                        }
                    }
                </Select.Value>
                <Select.Icon>
                    +
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content class={'p-2 flex flex-col items-stretch justify-between rounded-md bg-v-bg text-v-text-body text-sm shadow-sm'}>
                    <Select.Listbox class={'w-full h-fit flex flex-col items-stretch gap-2'}/>
                </Select.Content>
            </Select.Portal>
        </Select>
    )
}