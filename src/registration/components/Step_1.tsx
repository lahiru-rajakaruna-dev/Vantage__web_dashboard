import {BsArrowRight}         from "solid-icons/bs";
import {createSignal}         from "solid-js";
import FileInput              from "../../common_components/FileInput";
import PrimaryButton          from "../../common_components/PrimaryButton";
import TextInput              from "../../common_components/TextInput";
import {uploadFileToSupabase} from "../../supabase/storage";
import {TStepProps}           from "./types";

export default function Step_1(props: TStepProps) {
    const [getOrganizationName, setOrganizationName]             = createSignal("")
    const [getOrganizationAdminPhone, setOrganizationAdminPhone] = createSignal("")
    const [getLogoUrl, setLogoUrl]                               = createSignal<string>()


    function onButtonClick() {
        if (!getOrganizationName() || !getOrganizationAdminPhone) {
            throw new Error('[-] Please fill all the fields')
        }

        props.onButtonClick({
                                organization_name       : getOrganizationName(),
                                organization_admin_phone: getOrganizationAdminPhone(),
                                organization_logo_url   : getLogoUrl()
                            })
    }

    async function uploadFile(file: ArrayBuffer, fileType: string) {
        props.setIsBusy(true)
        try {
            const {
                      data,
                      error
                  } = await uploadFileToSupabase(file, fileType, "super_user")

            if (import.meta.env.DEV) {
                console.debug("Step_1 > File Upload: ", data)
            }

            if (error) {
                console.error(error)
                return
            }

            return data.path;
        } finally {
            props.setIsBusy(false)
        }
    }

    return <div
        class={'w-fit min-w-lg h-fit p-8 flex flex-col items-stretch justify-start gap-8 bg-v-bg/80 shadow-[inset_0px_0px_1px_3px] shadow-v-accent-glow backdrop-blur-md rounded-md'}>
        <div class={'flex flex-col items-stretch justify-start gap-4'}>
            <FileInput
                description={'Upload organization logo'}
                onFileSelect={async (fileArrayBuffer, fileType) => {
                    const supabaseFilePath = await uploadFile(fileArrayBuffer, fileType)
                    setLogoUrl(supabaseFilePath)
                }}/>
            <div class={"flex flex-col items-stretch justify-start gap-2"}>
                <TextInput
                    onChange={setOrganizationName}
                    placeholder={"Organization name"}
                    inputConfig={{type: 'text'}}
                />
                <TextInput
                    onChange={setOrganizationAdminPhone}
                    placeholder={"Organization phone"}
                    inputConfig={{type: 'tel'}}
                />
            </div>
        </div>
        <PrimaryButton
            onClick={onButtonClick}
            getIsBusy={props.getIsBusy}
            getIsDisabled={props.getIsBusy}
        >
            <PrimaryButton.Label>
                <div class={''}>
                    Next
                </div>
            </PrimaryButton.Label>
            <PrimaryButton.Icon>
                <BsArrowRight/>
            </PrimaryButton.Icon>
        </PrimaryButton>
    </div>
}