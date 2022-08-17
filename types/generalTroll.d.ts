import { BigNumber } from '@ijstech/eth-wallet';
import { OSWAP_BridgeVaultTrollRegistry } from './contracts';
import { CrossChainMulti, Order } from './crossChain';
import { BridgeVault } from "./wrappers/bridgeVault";
export interface CancelOrder {
    sourceChainId: number;
    srcToken: string;
    orderId: number | BigNumber;
    owner: string;
    canceledByOrderOwner: boolean;
    protocolFee: number | BigNumber;
}
export interface Config {
    protocolFeeRate: number | BigNumber;
    imbalanceFeeRate: number | BigNumber;
}
export declare class GeneralTroll {
    address: string;
    trollProfileIndex: number | BigNumber;
    protected crosschain: CrossChainMulti;
    protected isSuperTroll: boolean;
    protected vaults: {
        [chainid: number]: {
            [vaultAddress: string]: BridgeVault;
        };
    };
    protected config: Config;
    constructor(address: string, crosschain: CrossChainMulti, isSuperTroll: boolean, config: Config, trollProfileIndex?: number | BigNumber);
    init(trollProfileIndex: number | BigNumber): void;
    _isGeneralTroll(params: {
        chainId: number;
        returnFalseIfBlocked: boolean;
    }): Promise<boolean>;
    protected getChain(chainId: number): import("./crossChain").ISideChain;
    getTargetOrderId(order: Order): Promise<string>;
    signAddress(params: {
        chainId: number;
        address: string;
    }): Promise<string>;
    hashSwapExactTokensForTokens(params: {
        order: Order;
        pair: string[];
    }): Promise<string>;
    signOrder(params: {
        order: Order;
        pair: string[];
    }): Promise<string>;
    hashCancelOrder(cancelOrder: CancelOrder): Promise<string>;
    signCancelOrder(cancelOrder: CancelOrder): Promise<string>;
    hashUnstakeBondRequest(params: {
        chainId: number;
        event: OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
        nonce: number | BigNumber;
    }): Promise<string>;
    signUnstakeBondRequest(params: {
        chainId: number;
        event: OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
        nonce: number | BigNumber;
    }): Promise<string>;
    hashRebalancerWithdraw(params: {
        chainId: number;
        asset: string;
        assetAmount: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<string>;
    signRebalancerWithdraw(params: {
        chainId: number;
        asset: string;
        assetAmount: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<string>;
    hashVoidOrder(order: Order): Promise<string>;
    signVoidOrder(order: Order): Promise<string>;
}
