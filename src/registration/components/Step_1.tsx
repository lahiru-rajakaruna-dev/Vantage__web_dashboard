import { FaSolidArrowRight }    from 'solid-icons/fa';
import { createSignal }         from 'solid-js';
import { toast }                from 'solid-toast';
import FileInput                from '../../common_components/FileInput';
import PrimaryButton            from '../../common_components/PrimaryButton';
import TextInput                from '../../common_components/TextInput';
import { uploadFileToSupabase } from '../../supabase/storage';
import { TStepProps }           from './types';



export default function Step_1(props: TStepProps) {
    const [ getOrganizationName, setOrganizationName ]             = createSignal('')
    const [ getOrganizationAdminPhone, setOrganizationAdminPhone ] = createSignal('')
    const [ getLogoUrl, setLogoUrl ]                               = createSignal<string>()
    
    
    function onButtonClick() {
        if (!getOrganizationName() || !getOrganizationAdminPhone) {
            toast.error('Please fill all the fields...')
            return
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
            toast.loading('Uploading image...')
            
            const {
                      data,
                      error
                  } = await uploadFileToSupabase(file, fileType, 'super_user')
            
            if (import.meta.env.DEV) {
                console.debug('Step_1 > File Upload: ', data)
            }
            
            toast.dismiss()
            
            if (error) {
                toast.error('Something went wrong. Try again.')
                console.error(error)
                return
            }
            
            toast.success('Image uploaded...')
            
            return data.path;
        } catch (e) {
            if (import.meta.env.DEV) {
                console.debug('[Step_1] Failed to upload image', (e as Error).message)
            }
            
            console.error('Image upload failed')
            
        } finally {
            props.setIsBusy(false)
        }
    }
    
    
    return <div
            class={ 'flex flex-col items-stretch justify-start gap-8' }
    >
        <div class={ 'flex flex-col items-stretch justify-start gap-4' }>
            <FileInput
                    description={ 'Upload organization logo' }
                    onFileSelect={ async (fileArrayBuffer, fileType) => {
                        const supabaseFilePath = await uploadFile(fileArrayBuffer, fileType)
                        setLogoUrl(supabaseFilePath)
                    } }
            />
            <div class={ 'flex flex-col items-stretch justify-start gap-2' }>
                <TextInput
                        onChange={ setOrganizationName }
                        placeholder={ 'Organization name' }
                        inputConfig={ { type: 'text' } }
                />
                <TextInput
                        onChange={ setOrganizationAdminPhone }
                        placeholder={ 'Organization phone' }
                        inputConfig={ { type: 'tel' } }
                />
            </div>
        </div>
        <PrimaryButton
                onClick={ onButtonClick }
                getIsBusy={ props.getIsBusy }
                getIsDisabled={ props.getIsBusy }
        >
            <PrimaryButton.Label>
                <pre>
                    Next
                </pre>
            </PrimaryButton.Label>
            <PrimaryButton.Icon>
                <FaSolidArrowRight size={ 14 }/>
            </PrimaryButton.Icon>
        </PrimaryButton>
    </div>
}