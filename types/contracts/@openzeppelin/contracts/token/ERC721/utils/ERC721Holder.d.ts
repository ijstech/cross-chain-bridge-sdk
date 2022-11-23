import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IOnERC721ReceivedParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
    param4: string;
}
export declare class ERC721Holder extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    onERC721Received: {
        (params: IOnERC721ReceivedParams): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams) => Promise<string>;
    };
    private assign;
}
