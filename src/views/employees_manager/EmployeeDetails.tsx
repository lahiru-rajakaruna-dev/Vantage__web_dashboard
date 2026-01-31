import { Chart, Tooltip, Title, Legend, Colors }                                                 from 'chart.js';
import { Bar }                                                                                   from 'solid-chartjs'
import { AiOutlineCloudSync }                                                                    from 'solid-icons/ai';
import { BiRegularChevronDown, BiRegularChevronRight, BiRegularCircle }                          from 'solid-icons/bi';
import { BsChevronDown, BsChevronRight }                                                         from 'solid-icons/bs';
import { FaSolidArrowTrendDown, FaSolidArrowTrendUp, FaSolidBiohazard, FaSolidMoneyBillTrendUp } from 'solid-icons/fa';
import { IoLockClosed }                                                                          from 'solid-icons/io';
import { For, onMount }                                                                          from 'solid-js';
import { toast }                                                                                 from 'solid-toast';
import PrimaryButton
                                                                                                 from '../../common_components/PrimaryButton';
import {
    DropdownMenu
}                                                                                                from '@kobalte/core/dropdown-menu'



export default function EmployeeDetails() {
    return <div class={ 'w-full h-full p-2 border-2 border-teal-400/60 rounded-md bg-teal-200/30 overflow-y-scroll backdrop-blur-sm' }>
        <div class={ 'w-full min-h-full h-fit grid grid-cols-12 auto-rows-fr gap-2' }>
            <PersonalDetails/>
            <SalesVelocity/>
            <SyncHealth/>
            <CurrentActiveArea/>
            {/*<SalesGroup/>*/ }
            {/*<ActivityTimeline/>*/ }
            {/*<SalesOverMonths/>*/ }
        </div>
    </div>
}


