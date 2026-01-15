import {BsArrowRight} from "solid-icons/bs";
import {createSignal} from "solid-js";
import {TStepProps}   from "../../authentication/types";
import PrimaryButton  from "../../common_components/PrimaryButton";
import SelectInput    from "../../common_components/SelectInput";

export default function Step_2(props: TStepProps<{
    isBusy: boolean
}>) {
    const [getJobTitle, setJobTitle] = createSignal("")

    function onButtonClick() {
        if (!getJobTitle()) {
            throw new Error('[-] Please select your job title')
        }

        props.onButtonClick({
                                jobTitle: getJobTitle()
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
            isBusy={props.isBusy}
            disabled={props.isBusy}
        >
            <PrimaryButton.Label>
                <div class={""}>
                    Next
                </div>
            </PrimaryButton.Label>
            <PrimaryButton.Icon>
                <BsArrowRight/>
            </PrimaryButton.Icon>
        </PrimaryButton>
    </div>
}