import {AiOutlinePlus} from "solid-icons/ai";
import {createSignal, Show} from "solid-js";

export default function FileInput(props: {
    description: string,
    onFileSelect: (file: string) => void
}) {
    const [getFile, setFile] = createSignal<string>()

    let filePicker: HTMLInputElement | undefined;

    return (
        <div class={"flex flex-col items-center justify-center gap-4"}>
            <input
                ref={filePicker}
                type={'file'}
                class={'hidden'}
                multiple={false}
                accept={"image/png"}
                onChange={(e) => {
                    if (import.meta.env.DEV) {
                        console.debug(e.currentTarget.files)
                    }

                    if (!e.currentTarget || !e.currentTarget.files || e.currentTarget.files.length <= 0) {
                        throw new Error('No file selected..')
                    }

                    const file = e.currentTarget.files[0]


                    const fileReader = new FileReader()
                    fileReader.onloadend = (event) => {
                        const result = event.target?.result
                        if (import.meta.env.DEV) {
                            console.debug(result)
                        }

                        if (!result) {
                            return
                        }

                        setFile(result as string)

                        props.onFileSelect(result as string)
                    }

                    fileReader.readAsDataURL(file)
                }}/>
            <div
                class={"aspect-square w-24 h-auto flex flex-col items-center justify-center border-2 border-white bg-v-accent/20 text-white text-4xl cursor-pointer"}
                onClick={() => {
                    if (!filePicker) {
                        throw new Error('File picker not found...')
                    }

                    filePicker.click()
                }}>

                <Show
                    when={getFile()}
                    fallback={
                        <AiOutlinePlus/>
                    }>
                    <img
                        src={getFile()}
                        alt={'image'}/>
                </Show>

            </div>
            <div class={"text-v-text-body"}>{props.description}</div>
        </div>
    )
}