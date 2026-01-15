export type TStepProps<T = {}> =
    {
        onButtonClick: (data: Record<string, any>) => void,
        isBusy: boolean,
        setIsBusy: (isBusy: boolean) => void;
    }
    & T