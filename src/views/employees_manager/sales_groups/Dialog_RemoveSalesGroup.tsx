import { useMutation, useQuery, useQueryClient }  from '@tanstack/solid-query';
import { AiTwotoneWarning }                       from 'solid-icons/ai';
import { BsDot }                                  from 'solid-icons/bs';
import { FaSolidPlus, FaSolidSort, FaSolidTrash } from 'solid-icons/fa';
import { IoClose }                                from 'solid-icons/io';
import { createSignal }                           from 'solid-js';
import { toast }                                  from 'solid-toast';
import PrimaryButton                              from '../../../common_components/PrimaryButton';
import api                                        from '../../../wretch/api';
import { Dialog }                                 from '@kobalte/core/dialog';
import { Select }                                 from '@kobalte/core/select'



export default function Dialog_RemoveSalesGroup(props: {
    getIsBusy: () => boolean,
    setIsBusy: (state: boolean) => void,
    getIsOpen: () => boolean,
    onOpenStateChange: (state: boolean) => void
}) {
    const queryClient                                      = useQueryClient()
    const [ getSalesGroupToDelete, setSalesGroupToDelete ] = createSignal<string>('')
    const querySalesGroups                                 = useQuery(() => {
        return {
            queryKey: [ 'sales_groups' ],
            async queryFn() {
                return await api.sales_group.getSalesGroups()
            },
            retry: 3,
        }
    })
    
    const removeSalesGroupMutation = useMutation(() => {
        return {
            mutationKey: [ 'sales_group', 'remove', getSalesGroupToDelete() ],
            async mutationFn() {
                if (!getSalesGroupToDelete()) {
                    toast.error('Please Select a SalesGroup to Remove')
                    return
                }
                
                return await api.sales_group.removeSalesGroup(getSalesGroupToDelete())
            },
            onMutate : async () => {
                props.setIsBusy(true)
                await queryClient.setQueryData([ 'sales_groups' ], (salesGroups) => {
                    return (salesGroups as Array<Record<string, any>>).filter((salesGroup) => {
                        return salesGroup.sales_group_id !== getSalesGroupToDelete()
                    })
                })
            },
            onSettled: async () => {
                props.setIsBusy(false)
            },
            retry    : false,
            onSuccess: async (data) => {
                await queryClient.setQueryData([ 'sales_groups' ], data)
                toast.success('Sales group deleted')
            },
            onError  : (e) => {
                console.debug(e)
                toast.error('Could not remove sales group')
                
            }
            
        }
    })
    
    return (<Dialog
            open={ props.getIsOpen() }
            onOpenChange={ props.onOpenStateChange }
    >
        <Dialog.Portal>
            <Dialog.Overlay class={ 'bg-teal-400/30' }/>
            <div class={ 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' }>
                <Dialog.Content class={ 'flex flex-col items-stretch justify-start bg-teal-200 border-2 border-teal-400 rounded-md' }>
                    <div class={ 'flex flex-row items-center justify-between gap-12 border-b-2 border-teal-400' }>
                        <Dialog.Title class={ 'p-4 font-semibold' }>
                            Remove Sales Group
                        </Dialog.Title>
                        <Dialog.CloseButton class={ 'p-4 border-l-2 border-teal-400' }>
                            <IoClose size={ 16 }/>
                        </Dialog.CloseButton>
                    </div>
                    <div class={ 'p-4 flex flex-col items-stretch justify-start gap-2' }>
                        <Select
                                class={ 'flex flex-col items-stretch justify-start gap-1' }
                                options={ querySalesGroups.data?.map((sales_group) => sales_group.sales_group_name) ??
                                          [] }
                                placeholder={ 'Select sales group to remove' }
                                itemComponent={ ({ item }) => {
                                    return <Select.Item
                                            item={ item }
                                            class={ 'px-3 py-2 flex flex-row items-center justify-start gap-4 hover:bg-teal-100 rounded-md cursor-pointer' }
                                    >
                                        <Select.ItemLabel>
                                            <pre>{ item.rawValue }</pre>
                                        </Select.ItemLabel>
                                        <Select.ItemIndicator>
                                            <BsDot size={ 14 }/>
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                } }
                                onChange={ (sales_group_name) => {
                                    
                                    if (!sales_group_name) {
                                        return
                                    }
                                    
                                    const selectedSalesGroup = querySalesGroups.data?.find((sales_group) => {
                                        return sales_group.sales_group_name === sales_group_name
                                    })
                                    
                                    if (!selectedSalesGroup || !selectedSalesGroup.sales_group_id) {
                                        return
                                    }
                                    
                                    setSalesGroupToDelete(selectedSalesGroup.sales_group_id)
                                } }
                        >
                            <Select.Label>
                                Select sales group delete
                            </Select.Label>
                            
                            <Select.Trigger class={ 'px-3 py-2 w-full h-fit flex flex-row items-center justify-between gap-4 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                <Select.Value>
                                    { (state) => {
                                        console.debug(state)
                                        const value = state.selectedOption()
                                        
                                        if (value) {
                                            return <>{ value }</>
                                        }
                                        
                                        return <>No Value</>
                                    }
                                    
                                    }
                                </Select.Value>
                                <Select.Icon>
                                    <FaSolidSort size={ 14 }/>
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content class={ 'p-2 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                                    <Select.Listbox/>
                                </Select.Content>
                            </Select.Portal>
                        </Select>
                    </div>
                    
                    <div class={ 'p-4 flex flex-col items-stretch' }>
                        <PrimaryButton
                                onClick={ () => removeSalesGroupMutation.mutate() }
                                getIsBusy={ props.getIsBusy }
                                getIsDisabled={ props.getIsBusy }
                        >
                            <PrimaryButton.Icon>
                                <FaSolidTrash size={ 14 }/>
                            </PrimaryButton.Icon>
                            <PrimaryButton.Label>
                                <pre>Remove Sales Group</pre>
                            </PrimaryButton.Label>
                        </PrimaryButton>
                    </div>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    </Dialog>)
}
