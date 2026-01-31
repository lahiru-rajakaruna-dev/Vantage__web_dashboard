import { Popover }                                                             from '@kobalte/core/popover';
import { BiSolidUser }                                                         from 'solid-icons/bi';
import { BsCashStack }                                                         from 'solid-icons/bs';
import { FaSolidHandHoldingDollar, FaSolidPeopleGroup, FaSolidTowerBroadcast } from 'solid-icons/fa';
import { VsSignOut }                                                           from 'solid-icons/vs';
import { For }                                                                 from 'solid-js';
import { signOut }                                                             from '../supabase/authentication';



export default function ApplicationHeader() {
    return (
            <div class={ 'col-start-1 col-end-13 w-full h-full p-2.5 flex flex-row items-stretch justify-start gap-8 bg-teal-200/60 backdrop-blur-sm border-b-2 border-v-accent/30' }>
                <ApplicationState_Logo/>
                <LiveData/>
                <UserProfileButton/>
            </div>)
}


function ApplicationState_Logo() {
    return <div class={ 'w-fit h-full flex flex-row items-center justify-start gap-4' }>
        <div>
            <FaSolidTowerBroadcast size={ 32 }/>
        </div>
        <div class={ 'font-black text-4xl text-blue-950' }>
            Vantage
        </div>
    </div>
}


function LiveData() {
    return <div class={ 'w-full h-full flex flex-row items-center justify-center gap-12 font-bold text-2xl' }>
        <div class={ 'flex flex-row items-center justify-start gap-4' }>
            <BsCashStack size={ 32 }/>
            <div class={ 'flex flex-row items-center justify-center gap-1' }>
                <div class={ '-translate-y-1' }>
                    5,800,100
                </div>
                /
                <div class={ 'translate-y-1 text-sm text-v-text-body' }>
                    6,500,400
                </div>
            </div>
        </div>
        <div class={ 'flex flex-row items-center justify-start gap-4' }>
            <FaSolidHandHoldingDollar size={ 32 }/>
            <div class={ 'flex flex-row items-center justify-center gap-1' }>
                <div class={ '-translate-y-1' }>
                    5,800,100
                </div>
                /
                <div class={ 'translate-y-1 text-sm text-v-text-body' }>
                    6,500,400
                </div>
            </div>
        </div>
        <div class={ 'flex flex-row items-center justify-start gap-4' }>
            <FaSolidPeopleGroup size={ 32 }/>
            <div class={ 'flex flex-row items-center justify-center gap-1' }>
                <div class={ '-translate-y-1' }>
                    5,800,100
                </div>
                /
                <div class={ 'translate-y-1 text-sm text-v-text-body' }>
                    6,500,400
                </div>
            </div>
        </div>
    </div>
}


function UserProfileButton() {
    
    return <div
            class={ 'w-fit flex flex-row items-center justify-end' }
    >
        <Popover>
            <Popover.Trigger class={ 'aspect-square w-auto h-full rounded-full border-2 border-teal-400/60 overflow-hidden' }>
                <img
                        class={ 'aspect-square w-12 h-auto rounded-full' }
                        srcSet={ 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
                        alt={ 'profile image' }
                />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content class={ 'w-fit min-w-48 p-2 flex flex-col items-stretch justify-start gap-1 bg-teal-50/60 backdrop-blur-sm rounded-md border-2 border-teal-50 shadow-[2px_2px_8px_1px] shadow-teal-950/30 ' }>
                    <Popover.Arrow/>
                    <For
                            each={ [
                                {
                                    label : 'Profile',
                                    action: () => {
                                    },
                                    icon  : () => <BiSolidUser size={ 16 }/>
                                }, {
                                    label : 'Logout',
                                    action: async () => {
                                        await signOut()
                                    },
                                    icon  : () => <VsSignOut size={ 16 }/>
                                },
                            ] }
                    >
                        { (item) => {
                            return (
                                    
                                    <div class={ 'px-2 py-2 rounded-md hover:bg-teal-100 outline-none' }>
                                        <button
                                                onClick={ item.action }
                                                class={ 'flex flex-row items-center justify-start gap-2 outline-none' }
                                        >
                                            { item.icon() }
                                            <pre>{ item.label }</pre>
                                        </button>
                                    </div>)
                        } }
                    </For>
                </Popover.Content>
            </Popover.Portal>
        </Popover>
    </div>
}