function PersonalDetails() {
    
    function increaseEmployeeCommissionBy_1() {
        toast('Increasing employee commission by 1%')
    }
    
    
    function decreaseEmployeeCommissionBy_1() {
        toast('Decrease employee commission by 1%')
    }
    
    
    function deactivateEmployee() {
        toast('Deactivating employee')
    }
    
    
    function suspendEmployee() {
        toast('Suspend employee')
    }
    
    
    return <div class={ 'row-start-1 row-span-4 col-start-1 col-span-4 p-4 card' }>
        
        <div class={ 'w-full h-full grid grid-cols-2 auto-rows-fr gap-4' }>
            
            <div class={ 'col-start-1 col-span-2 row-start-1 row-span-4 border-2 border-teal-400/60 rounded-md overflow-hidden' }>
                <img
                        src={ 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
                        class={ 'w-full h-full object-center object-cover' }/>
            </div>
            
            <div class={ 'col-start-1 col-span-1 row-start-5 row-span-1' }>
                <LabeledValue label={ 'Full Name' } value={ 'Jasmine Crotney' }/>
            </div>
            <div class={ 'col-start-2 col-span-1 row-start-5 row-span-1' }>
                <LabeledValue label={ 'Joined Date' } value={ '2020/04/17' }/>
            </div>
            
            <div class={ 'col-start-1 col-span-1 row-start-6 row-span-1' }>
                <LabeledValue label={ 'NIC Number' } value={ '19808107839' }/>
            </div>
            <div class={ 'col-start-2 col-span-1 row-start-6 row-span-1' }>
                <LabeledValue label={ 'Service Area' } value={ 'Anuradhapura' }/>
            </div>
            
            <div class={ 'col-start-1 col-span-1 row-start-7 row-span-1' }>
                <LabeledValue label={ 'Phone' } value={ '+(61)19 4664 678' }/>
            </div>
            <div class={ 'col-start-2 col-span-1 row-start-7 row-span-1' }>
                <LabeledValue label={ 'Account Number' } value={ '39100183801029' }/>
            </div>
            
            <div class={ 'col-start-1 col-span-2 row-span-1 flex flex-col items-stretch justify-end' }>
                <DropdownMenu>
                    <DropdownMenu.Trigger class={ 'p-2 flex flex-row items-center justify-between gap-4 border-2 border-teal-400 bg-teal-200 text-teal-400 rounded hover:border-yellow-400' }>
                        <pre>Actions</pre>
                        <DropdownMenu.Icon>
                            <BsChevronDown size={ 14 }/>
                        </DropdownMenu.Icon>
                    </DropdownMenu.Trigger>
                    
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content class={ 'p-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger
                                        class={ 'p-2 flex flex-row items-center justify-between gap-4 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                    <pre>User</pre>
                                    <DropdownMenu.Icon>
                                        <BsChevronRight size={ 14 }/>
                                    </DropdownMenu.Icon>
                                </DropdownMenu.SubTrigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.SubContent class={ 'p-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                        <DropdownMenu.Item class={ 'w-full' } onClick={ deactivateEmployee }>
                                            <button class={ 'w-full px-2 py-2 flex flex-row items-center justify-start gap-4 hover:bg-red-400 text-red-400 hover:text-white border-2 border-red-400 rounded-md' }>
                                                <FaSolidBiohazard size={ 14 }/>
                                                <pre>
                                                   Deactivate User
                                                </pre>
                                            </button>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item class={ 'w-full' } onClick={ suspendEmployee }>
                                            <button class={ 'w-full px-2 py-2 flex flex-row items-center justify-start gap-4 hover:bg-orange-400 text-orange-400 hover:text-white border-2 border-orange-400 rounded-md' }>
                                                <IoLockClosed size={ 14 }/>
                                                <pre>
                                                    Suspend User
                                                </pre>
                                            </button>
                                        </DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                            <DropdownMenu.Separator class={ 'border-teal-400' }/>
                            
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger class={ 'p-2 flex flex-row items-center justify-start gap-4 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                    <pre>Commission</pre>
                                    <DropdownMenu.Icon>
                                        <BsChevronRight size={ 14 }/>
                                    </DropdownMenu.Icon>
                                </DropdownMenu.SubTrigger>
                                
                                <DropdownMenu.Portal>
                                    <DropdownMenu.SubContent class={ 'p-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                        <DropdownMenu.Item
                                                class={ 'w-full' }
                                                onClick={ increaseEmployeeCommissionBy_1 }>
                                            <button class={ 'w-full px-4 py-2 flex flex-row items-center justify-center gap-4 bg-blue-200 hover:bg-blue-400 border-2 border-blue-400 text-blue-400 hover:text-white rounded-md' }>
                                                <FaSolidArrowTrendUp size={ 16 }/>
                                                <pre>
                                                    Increase Commission by 1%
                                    </pre>
                                            </button>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item disabled={ true }>
                                            <pre>Current Commission: { '5'.padStart(2, '0') }%</pre>
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Item
                                                class={ 'w-full' }
                                                onClick={ decreaseEmployeeCommissionBy_1 }>
                                            <button class={ 'w-full px-4 py-2 flex flex-row items-center justify-center gap-4 bg-blue-200 hover:bg-blue-400 border-2 border-blue-400 text-blue-400 hover:text-white rounded-md' }>
                                                <FaSolidArrowTrendDown size={ 16 }/>
                                                <pre>
                                                    Increase Commission by 1%
                                    </pre>
                                            </button>
                                        </DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu>
            </div>
        </div>
    
    </div>
}


function SalesVelocity() {
    
    onMount(() => {
        Chart.register(Tooltip, Colors, Title)
    })
    
    return <div class={ 'row-start-1 row-span-2 col-start-5 col-span-4 card' }>
        
        <div class={ 'relative w-full h-full p-4 flex flex-col items-center justify-center gap-2' }>
            <Bar
                    width={ 400 }
                    height={ 200 }
                    options={ {
                        animation      : true,
                        backgroundColor: 'hsla(187,30%,45%,0.9)',
                        elements       : {
                            bar: {
                                borderRadius   : 4,
                                borderWidth    : 1,
                                borderColor    : 'hsla(173,50%,35%,0.9)',
                                backgroundColor: 'hsla(173,50%,55%,0.3)',
                            },
                        },
                        scales         : {
                            y: {
                                min  : 0,
                                max  : 10,
                                ticks: {
                                    callback: (value: any, index: number, ticks: any[]) => {
                                        return `$${ value }K`
                                    },
                                    color   : 'hsla(173,50%,35%,0.9)'
                                },
                                grace: 5,
                                grid : {
                                    lineWidth: 0,
                                    drawTicks: true,
                                    tickWidth: 1,
                                    color    : 'hsla(173,35%,55%,0.8)'
                                },
                            },
                            x: {
                                ticks: {
                                    color: 'hsla(173,50%,35%,0.9)'
                                },
                                grid : {
                                    lineWidth: 0,
                                    drawTicks: true,
                                    tickWidth: 1,
                                    color    : 'hsla(173,35%,55%,0.8)',
                                }
                            }
                        },
                        responsive     : true,
                    } }
                    data={ {
                        labels  : [ 'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept' ],
                        datasets: [
                            {
                                label: 'Employee Name',
                                data : [ 2, 1.5, 3, 4.25, 4, 5.3, 6 ],
                            },
                        ]
                    } }/>
            
            <div class={ 'flex-1 flex flex-col items-center justify-center' }>
            <pre class={ 'text-3xl font-semibold' }>
                Rs:{ `5,300` }<span class={ 'text-xl text-v-text-body' }>/Month</span>
            </pre>
                <pre class={ 'text-v-text-body text-sm' }>
                Company Avg: Rs:{ `3,120` }/Month
            </pre>
            </div>
        </div>
    
    </div>
}


function CurrentActiveArea() {
    
    function updateEmployeeSalesGroup() {
        toast('Updating employee sales group...')
    }
    
    
    function updateEmployeeServiceArea() {
        toast('Updating employee service area...')
    }
    
    
    return <div class={ 'row-start-3 row-span-2 col-start-5 col-span-8 card' }>
        
        <div class={ 'w-full h-full flex flex-col items-stretch justify-start' }>
            
            <div class={ 'relative w-full h-full flex flex-row items-stretch justify-between' }>
                <div class={ 'relative flex-1 h-full border-r-1 border-teal-400' }>
                    <svg
                            class={ 'absolute top-0 left-0 w-16 h-auto' }
                            viewBox='-51.2 -51.2 614.41 614.41'
                            xml-space='preserve'>
                        <g
                                class={ 'stroke-teal-400/80' }
                                id='SVGRepo_tracerCarrier'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                        />
                        <g id='SVGRepo_iconCarrier'>
                            <g transform='translate(0 -1)'>
                                <g>
                                    <g>
                                        <path
                                                d='M388.89,314.055c-11.435-2.773-22.955,4.373-25.664,15.829c-2.731,11.456,4.373,22.955,15.829,25.664 c66.261,15.723,90.283,38.976,90.283,50.795c0,25.493-85.077,64-213.333,64c-128.235,0-213.333-38.507-213.333-64 c0-11.819,24.043-35.072,90.261-50.795c11.477-2.709,18.56-14.208,15.829-25.664c-2.709-11.456-14.229-18.603-25.664-15.829 C43.717,332.871,0.005,365.639,0.005,406.343c0,70.016,128.811,106.667,256,106.667c127.211,0,256-36.651,256-106.667 C512.005,365.639,468.293,332.871,388.89,314.055z'
                                                class={ 'fill-teal-400/60' }/>
                                        <path
                                                d='M256.015,171.681c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333 S244.239,171.681,256.015,171.681z'
                                                class={ 'fill-teal-400/60' }/>
                                        <path
                                                d='M228.239,398.518l8.683,17.365c3.627,7.232,11.008,11.797,19.093,11.797s15.467-4.565,19.093-11.797l18.389-36.779 c22.379-44.779,49.984-88.149,76.672-130.091l12.16-19.136c15.061-23.808,23.019-51.307,23.019-79.531 c0-42.496-18.197-83.115-49.92-111.445C323.727,10.592,281.082-2.975,238.565,2.017C172.175,9.569,117.349,63.03,108.154,129.121 c-5.44,39.168,4.352,78.059,27.541,109.547C171.877,287.691,200.122,342.241,228.239,398.518z M256.015,86.347 c35.285,0,64,28.715,64,64c0,35.285-28.715,64-64,64s-64-28.715-64-64C192.015,115.062,220.73,86.347,256.015,86.347z'
                                                class={ 'fill-red-400/60' }/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    
                    <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black' }>
                       Batticaloa
                    </pre>
                    <pre class={ 'absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2' }>
               Assigned Service Area
                     </pre>
                </div>
                
                <div class={ 'relative flex-1 pl-4 flex flex-col items-stretch justify-center' }>
                    <pre>
                        <span class={ 'text-sm' }>Sales Group: </span>
                        <br/>
                        <span class={ 'text-lg font-semibold text-v-text-body' }>
                            { 'Anuradhapura - NewTown' }
                        </span>
                    </pre>
                    <pre class={ 'absolute top-5/12 left-6/12 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-v-text-body' }>Contribution To Group</pre>
                    <div class={ 'relative w-full h-9/12' }>
                        <pre class={ 'absolute top-6/12 left-5/12 -translate-x-1/2 -translate-y-1/2 text-5xl font-black' }>
                            { '90,000'.padStart(
                                    9,
                                    ' '
                            ) }
                        </pre>
                        <pre class={ 'absolute top-7/12 left-9/12 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold' }>
                            /
                        </pre>
                        <pre class={ 'absolute top-8/12 left-10/12 -translate-x-1/2 -translate-y-1/2' }>
                            { '200K' }
                        </pre>
                    </div>
                </div>
            
            </div>
            <div class={ 'w-full h-fit flex flex-row items-center justify-end' }>
                <DropdownMenu>
                    <DropdownMenu.Trigger class={ 'px-4 py-2 flex flex-row items-center justify-start gap-4 rounded-md border-2 border-teal-400 bg-teal-200 text-teal-600 hover:border-yellow-400' }>
                        <pre>Actions</pre>
                        <DropdownMenu.Icon>
                            <BiRegularChevronDown size={ 18 }/>
                        </DropdownMenu.Icon>
                    </DropdownMenu.Trigger>
                    
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content class={ 'flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                            
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger class={ 'cursor-pointer' }>
                                    <div class={ 'px-4 py-2 flex flex-row items-center justify-start gap-4 hover:bg-teal-400' }>
                                        <pre>Change Service Area</pre>
                                        <BiRegularChevronRight/>
                                    </div>
                                </DropdownMenu.SubTrigger>
                                
                                <DropdownMenu.Portal>
                                    <DropdownMenu.SubContent class={ 'px-4 py-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                        <DropdownMenu.RadioGroup onChange={ updateEmployeeServiceArea }>
                                            <For
                                                    each={ [
                                                        'Moratuwa',
                                                        'Kuliyapitiya',
                                                        'Hambantota',
                                                        'Weligama',
                                                        'Kalmunai',
                                                        'Gampaha',
                                                        'Matara',
                                                    ] }>
                                                { (service_area) => {
                                                    return <DropdownMenu.RadioItem
                                                            value={ service_area }
                                                            class={ 'px-4 py-2 flex flex-row items-center justify-start gap-4  rounded-md hover:bg-teal-400 cursor-pointer' }>
                                                        <div class={ 'aspect-square w-4 h-auto ' }>
                                                            <DropdownMenu.ItemIndicator class={ '' }>
                                                                <BiRegularCircle/>
                                                            </DropdownMenu.ItemIndicator>
                                                        </div>
                                                        <pre>{ service_area }</pre>
                                                    </DropdownMenu.RadioItem>
                                                } }
                                            </For>
                                        </DropdownMenu.RadioGroup>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                            
                            <DropdownMenu.Sub>
                                <DropdownMenu.SubTrigger class={ 'cursor-pointer' }>
                                    <div class={ 'px-4 py-2 flex flex-row items-center justify-start gap-4 hover:bg-teal-400' }>
                                        <pre>Change Sales Group</pre>
                                        <BiRegularChevronRight/>
                                    </div>
                                </DropdownMenu.SubTrigger>
                                
                                <DropdownMenu.Portal>
                                    <DropdownMenu.SubContent class={ 'px-4 py-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                        <DropdownMenu.RadioGroup onChange={ updateEmployeeSalesGroup }>
                                            <For
                                                    each={ [
                                                        'Bandarawela',
                                                        'Colombo',
                                                        'Anuradhapura',
                                                        'Gampola',
                                                        'Galle',
                                                        'Kegalle',
                                                        'Hambantota',
                                                        'Chilaw',
                                                        'Ratnapura',
                                                        'Chilaw'
                                                    ] }>
                                                { (sales_group) => {
                                                    return <DropdownMenu.RadioItem
                                                            value={ sales_group }
                                                            class={ 'px-4 py-2 flex flex-row items-center justify-start gap-4  rounded-md hover:bg-teal-400 cursor-pointer' }>
                                                        <div class={ 'aspect-square w-4 h-auto ' }>
                                                            <DropdownMenu.ItemIndicator class={ '' }>
                                                                <BiRegularCircle/>
                                                            </DropdownMenu.ItemIndicator>
                                                        </div>
                                                        <pre>{ sales_group }</pre>
                                                    </DropdownMenu.RadioItem>
                                                } }
                                            </For>
                                        </DropdownMenu.RadioGroup>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                        
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu>
            </div>
        </div>
    </div>
}


function SyncHealth() {
    
    function forceSync() {
        toast('Sending force sync call...')
    }
    
    
    return <div class={ 'row-start-1 row-span-2 col-start-9 col-span-4 card' }>
        
        <div class={ 'relative w-full h-full' }>
            
            <svg
                    class={ 'aspect-auto w-16' }
                    viewBox='0 0 124.392 124.391'
                    xml-space='preserve'>
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                <g id='SVGRepo_iconCarrier'>
                    <g>
                        <path
                                class={ 'fill-teal-400/80' }
                                d='M22.496,124.391h7.7c2.4,0,4.5-1.4,5.5-3.601l0.7-1.699c0.5-1.101,1.6-1.801,2.7-1.801h23.1h22.4c1.2,0,2.2,0.7,2.7,1.801 l0.8,1.8c1,2.1,3.101,3.5,5.5,3.5h8.2c4.4,0,7.3-4.601,5.4-8.601l-33.5-71.099l0,0c-3.301,2.3-7.201,3.7-11.5,3.7 c-4.6,0-8.9-1.6-12.2-4.2c-0.1,0.2-0.2,0.4-0.3,0.6l-32.6,71.1C15.196,119.891,18.096,124.391,22.496,124.391z M53.796,78.091 l5.5-13.301c0.5-1.3,1.7-1.899,2.8-1.8c1.101,0,2.2,0.601,2.7,1.8l5.699,13.301c0.801,2-0.6,4.199-2.799,4.199h-5.5h-5.6 C54.396,82.291,52.996,80.091,53.796,78.091z M45.596,99.191l0.5-1.1c0.5-1.101,1.6-1.801,2.7-1.801h26.699 c1.201,0,2.201,0.7,2.701,1.801l0.5,1.1c0.899,2-0.5,4.2-2.701,4.2H48.396C46.196,103.391,44.696,101.191,45.596,99.191z'/>
                        <circle cx='62.196' cy='28.391' r='12' class={ 'fill-red-500/60' }/>
                        <path
                                class={ 'fill-teal-400/60' }
                                d='M86.196,43.091c0.899,0.7,2,1,3,1c1.5,0,3-0.7,4-2c3-4,4.6-8.7,4.6-13.7c0-5.1-1.7-10-4.9-14c-1.699-2.2-4.9-2.5-7-0.8 c-2.199,1.7-2.5,4.9-0.8,7c1.8,2.2,2.7,4.9,2.7,7.8c0,2.8-0.9,5.4-2.6,7.6C83.495,38.291,83.995,41.391,86.196,43.091z'/>
                        <path
                                class={ 'fill-teal-400/60' }
                                d='M104.796,55.491c0.9,0.7,2,1,3,1c1.5,0,3-0.7,4-2c5.8-7.5,8.8-16.5,8.8-26c0-9.8-3.2-19-9.3-26.6c-1.7-2.2-4.9-2.5-7-0.8 c-2.2,1.7-2.5,4.9-0.801,7c4.601,5.8,7.101,12.9,7.101,20.4c0,7.3-2.3,14.2-6.7,19.9C102.196,50.691,102.596,53.891,104.796,55.491 z'/>
                        <path
                                class={ 'fill-teal-400/60' }
                                d='M38.496,13.591c-2.2-1.7-5.3-1.4-7,0.8c-3.1,4-4.9,8.9-4.9,14c0,5,1.6,9.7,4.6,13.7c1,1.3,2.5,2,4,2c1.1,0,2.1-0.3,3-1 c2.2-1.7,2.6-4.8,0.9-7c-1.7-2.2-2.6-4.8-2.6-7.6c0-2.9,0.9-5.6,2.7-7.8C40.996,18.491,40.696,15.291,38.496,13.591z'/>
                        <path
                                class={ 'fill-teal-400/60' }
                                d='M20.096,1.191c-2.2-1.7-5.3-1.4-7,0.8c-6.1,7.6-9.3,16.8-9.3,26.6c0,9.5,3,18.5,8.8,26c1,1.3,2.5,2,4,2c1.1,0,2.1-0.3,3-1 c2.2-1.7,2.6-4.8,0.9-7c-4.4-5.8-6.7-12.7-6.7-19.9c0-7.5,2.5-14.5,7.1-20.4C22.596,5.991,22.296,2.891,20.096,1.191z'/>
                    </g>
                </g>
            </svg>
            <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8/12 text-8xl font-black' }>
                       3H
                    </pre>
            <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8/12' }>ago</pre>
            <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12' }>
                        Last Synced
                    </pre>
            
            <div class={ 'absolute bottom-0 left-0 right-0 flex flex-col items-stretch' }>
                <PrimaryButton
                        onClick={ forceSync }
                        getIsBusy={ () => false }
                        getIsDisabled={ () => false }>
                    <PrimaryButton.Icon>
                        <AiOutlineCloudSync size={ 22 }/>
                    </PrimaryButton.Icon>
                    <PrimaryButton.Label>
                        <pre class={ '' }>Force Sync</pre>
                    </PrimaryButton.Label>
                </PrimaryButton>
            </div>
        </div>
    
    </div>
}


function SalesGroup() {
    return <div class={ 'row-start-3 row-span-2 col-start-9 col-span-4 bg-teal-400/30 border-2 border-teal-400/60 rounded-md shadow-v-skeuo-outter ' }>
        
        <div class={ 'relative w-full h-full p-4' }>
            
                    <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8/12 text-8xl font-black' }>
                       3H
                    </pre>
            <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8/12' }>ago</pre>
            <pre class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12' }>
                        Last Synced
                    </pre>
            
            <pre class={ 'absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2' }>
                User Active Status
            </pre>
        
        </div>
    
    </div>
}


function ActivityTimeline() {
    return <div class={ 'row-start-9 row-span-6 col-start-1 col-span-12 bg-teal-400/60 border-2 border-teal-200/60 rounded-md shadow-v-skeuo-outter ' }></div>
}


function LabeledValue(props: { label: string; value: number | string }) {
    return <div class={ 'w-full h-fit flex flex-col items-start justify-start gap-1' }>
        <div class={ 'font-semibold text-sm text-v-text-body' }>{ props.label }</div>
        <pre class={ 'font-bold text-v-text-main' }>{ props.value }</pre>
    </div>
}