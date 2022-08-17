import { Wallet, BigNumber } from '@ijstech/eth-wallet';
import { IMainChainDeploymentResult, ISideChainDeploymentResult, IDeploymentResult, CrossChainMulti } from "../crossChain";
import * as OSWAP from "@openswap/sdk";
export interface IDeployOptions {
    mainChain: {
        chainId: number;
        chainName: string;
        superTrollMinCount: number;
        superTrollNft: string[];
        generalTrollNft: string[];
        minStakePeriod: number;
        rebalancer: string;
    };
    sideChain: {
        chainId: number;
        chainName: string;
        superTrollMinCount: number;
        rebalancer: string;
        vaultTokens: string[];
        bridgeVaults: {
            [asset: string]: string;
        };
        baseFee: {
            [asset: string]: number | BigNumber;
        };
    }[];
    lpWithdrawlDelay: number;
    protocolFee: number;
}
export declare function deploy(wallets: {
    [chainId: number]: Wallet;
}, deployOptions: IDeployOptions, openSwapContracts: {
    mainChain: OSWAP.IDeploymentContracts;
    sideChain: {
        [chainId: number]: OSWAP.IDeploymentContracts;
    };
}, result: IDeploymentResult): Promise<IDeploymentResult>;
export declare function initChainRegistry(crossChain: CrossChainMulti, pairing: {
    [chainId: number]: string;
}[]): Promise<void>;
export declare function initChainRegistryByAddress(deploymentResult: {
    [name: string]: {
        openswap: {
            oswap: string;
        };
        crossChainBridgeMainChain?: IMainChainDeploymentResult;
        crossChainBridgeSideChain: ISideChainDeploymentResult;
    };
}, wallets: {
    [chainId: number]: Wallet;
}, networks: {
    chainName: string;
    chainId: number;
}[], pairing?: {
    [chainId: number]: string;
}[]): Promise<void>;
