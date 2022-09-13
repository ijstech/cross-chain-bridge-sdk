import { Wallet, TransactionReceipt, BigNumber, Erc20, Event } from "@ijstech/eth-wallet";
import { OSWAP_BridgeVault, ERC20 as xErc20 } from '../contracts';
import { TokenList } from '../crossChain';
export interface INewOrder {
    peerChain: BigNumber;
    inAmount: BigNumber;
    outToken: string;
    minOutAmount: BigNumber;
    to: string;
    expire: BigNumber;
}
export interface IOrderParam {
    peerChain: number | BigNumber;
    inAmount: number | BigNumber;
    outToken: string;
    minOutAmount: number | BigNumber;
    to: string;
    expire: number | BigNumber;
}
export declare class BridgeVault {
    address: string;
    _bridgeVault: OSWAP_BridgeVault;
    __tokenList: TokenList;
    __asset: Erc20;
    __govToken: Erc20;
    __decimals: number;
    constructor(wallet: Wallet, address?: string, tokenList?: TokenList);
    deploy(params: {
        vaultRegistry: string;
        configStore: string;
        asset: string;
    }): Promise<string>;
    private toNumber;
    private getTokenDecimals;
    addLiquidity(amount: number | BigNumber): Promise<{
        addLiquidityEvent: OSWAP_BridgeVault.AddLiquidityEvent;
        mintEvent: Erc20.TransferEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    allowance(params: {
        owner: string;
        spender: string;
    }): Promise<BigNumber>;
    approve(params: {
        spender: string;
        amount: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.ApprovalEvent>;
    get asset(): Promise<Erc20>;
    get assetDecimalsScale(): Promise<number>;
    assetPriceAgainstGovToken(params: {
        govTokenOracle: string;
        assetTokenOracle: string;
    }): Promise<BigNumber>;
    balanceOf(account: string): Promise<BigNumber>;
    cancelOrder(params: {
        signatures: string[];
        orderId: number | BigNumber;
        canceledByOrderOwner: boolean;
        protocolFee: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.OrderCanceledEvent>;
    get configStore(): Promise<string>;
    get decimals(): Promise<number>;
    decreaseAllowance(params: {
        spender: string;
        subtractedValue: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.ApprovalEvent>;
    get getChainId(): Promise<number>;
    getOrders(params: {
        start: number | BigNumber;
        length: number | BigNumber;
    }): Promise<INewOrder[]>;
    get govToken(): Promise<Erc20>;
    hashCancelOrderParams(params: {
        orderId: number | BigNumber;
        canceledByOrderOwner: boolean;
        protocolFee: number | BigNumber;
    }): Promise<string>;
    hashOrder(params: {
        owner: string;
        sourceChainId: number | BigNumber;
        orderId: number | BigNumber;
    }): Promise<string>;
    hashSwapParams(params: {
        orderId: string;
        amendment: number | BigNumber;
        order: IOrderParam;
        protocolFee: number | BigNumber;
        pair: string[];
    }): Promise<string>;
    hashVoidOrderParams(orderId: string): Promise<string>;
    hashWithdrawParams(params: {
        owner: string;
        amount: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<string>;
    get imbalance(): Promise<BigNumber>;
    increaseAllowance(params: {
        spender: string;
        addedValue: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.ApprovalEvent>;
    initAddress(vaultRegistry: string): Promise<TransactionReceipt>;
    get lastKnownBalance(): Promise<BigNumber>;
    get lpAssetBalance(): Promise<BigNumber>;
    get name(): Promise<string>;
    newOrder(order: IOrderParam): Promise<{
        newOrderEvent: OSWAP_BridgeVault.NewOrderEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    parseNewOrderEvent(receipt: TransactionReceipt): Promise<OSWAP_BridgeVault.NewOrderEvent>;
    decodeNewOrderEvent(event: Event): Promise<OSWAP_BridgeVault.NewOrderEvent>;
    decodeAmendOrderRequestEvent(event: Event): Promise<OSWAP_BridgeVault.AmendOrderRequestEvent>;
    private _decodeNewOrder;
    decodeSwapEvent(event: Event): Promise<OSWAP_BridgeVault.SwapEvent>;
    decodeOrderCanceledEvent(event: Event): Promise<OSWAP_BridgeVault.OrderCanceledEvent>;
    newOrderFromRouterWei(params: {
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
        trader: string;
    }): Promise<OSWAP_BridgeVault.NewOrderEvent>;
    orderAmendments(params: {
        orderId: number | BigNumber;
        amendment: number | BigNumber;
    }): Promise<INewOrder>;
    orderAmendmentsLength(orderId: number | BigNumber): Promise<number>;
    orderOwner(orderId: number | BigNumber): Promise<string>;
    orderRefunds(orderId: number | BigNumber): Promise<BigNumber>;
    orderStatus(orderId: number | BigNumber): Promise<BigNumber>;
    orders(orderId: number | BigNumber): Promise<{
        peerChain: BigNumber;
        inAmount: BigNumber;
        outToken: string;
        minOutAmount: BigNumber;
        to: string;
        expire: Date;
    }>;
    get ordersLength(): Promise<number>;
    pendingWithdrawalAmount(liquidityProvider: string): Promise<BigNumber>;
    pendingWithdrawalTimeout(liquidityProvider: string): Promise<Date>;
    get protocolFeeBalance(): Promise<BigNumber>;
    rebalancerDeposit(assetAmount: number | BigNumber): Promise<{
        rebalanceEvent: OSWAP_BridgeVault.RebalanceEvent;
        transferEvent: xErc20.TransferEvent;
    }>;
    rebalancerWithdraw(params: {
        signatures: string[];
        assetAmount: number | BigNumber;
        nonce: number | BigNumber;
    }): Promise<{
        rebalanceEvent: OSWAP_BridgeVault.RebalanceEvent;
        transferEvent: xErc20.TransferEvent;
    }>;
    removeLiquidity(params: {
        provider: string;
        assetAmount: number | BigNumber;
    }): Promise<{
        removeLiquidityEvent: OSWAP_BridgeVault.RemoveLiquidityEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    removeLiquidityRequest(lpTokenAmount: number | BigNumber): Promise<{
        RemoveLiquidityRequestEvent: OSWAP_BridgeVault.RemoveLiquidityRequestEvent;
        burnEvent: Erc20.TransferEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    requestCancelOrder(params: {
        sourceChainId: number | BigNumber;
        orderId: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.RequestCancelOrderEvent>;
    requestAmendOrder(params: {
        orderId: number | BigNumber;
        order: IOrderParam;
    }): Promise<OSWAP_BridgeVault.AmendOrderRequestEvent>;
    swap(params: {
        signatures: string[];
        owner: string;
        orderId: number | BigNumber;
        amendment: number | BigNumber;
        protocolFee: number | BigNumber;
        pair: string[];
        order: IOrderParam;
    }): Promise<{
        swapEvent: OSWAP_BridgeVault.SwapEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
    swapOrderStatus(orderId: string): Promise<number>;
    get symbol(): Promise<string>;
    sync(): Promise<OSWAP_BridgeVault.SyncEvent>;
    get totalPendingWithdrawal(): Promise<BigNumber>;
    get totalSupply(): Promise<BigNumber>;
    transfer(params: {
        recipient: string;
        amount: number | BigNumber;
    }): Promise<OSWAP_BridgeVault.TransferEvent>;
    transferFrom(params: {
        sender: string;
        recipient: string;
        amount: number | BigNumber;
    }): Promise<{
        transfer: OSWAP_BridgeVault.TransferEvent;
        approval: OSWAP_BridgeVault.ApprovalEvent;
    }>;
    get trollRegistry(): Promise<string>;
    updateConfigStore(): Promise<OSWAP_BridgeVault.UpdateConfigStoreEvent>;
    updateTrollRegistry(): Promise<OSWAP_BridgeVault.UpdateTrollRegistryEvent>;
    get vaultRegistry(): Promise<string>;
    voidOrder(params: {
        signatures: string[];
        orderId: string;
    }): Promise<OSWAP_BridgeVault.VoidOrderEvent>;
    withdrawUnexecutedOrder(orderId: number | BigNumber): Promise<{
        withdrawUnexecutedOrderEvent: OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    withdrawlTrollFee(amount: number | BigNumber): Promise<{
        widhdrawEvent: OSWAP_BridgeVault.WithdrawlTrollFeeEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
}
