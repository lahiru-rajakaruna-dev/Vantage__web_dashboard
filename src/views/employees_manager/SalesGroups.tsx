import { Accordion }           from '@kobalte/core/accordion';
import { BiSolidArrowToRight } from 'solid-icons/bi';
import { OcChevrondown }       from 'solid-icons/oc';
import { For }                 from 'solid-js';





const sales_groups = [
    {
        'id'             : '3bb55be5-f895-4640-b660-bcfbe1eb56ab',
        'title'          : 'Matara',
        'activeMembers'  : 90,
        'totalMembers'   : 107,
        'thisMonthsSales': 5715,
        'prospects'      : 102,
        'salesInProgress': 12,
        'closedDeals'    : 126,
        'members'        : [
            {
                'name'           : {
                    'first': 'Thomas',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 805,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Kevin',
                    'last' : 'Fernando'
                },
                'thisMonthsSales': 730,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Robert',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 446,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Michael',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 384,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'David',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 152,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Linda',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 497,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Kevin',
                    'last' : 'Gunawardena'
                },
                'thisMonthsSales': 695,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Sarah',
                    'last' : 'Silva'
                },
                'thisMonthsSales': 479,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'David',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 243,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Robert',
                    'last' : 'Dissanayake'
                },
                'thisMonthsSales': 165,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Susan',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 251,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Daniel',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 648,
                'status'         : 'PENDING'
            }
        ]
    },
    {
        'id'             : '21c14366-c578-435a-9815-3ab5fadd4f33',
        'title'          : 'Jaffna',
        'activeMembers'  : 70,
        'totalMembers'   : 85,
        'thisMonthsSales': 8656,
        'prospects'      : 154,
        'salesInProgress': 34,
        'closedDeals'    : 47,
        'members'        : [
            {
                'name'           : {
                    'first': 'Robert',
                    'last' : 'Fernando'
                },
                'thisMonthsSales': 806,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Sarah',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 525,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Barbara',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 577,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Paul',
                    'last' : 'Abeykoon'
                },
                'thisMonthsSales': 346,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Barbara',
                    'last' : 'Abeykoon'
                },
                'thisMonthsSales': 424,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'James',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 946,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Barbara',
                    'last' : 'Gunawardena'
                },
                'thisMonthsSales': 921,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'David',
                    'last' : 'Abeykoon'
                },
                'thisMonthsSales': 664,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Daniel',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 207,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'David',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 818,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Barbara',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 212,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Thomas',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 363,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Michael',
                    'last' : 'Fernando'
                },
                'thisMonthsSales': 716,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Daniel',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 676,
                'status'         : 'INACTIVE'
            }
        ]
    },
    {
        'id'             : 'c0591329-1d56-4f74-b9e3-c8dd8443ed4e',
        'title'          : 'Ratnapura',
        'activeMembers'  : 47,
        'totalMembers'   : 59,
        'thisMonthsSales': 8179,
        'prospects'      : 87,
        'salesInProgress': 29,
        'closedDeals'    : 113,
        'members'        : [
            {
                'name'           : {
                    'first': 'Daniel',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 628,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Jessica',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 702,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Jessica',
                    'last' : 'Dissanayake'
                },
                'thisMonthsSales': 551,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Susan',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 934,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Kevin',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 125,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Paul',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 498,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Daniel',
                    'last' : 'Gunawardena'
                },
                'thisMonthsSales': 889,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Thomas',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 824,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Michael',
                    'last' : 'Perera'
                },
                'thisMonthsSales': 665,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'James',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 496,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Emily',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 763,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Linda',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 175,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Michael',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 445,
                'status'         : 'PENDING'
            }
        ]
    },
    {
        'id'             : '5c03583e-b5d8-4164-94f9-72a0d1b18bca',
        'title'          : 'Colombo',
        'activeMembers'  : 25,
        'totalMembers'   : 47,
        'thisMonthsSales': 7947,
        'prospects'      : 198,
        'salesInProgress': 39,
        'closedDeals'    : 95,
        'members'        : [
            {
                'name'           : {
                    'first': 'Thomas',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 614,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Jessica',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 631,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Maria',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 824,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'David',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 241,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Kevin',
                    'last' : 'Wijesinghe'
                },
                'thisMonthsSales': 547,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Kevin',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 738,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Thomas',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 516,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'James',
                    'last' : 'Rajapaksa'
                },
                'thisMonthsSales': 268,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Robert',
                    'last' : 'Fernando'
                },
                'thisMonthsSales': 499,
                'status'         : 'INACTIVE'
            }
        ]
    },
    {
        'id'             : '1d3ad380-0189-472e-9761-6d0c84d27818',
        'title'          : 'Kurunegala',
        'activeMembers'  : 19,
        'totalMembers'   : 113,
        'thisMonthsSales': 8868,
        'prospects'      : 179,
        'salesInProgress': 10,
        'closedDeals'    : 21,
        'members'        : [
            {
                'name'           : {
                    'first': 'Maria',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 981,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Sarah',
                    'last' : 'Fernando'
                },
                'thisMonthsSales': 873,
                'status'         : 'INACTIVE'
            },
            {
                'name'           : {
                    'first': 'Paul',
                    'last' : 'Jayasinghe'
                },
                'thisMonthsSales': 676,
                'status'         : 'PENDING'
            },
            {
                'name'           : {
                    'first': 'Linda',
                    'last' : 'Silva'
                },
                'thisMonthsSales': 257,
                'status'         : 'ACTIVE'
            },
            {
                'name'           : {
                    'first': 'Linda',
                    'last' : 'Liyanage'
                },
                'thisMonthsSales': 633,
                'status'         : 'ACTIVE'
            }
        ]
    }
]

