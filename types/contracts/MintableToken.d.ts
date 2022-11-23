import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IBurnFromParams {
    account: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintParams {
    account: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export declare class MintableToken extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): MintableToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): MintableToken.ApprovalEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): MintableToken.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): MintableToken.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): MintableToken.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): MintableToken.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MintableToken.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): MintableToken.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): MintableToken.TransferEvent[];
    decodeTransferEvent(event: Event): MintableToken.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): MintableToken.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): MintableToken.TransferOwnershipEvent;
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (account: string): Promise<BigNumber>;
    };
    burn: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    burnFrom: {
        (params: IBurnFromParams): Promise<TransactionReceipt>;
        call: (params: IBurnFromParams) => Promise<void>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<boolean>;
    };
    name: {
        (): Promise<string>;
    };
    newOwner: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    symbol: {
        (): Promise<string>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module MintableToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
}
