import {useMutation} from "@tanstack/solid-query";
import {Dynamic} from "solid-js/web";
import {api} from "../wretch";
import Step_1 from "./components/Step_1";
import Step_2 from "./components/Step_2";
import Step_3 from "./components/Step_3";
import {Component, createEffect, createSignal, JSX, JSXElement, ValidComponent} from "solid-js";
import {TStepProps} from "../authentication/types";

const steps: Record<number, Component<TStepProps>> = {
    0: Step_1,
    1: Step_2,
    2: Step_3
}

export default function OrganizationRegistration() {
    const [getStep, setStep] = createSignal(0)
    const [getData, setData] = createSignal<Record<string, any>>({})
    const [getIsBusy, setIsBusy] = createSignal<boolean>(false)

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
                return await api.post({...getData()}, "organization/add").json<{
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
            return new Response(null, {
                status    : 200,
                statusText: 'OK'
            })
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

                if (getStep() >= Object.keys(steps).length - 1) {
                    await submitOrganizationData()
                    return
                }

                setStep((prevStep) => {
                    if (prevStep >= Object.keys(steps).length - 1) {
                        return prevStep
                    }

                    return prevStep + 1
                })
            }}
            isBusy={getIsBusy()}
            setIsBusy={setIsBusy}
        />
    </div>
}
