import {Dynamic} from "solid-js/web";
import Step_1 from "./components/Step_1";
import Step_2 from "./components/Step_2";
import Step_3 from "./components/Step_3";
import {createEffect, createSignal, JSXElement} from "solid-js";

export default function Signup() {

    const steps: Record<number, typeof Step_1> = {
        0: Step_1,
        1: Step_2,
        2: Step_3
    }

    const [getStep, setStep] = createSignal(0)
    const [getData, setData] = createSignal<Record<string, any>>({})
    const [getIsBusy, setIsBusy] = createSignal<boolean>(false)

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

    return <div class={'w-full h-full flex flex-col items-center justify-center gap-12'}>
        <div class={'text-6xl font-black'}>VANTAGE</div>
        <Dynamic component={steps[getStep()]}
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
        />
    </div>
}
