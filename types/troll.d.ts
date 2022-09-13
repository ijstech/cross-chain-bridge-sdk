import { TransactionReceipt, BigNumber } from '@ijstech/eth-wallet';
import { OSWAP_BridgeVault, OSWAP_BridgeVaultTrollRegistry, OSWAP_MainChainTrollRegistry, OSWAP_SideChainTrollRegistry, ERC20 as xErc20 } from './contracts';
import { Order } from './crossChain';
import { GeneralTroll, CancelOrder, VoidOrder } from './generalTroll';
export declare class Troll extends GeneralTroll {
    _isSuperTroll(params: {
        chainId: number;
        returnFalseIfBlocked: boolean;
    }): Promise<boolean>;
    canCreateTransactionSideChainRegistry(chainId: number): Promise<boolean>;
    canTrollCreateTransactionSideChainRegistry(params: {
        troll: string;
        chainId: number;
    }): Promise<boolean>;
    canCreateTransaction(params: {
        chainId: number;
        asset: string;
    }): Promise<boolean>;
    canTrollCreateTransaction(params: {
        troll: string;
        chainId: number;
        asset: string;
    }): Promise<boolean>;
    hashAddTrollForSigning(params: {
        chainId: number;
        addTrollEvent: OSWAP_MainChainTrollRegistry.StakeSuperTollEvent | OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent;
        nonce: number | BigNumber;
    }): Promise<string>;
    addTrollSideChain(params: {
        signatures: string[];
        chainId: number;
        event: OSWAP_MainChainTrollRegistry.StakeSuperTollEvent | OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent;
        nonce: number | BigNumber;
    }): Promise<OSWAP_SideChainTrollRegistry.AddTrollEvent>;
    private _prepareNewOrder;
    prepareNewOrder(params: {
        sourceChain: number;
        orderEvent: OSWAP_BridgeVault.NewOrderEvent;
        raw?: boolean;
    }): Promise<Order>;
    prepareAmendOrder(params: {
        sourceChain: number;
        amendOrderRequestEvent: OSWAP_BridgeVault.AmendOrderRequestEvent;
        raw?: boolean;
    }): Promise<Order>;
    prepareCancelOrder(params: {
        targetChainId: number;
        event: OSWAP_BridgeVault.RequestCancelOrderEvent;
    }): Promise<CancelOrder>;
    prepareCancelOrderFromUnexecuteOrder(params: {
        srcChainId: number;
        srcToken: string;
        orderId: number | BigNumber;
    }): Promise<{
        sourceChainId: number;
        srcToken: string;
        srcVault: string;
        orderId: number | BigNumber;
        owner: string;
        canceledByOrderOwner: boolean;
        protocolFee: number | BigNumber;
    }>;
    swap(params: {
        signatures: string[];
        order: Order;
        pair: string[];
    }): Promise<{
        swapEvent: OSWAP_BridgeVault.SwapEvent;
        transferEvent: xErc20.TransferEvent;
    }>;
    cancelOrder(params: {
        signatures: string[];
        cancelOrder: CancelOrder;
    }): Promise<OSWAP_BridgeVault.OrderCanceledEvent>;
    unstakeApprove(params: {
        chainId: number;
        signatures: string[];
        event: OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
        nonce: number | BigNumber;
    }): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent>;
    hashUpdateTrollForSigning(params: {
        chainId: number;
        event: OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
    }): Promise<string>;
    updateTrollSideChain(params: {
        signatures: string[];
        chainId: number;
        event: OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
    }): Promise<OSWAP_SideChainTrollRegistry.UpdateTrollEvent>;
    hashRemoveTrollForSigning(params: {
        chainId: number;
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonce: number | BigNumber;
    }): Promise<string>;
    hashUnlockTrollForSigning(params: {
        chainId: number;
        trollProfileIndex: number | BigNumber;
        unlock: boolean;
        penalties: {
            [vaultRegistry: string]: number | BigNumber;
        };
        nonce: number | BigNumber;
    }): Promise<string>;
    unlockSuperTroll(params: {
        chainId: number;
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        unlock: boolean;
        penalties: {
            [vaultRegistry: string]: number | BigNumber;
        };
        nonce: number | BigNumber;
    }): Promise<OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent[]>;
    hashVotingExecutionForSigning(params: {
        chainId: number;
        params: string[];
        nonce: number | BigNumber;
    }): Promise<string>;
    executeVoting(params: {
        chainId: number;
        signatures: string[];
        params: string[];
        nonce: number | BigNumber;
    }): Promise<TransactionReceipt>;
    rebalancerWithdraw(params: {
        chainId: number;
        signatures: string[];
        asset: string;
        assetAmount: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<{
        rebalanceEvent: OSWAP_BridgeVault.RebalanceEvent;
        transferEvent: xErc20.TransferEvent;
    }>;
    voidOrder(params: {
        signatures: string[];
        order: VoidOrder;
    }): Promise<OSWAP_BridgeVault.VoidOrderEvent>;
}
