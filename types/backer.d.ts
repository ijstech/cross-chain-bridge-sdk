import { BigNumber, Erc20 } from '@ijstech/eth-wallet';
import { CrossChainSingle } from './crossChain';
import { OSWAP_BridgeVaultTrollRegistry, OSWAP_MainChainTrollRegistry } from "./contracts";
import * as Nft from '@openswap/troll-nft-sdk';
export declare class Backer {
    crosschain: CrossChainSingle;
    constructor(crosschain: CrossChainSingle);
    stakeTroll(params: {
        trollProfileIndex: number | BigNumber;
        isSuperTroll: boolean;
        nft: string;
        tokenId: number | BigNumber;
    }): Promise<{
        stakeEvent: OSWAP_MainChainTrollRegistry.StakeSuperTollEvent | OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent;
        transferEvent: Nft.Contracts.TrollNFT.TransferEvent;
    }>;
    unstakeTroll(params: {
        nft: string;
        tokenId: number | BigNumber;
    }): Promise<{
        unstakeEvent: OSWAP_MainChainTrollRegistry.UnstakeSuperTollEvent | OSWAP_MainChainTrollRegistry.UnstakeGeneralTollEvent;
        transferEvent: Nft.Contracts.TrollNFT.TransferEvent;
    }>;
    addStakes(params: {
        nft: string;
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<{
        addStakesEvent: Nft.Contracts.TrollNFTV2.AddStakesEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
    getStakedBridgeVaultBond(token: Erc20): Promise<{
        trollProfileIndex: BigNumber;
        shares: BigNumber;
        pendingWithdrawal: BigNumber;
        approvedWithdrawal: BigNumber;
    }>;
    approveToStake(params: {
        asset: Erc20;
        oswapAmount: number | BigNumber;
    }): Promise<import("@openswap/sdk/types/contracts").OpenSwap.ApprovalEvent>;
    stakeBridgeVaultBond(params: {
        asset: Erc20;
        trollProfileIndex: number | BigNumber;
        oswapAmount: number | BigNumber;
    }): Promise<{
        stakeEvent: OSWAP_BridgeVaultTrollRegistry.StakeEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
    stakes(asset: Erc20): Promise<{
        trollProfileIndex: BigNumber;
        shares: BigNumber;
        pendingWithdrawal: BigNumber;
        approvedWithdrawal: BigNumber;
    }>;
    unstakeRequest(params: {
        asset: Erc20;
        shares: number | BigNumber;
    }): Promise<OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent>;
    unstake(params: {
        asset: Erc20;
        shares: number | BigNumber;
    }): Promise<{
        unstakeEvent: OSWAP_BridgeVaultTrollRegistry.UnstakeEvent;
        transferEvent: Erc20.TransferEvent;
    }>;
}
