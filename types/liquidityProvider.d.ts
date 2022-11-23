import { BigNumber, Erc20 } from '@ijstech/eth-wallet';
import { CrossChainSingle } from './crossChain';
import { OSWAP_BridgeVault } from "./contracts";
export declare class LiquidityProvider {
    crosschain: CrossChainSingle;
    constructor(crosschain: CrossChainSingle);
    getLiquidityBalance(token: Erc20): Promise<BigNumber>;
    approveToAddLiquidity(params: {
        asset: Erc20;
        amount: number | BigNumber;
    }): Promise<any>;
    addLiquidity(params: {
        token: Erc20;
        amount: number | BigNumber;
    }): Promise<{
        addLiquidityEvent: OSWAP_BridgeVault.AddLiquidityEvent;
        mintEvent: Erc20.TransferEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    removeLiquidityRequest(params: {
        token: Erc20;
        lpTokenAmount: BigNumber | number;
    }): Promise<{
        RemoveLiquidityRequestEvent: OSWAP_BridgeVault.RemoveLiquidityRequestEvent;
        burnEvent: Erc20.TransferEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
    removeLiquidity(params: {
        token: Erc20;
        amount: BigNumber | number;
    }): Promise<{
        removeLiquidityEvent: OSWAP_BridgeVault.RemoveLiquidityEvent;
        assetTransferEvent: Erc20.TransferEvent;
    }>;
}
