import { Wallet, BigNumber } from '@ijstech/eth-wallet';
import { ISideChainDeploymentResult as IDeploymentResult } from '../crossChain';
export interface IDeployOptions {
    govToken: string;
    swapPolicy?: string;
    router?: string;
    superTrollMinCount?: number;
    generalTrollMinCount?: number;
    transactionsGap: number;
    configStore: string;
    vaultTokens?: string[];
    bridgeVaults?: {
        [asset: string]: string;
    };
    baseFee: {
        [asset: string]: number | BigNumber;
    };
    transactionFee: number | BigNumber;
    lpWithdrawlDelay: number;
    rebalancer: string;
    feeTo: string;
}
export declare const DefaultDeploymentOptions: IDeployOptions;
export declare function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
export declare function deployStakingOnly(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
