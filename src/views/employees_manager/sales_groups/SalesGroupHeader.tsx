import { OcChevrondown } from 'solid-icons/oc';



export default function SalesGroupHeader(props: {
    sales_group_name: string,
    sales_group_members: {
        active: number,
        total: number
    },
    sales_group_sales: {
        this_month: number,
        last_month: number
    }
}) {
    return (<div class={ 'w-full h-fit px-3 py-3 flex flex-row item-center justify-between gap-12' }>
        <div class={ 'w-fit max-w-2/12 font-semibold text-left text-v-text-body' }>
            <pre>{ props.sales_group_name.padEnd(20, ' ') }</pre>
        </div>
        <div class={ 'w-full' }/>
        <div class={ 'w-fit max-w-3/12 flex flex-row item-center justify-end gap-1' }>
                    <pre>
                        { props.sales_group_members.active.toString()
                               .padStart(3, ' ') }
                    </pre>
            <div>/</div>
            <pre>
                        { props.sales_group_members.total.toString()
                               .padStart(3, ' ') }
                    </pre>
        </div>
        <div class={ 'w-fit max-w-2/12 text-left whitespace-nowrap' }>
                    <pre>
                    { `Rs: ${ props.sales_group_sales.last_month.toString()
                                   .padStart(6, ' ') }` }
                    </pre>
            <pre>
                    { `Rs: ${ props.sales_group_sales.this_month.toString()
                                   .padStart(6, ' ') }` }
                    </pre>
        </div>
        
        <div class={ 'w-fit max-w-2/12 flex flex-row item-center justify-end gap-1' }>
            {/*
             <pre>{ props.prospects.toString()
             .padStart(
             3,
             ' '
             ) }</pre>
             /
             <pre>{ props.salesInProgress.toString()
             .padStart(
             3,
             ' '
             ) }</pre>
             /
             <pre>{ props.closedDeals.toString()
             .padStart(
             3,
             ' '
             ) }</pre>
             */ }
        </div>
        
        <div class={ 'w-fit max-w-1/12 flex flex-col item-center justify-end' }>
            <OcChevrondown/>
        </div>
    </div>)
}