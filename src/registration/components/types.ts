export type TStepProps<T = {}> =
    {
        onButtonClick: (data: Record<string, any>) => void,
        getIsBusy: () => boolean,
        setIsBusy: (isBusy: boolean) => void;
    }
    & T