import { DropdownMenu }   from '@kobalte/core/dropdown-menu';
import { BsChevronRight } from 'solid-icons/bs';



export default function EmployeesActionsMenu(props: {
    showAddEmployeeDialog: () => void,
    showUpdateEmployeeDialog: () => void;
}) {
    return <div class={ 'absolute bottom-4 right-4' }>
        <DropdownMenu>
            <DropdownMenu.Trigger class={ 'px-3 py-2 flex flex-row items-center justify-start gap-4 bg-teal-200 border-2 border-teal-400 rounded-md' }>
                <pre>Actions</pre>
                <DropdownMenu.Icon>
                    <BsChevronRight size={ 14 }/>
                </DropdownMenu.Icon>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content class={ 'p-2 flex flex-col items-stretch justify-start gap-1 bg-teal-200 border-2 border-teal-400 rounded-md [&>*]:cursor-pointer [&>*]:px-3 [&>*]:py-2 [&>*]:hover:bg-teal-100 [&>*]:rounded-md [&>*]:text-sm' }>
                    <DropdownMenu.Item
                            class={ 'flex flex-row items-center justify-between gap-4' }
                            onClick={ props.showAddEmployeeDialog }
                    >
                        <pre>Add Employee</pre>
                        <pre class={ 'text-teal-400' }>Ctrl + N</pre>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                            class={ 'flex flex-row items-center justify-between gap-4' }
                            onClick={ props.showUpdateEmployeeDialog }
                    >
                        <pre>Update Employee</pre>
                        <pre class={ 'text-teal-400' }>Ctrl + U</pre>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu>
    </div>
}