import { BsArrowRight } from 'solid-icons/bs';
import { createSignal } from 'solid-js';
import PrimaryButton    from '../../common_components/PrimaryButton';
import SelectInput      from '../../common_components/SelectInput';
import { TStepProps }   from './types';



export default function Step_2(props: TStepProps) {
    const [ getJobTitle, setJobTitle ] = createSignal('')
    
    
    function onButtonClick() {
        if (!getJobTitle()) {
            throw new Error('[-] Please select your job title')
        }
        
        props.onButtonClick({
                                jobTitle: getJobTitle()
                            })
    }
    
    
    return <div
            class={ 'flex flex-col items-stretch justify-start gap-12' }
    >
        <div class={ 'flex flex-col items-stretch justify-start gap-2' }>
            <SelectInput
                    options={ [
                        'CEO', 'Manager', 'Quality Examiner', 'Field Officer', 'Instructor'
                    ] }
                    placeholder={ 'Your Job Title' }
                    onValueSelect={ (jobTitle) => {
                        setJobTitle(jobTitle as string)
                    } }
            />
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
                <BsArrowRight/>
            </PrimaryButton.Icon>
        </PrimaryButton>
    </div>
}