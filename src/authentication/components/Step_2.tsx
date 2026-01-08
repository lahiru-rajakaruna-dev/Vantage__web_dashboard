import PrimaryButton from "../../common_components/PrimaryButton";
import SelectInput from "../../common_components/SelectInput";
import TextInput from "../../common_components/TextInput";
import {TStepProps} from "../types";
import {TextField} from "@kobalte/core/text-field"
import {Select} from '@kobalte/core/select'
import {createSignal} from "solid-js";

export default function Step_2(props: TStepProps) {
    const [getEmail, setEmail] = createSignal("")
    const [getJobTitle, setJobTitle] = createSignal("")

    function onButtonClick() {
        props.onButtonClick({
            dashboardOwnerEmail: getEmail(),
            jobTitle           : getJobTitle()
        })
    }

    return <div
        class={'w-fit min-w-lg h-fit p-8 flex flex-col items-stretch justify-start gap-12 bg-v-bg/80 shadow-[inset_0px_0px_1px_3px] shadow-v-accent-glow backdrop-blur-md rounded-md'}>
        <div class={"flex flex-col items-stretch justify-start gap-2"}>
            <SelectInput
                options={[
                    "CEO",
                    "Manager",
                    "Quality Examiner",
                    "Field Officer",
                    "Instructor"
                ]}
                placeholder={"Your Job Title"}
                onValueSelect={(jobTitle) => {
                    setJobTitle(jobTitle as string)
                }}
            />
        </div>

        <PrimaryButton
            onClick={onButtonClick}
            label={'Next'}/>
    </div>
}