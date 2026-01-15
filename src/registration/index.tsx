import {useMutation}             from "@tanstack/solid-query";
import {Component, createSignal} from "solid-js";
import {Dynamic}                 from "solid-js/web";
import {useCNTXAuth}             from "../contexts/cntx_auth";
import {api}                     from "../wretch";
import Step_1                    from "./components/Step_1";
import Step_3                    from "./components/Step_3";
import {TStepProps}              from "./components/types";

const steps: Component<TStepProps>[] = [
    Step_1,
    // 1: Step_2,
    Step_3
]

export default function OrganizationRegistration() {
    const {getSupabaseUserProfile} = useCNTXAuth()
    const [getStep, setStep]       = createSignal(0)
    const [getData, setData]       = createSignal<{
        organization_name: string
        organization_admin_email: string,
        organization_admin_phone: string,
        organization_logo_url: string,
    }>({
           organization_name       : "",
           organization_logo_url   : "",
           organization_admin_email: getSupabaseUserProfile()?.email ?? "",
           organization_admin_phone: "",
       })
    const [getIsBusy, setIsBusy]   = createSignal<boolean>(false)

    const {
              status,
              mutate,
              data,
              error,
          } = useMutation(() => {
        return {
            mutationKey : [
                'register',
                'organization'
            ],
            mutationFn  : async (data, variables) => {
                return await api.post({
                                          ...getData()
                                      }, "/organization/add")
                                .json<{
                                    organization_id: string,
                                    organization_name: string,
                                    organization_email: string,
                                    organization_admin_id: string,
                                }>();
            },
            onMutate    : () => {
                setIsBusy(true)
            },
            onSettled   : (responseData) => {
                setIsBusy(false)
                if (import.meta.env.DEV) {
                    console.debug(responseData)
                }
            },
            throwOnError: true,
            retry       : false,
        }
    })


    async function submitOrganizationData() {
        setIsBusy(true)
        try {
            const {
                      organization_admin_email,
                      organization_admin_phone,
                      organization_logo_url,
                      organization_name
                  } = getData()

            if (!organization_name || !organization_admin_email || !organization_admin_phone || !organization_logo_url) {
                throw new Error('[-] Incomplete registration data')
            }

            mutate()
        } catch (e) {
            throw new Error('Registration failed...')
        } finally {
            setIsBusy(false)
        }
    }

    function storeData(data: Record<string, any>) {
        setData((prevData) => {
            return {
                ...prevData,
                ...data
            }
        })
    }

    return <div class={'relative w-full h-full flex flex-col items-center justify-center gap-12'}>
        <div class={'absolute top-1/12 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black'}>VANTAGE</div>
        <Dynamic
            component={steps[getStep()]}
            onButtonClick={async (data) => {
                storeData(data);

                if (getStep() >= steps.length - 1) {
                    await submitOrganizationData()
                    return
                }

                setStep((prevStep) => {
                    if (prevStep >= steps.length - 1) {
                        return prevStep
                    }

                    return prevStep + 1
                })
            }}
            getIsBusy={getIsBusy}
            setIsBusy={setIsBusy}
        />
    </div>
}
