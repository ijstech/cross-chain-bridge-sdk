import { BigNumber, Erc20 } from '@ijstech/eth-wallet';
import { CrossChainSingle } from './crossChain';
import { OSWAP_BridgeVault } from "./contracts";
export declare class Trader {
    crosschain: CrossChainSingle;
    constructor(crosschain: CrossChainSingle);
    approveToNewOrder(params: {
        inToken: Erc20;
        amount: number | BigNumber;
    }): Promise<any>;
    newOrder(params: {
        inToken: Erc20;
        inAmount: BigNumber;
        targetChain: number;
        outToken: Erc20;
        minOutAmount: BigNumber;
        to: string;
        expire: number;
    }): Promise<{
        newOrderEvent: OSWAP_BridgeVault.NewOrderEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    amendOrder(params: {
        orderId: number | BigNumber;
        inToken: Erc20;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }): Promise<OSWAP_BridgeVault.AmendOrderRequestEvent>;
    swapOrderStatus(params: {
        inToken: string;
        sourceChainId: number;
        orderId: number;
    }): Promise<number>;
    cancelOrderOnSideChain(params: {
        sourceChainId: number;
        orderId: BigNumber | number;
        inToken: string;
    }): Promise<OSWAP_BridgeVault.RequestCancelOrderEvent>;
    withdrawUnexecutedOrder(params: {
        srcToken: string;
        orderId: BigNumber | number;
    }): Promise<{
        withdrawUnexecutedOrderEvent: OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
}