export default function SalesGroups() {
    return <Accordion defaultValue={ [] }
                      multiple={ true }
                      class={ 'w-full max-w-full px-4 h-fit flex flex-col items-stretch justify-start gap-1 overflow-x-visible' }>
        <For each={ sales_groups }>
            { (item) => {
                return (<Accordion.Item value={ item.id }
                                        class={ 'w-full h-fit min-h-12 rounded-md transform-3d perspective-normal perspective-origin-top overflow-x-visible' }>
                    
                    <Accordion.Header class={ 'w-full h-fit rounded-md bg-teal-300/60 hover:bg-yellow-300/60 hover:translate-z-3 hover:shadow-[0px_2px_4px_2px] shadow-teal-600/10 transition-all ease-in-out duration-300' }>
                        <Accordion.Trigger class={ 'w-full h-fit' }>
                            <div class={ 'w-full h-fit px-3 py-3 flex flex-row items-center justify-between gap-12' }>
                                <div class={ 'w-2/12 font-semibold text-left text-v-text-body' }>{ item.title }</div>
                                <div class={ 'w-full' }/>
                                <div class={ 'w-3/12 flex flex-row items-center justify-end gap-1' }>
                                    <div>
                                        { item.activeMembers.toString()
                                              .padStart(3, ' ') }
                                    </div>
                                    <div>/</div>
                                    <div>
                                        { item.totalMembers.toString()
                                              .padStart(3, ' ') }
                                    </div>
                                </div>
                                <div class={ 'w-2/12 text-left whitespace-nowrap' }>
                                    { `Rs: ${ item.thisMonthsSales.toString() }` }
                                </div>
                                <div class={ 'w-3/12 flex flex-row items-center justify-end gap-1' }>
                                    <div>{ item.prospects }</div>
                                    /
                                    <div>{ item.salesInProgress }</div>
                                    /
                                    <div>{ item.closedDeals }</div>
                                </div>
                                <div class={ 'w-1/12 flex flex-col items-center justify-end' }>
                                    <OcChevrondown/>
                                </div>
                            </div>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    
                    <Accordion.Content class={ 'w-full h-fit max-h-[300px] px-2 flex flex-col items-stretch justify-start gap-1 bg-teal-600/60 overflow-y-scroll' }>
                        <For each={ item.members }>
                            { (member) => {
                                return (
                                        <div class={ 'flex flex-row items-center justify-between gap-2 py-3 border-b-2 border-white/60 last:border-transparent' }>
                                            <div class={ 'w-1/12 whitespace-nowrap' }>
                                                { member.name.first + ' ' + member.name.last }
                                            </div>
                                            <div class={ 'w-full' }/>
                                            <div class={ 'w-2/12' }>
                                                { member.thisMonthsSales }
                                            </div>
                                            <div class={ 'w-2/12' }>
                                                { member.status }
                                            </div>
                                            <button class={ 'w-1/12' }>
                                                <BiSolidArrowToRight/>
                                            </button>
                                        </div>)
                            } }
                        </For>
                    </Accordion.Content>
                
                </Accordion.Item>)
            } }
        </For>
    </Accordion>
}
