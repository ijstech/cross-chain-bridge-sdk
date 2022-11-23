import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    logic: string;
    data: string;
}
export declare class ERC1967Proxy extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, _value: number | BigNumber): Promise<string>;
    parseAdminChangedEvent(receipt: TransactionReceipt): ERC1967Proxy.AdminChangedEvent[];
    decodeAdminChangedEvent(event: Event): ERC1967Proxy.AdminChangedEvent;
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.BeaconUpgradedEvent[];
    decodeBeaconUpgradedEvent(event: Event): ERC1967Proxy.BeaconUpgradedEvent;
    parseUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.UpgradedEvent[];
    decodeUpgradedEvent(event: Event): ERC1967Proxy.UpgradedEvent;
    private assign;
}
export declare module ERC1967Proxy {
    interface AdminChangedEvent {
        previousAdmin: string;
        newAdmin: string;
        _event: Event;
    }
    interface BeaconUpgradedEvent {
        beacon: string;
        _event: Event;
    }
    interface UpgradedEvent {
        implementation: string;
        _event: Event;
    }
}
