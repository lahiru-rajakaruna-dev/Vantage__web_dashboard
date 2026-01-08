import FileInput from "../../common_components/FileInput";
import PasswordInput from "../../common_components/PasswordInput";
import PrimaryButton from "../../common_components/PrimaryButton";
import TextInput from "../../common_components/TextInput";
import {TStepProps} from "../types";
import {createSignal} from "solid-js";

export default function Step_1(props: TStepProps) {
    const [getOrganizationName, setOrganizationName] = createSignal("")
    const [getOrganizationEmail, setOrganizationEmail] = createSignal("")
    const [getOrganizationPassword, setOrganizationPassword] = createSignal("")
    const [getLogoUrl, setLogoUrl] = createSignal<string>()


    function onButtonClick() {
        props.onButtonClick({
            organizationName    : getOrganizationName(),
            organizationEmail   : getOrganizationEmail(),
            organizationPassword: getOrganizationPassword(),
            logoUrl             : getLogoUrl()
        })
    }

    async function uploadFile(file: string) {
        return ""
    }

    return <div
        class={'w-fit min-w-lg h-fit p-8 flex flex-col items-stretch justify-start gap-12 bg-v-bg/80 shadow-[inset_0px_0px_1px_3px] shadow-v-accent-glow backdrop-blur-md rounded-md'}>

        <FileInput
            description={'Upload organization logo'}
            onFileSelect={async (file) => {
                const url = await uploadFile(file)
                setLogoUrl(url)

            }}/>

        <div class={"flex flex-col items-stretch justify-start gap-2"}>
            <TextInput
                onChange={setOrganizationName}
                placeholder={"Organization name"}
            />
            <TextInput
                onChange={setOrganizationEmail}
                placeholder={'Organization email'}/>
            <PasswordInput
                placeholder={"PineappleBananaPizza17"}
                onInputChange={setOrganizationPassword}/>
        </div>

        <PrimaryButton
            onClick={onButtonClick}
            label={'Next'}/>
    </div>
}