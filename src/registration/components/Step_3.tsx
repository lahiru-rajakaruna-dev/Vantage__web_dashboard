import { BiRegularPlus }     from 'solid-icons/bi';
import { BsFire }            from 'solid-icons/bs';
import { createSignal, For } from 'solid-js';
import PrimaryButton         from '../../common_components/PrimaryButton';
import TextInput             from '../../common_components/TextInput';
import { TStepProps }        from './types';



function updateObjEmail(list: {
    id: string,
    value: string
}[], id: string, value: string) {
    
    return list.map((ObjEmail) => {
        if (ObjEmail.id !== id) {
            return ObjEmail
        }
        ObjEmail.value = value
        return ObjEmail
    })
    
}


export default function Step_3(props: TStepProps) {
    let timeoutId: NodeJS.Timeout;
    const [ getEmails, setEmails ] = createSignal<Array<{
        id: string,
        value: string
    }>>([])
    
    
    function onButtonClick() {
        props.onButtonClick({
                                emails: getEmails()
                                        .map(({
                                                  id,
                                                  value
                                              }) => value)
                            })
    }
    
    
    function addEmailInput() {
        setEmails((prevEmails) => {
            const emailId = `email_${ prevEmails.length }`
            
            return [
                ...prevEmails, {
                    id   : emailId,
                    value: ''
                }
            ]
        })
    }
    
    
    return (<div
            class={ 'flex flex-col items-stretch justify-start gap-12 ' }
    >
        <div class={ 'flex flex-col items-stretch justify-start gap-2' }>
            <For each={ getEmails() }>
                { (ObjEmail) => {
                    if (import.meta.env.DEV) {
                        console.debug('Creating input handler: ', ObjEmail)
                    }
                    
                    return <TextInput
                            onChange={ (enteredEmail) => {
                                const {
                                          id,
                                          value
                                      } = ObjEmail
                                
                                if (timeoutId) {
                                    console.debug('Clearing timeout: ', timeoutId)
                                    clearTimeout(timeoutId)
                                }
                                
                                timeoutId = setTimeout(() => {
                                    setEmails((listObjEmails) => {
                                        return updateObjEmail(listObjEmails, id, enteredEmail)
                                    })
                                }, 1000 * 2)
                            } }
                            placeholder={ 'Employee email address' }
                            inputConfig={ { type: 'email' } }
                    />
                } }
            </For>
            
            <button
                    class={ 'w-full h-fit px-4 py-3 flex flex-row items-center justify-center rounded-md bg-white cursor-pointer' }
                    onClick={ addEmailInput }
            >
                <BiRegularPlus/>
            </button>
        
        </div>
        <PrimaryButton
                onClick={ onButtonClick }
                getIsBusy={ props.getIsBusy }
                getIsDisabled={ props.getIsBusy }
        >
            <PrimaryButton.Icon>
                <BsFire size={ 14 }/>
            </PrimaryButton.Icon>
            <PrimaryButton.Label>Invite & Go to dashboard</PrimaryButton.Label>
        </PrimaryButton>
    </div>)
}