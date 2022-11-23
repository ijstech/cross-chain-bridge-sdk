declare const _default: {
    abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    bytecode: string;
};
export default _default;
