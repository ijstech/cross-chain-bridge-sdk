import { Wallet, BigNumber } from '@ijstech/eth-wallet';
import { OpenSwap } from '@openswap/sdk';
import * as Contracts from "./contracts";
import { BridgeVault } from "./wrappers/bridgeVault";
import { BridgeVaultTrollRegistry } from "./wrappers/bridgeVaultTrollRegistry";
import { MainChainVoting } from "./mainChainVoting";
import { SideChainVoting } from "./sideChainVoting";
export interface TokenPair {
    [sourceChain: number]: {
        [sourceToken: string]: {
            [targetChain: number]: string;
        };
    };
}
interface IToken {
    address?: string;
    name: string;
    decimals: number;
    symbol: string;
}
export interface TokenList {
    [chainId: number]: IToken[];
}
export interface WrappedTokensList {
    [chainId: number]: IToken;
}
export interface Order {
    owner: string;
    orderId: number;
    amendment: number;
    sourceChain: number;
    targetChain: number;
    srcToken: string;
    inToken: string;
    inAmount: BigNumber;
    outToken: string;
    minOutAmount: BigNumber;
    protocolFee?: BigNumber;
    imbalanceFee?: BigNumber;
    to: string;
    expire: number;
}
export interface IMainChainDeploymentResult {
    trollRegistry: string;
    votingExecutor: string;
    votingManager: string;
    votingRegistry: string;
    chainRegistry: string;
    chainRegistryExecutor: string;
}
export interface IMainChain {
    trollRegistry: Contracts.OSWAP_MainChainTrollRegistry;
    votingManager: Contracts.OSWAP_VotingManager;
    votingRegistry: Contracts.OSWAP_VotingRegistry;
    votingExecutor: Contracts.OSWAP_MainChainVotingExecutor;
    voting: MainChainVoting;
    chainRegistry: Contracts.OSWAP_ChainRegistry;
}
export declare function MainChain(wallet: Wallet, result: IMainChainDeploymentResult, tokenList: TokenList): IMainChain;
export interface ISideChainDeploymentResult {
    configStore: string;
    trollRegistry: string;
    votingExecutor: string;
    wrapper?: string;
    vaultRegistry: {
        [asset: string]: string;
    };
    bridgeVault: {
        [asset: string]: string;
    };
}
export interface ISideChain {
    configStore: Contracts.OSWAP_ConfigStore;
    wrapper?: Contracts.OSWAP_RouterVaultWrapper;
    vaultRegistry: {
        [key: string]: BridgeVaultTrollRegistry;
    };
    bridgeVault: {
        [key: string]: BridgeVault;
    };
    trollRegistry: Contracts.OSWAP_SideChainTrollRegistry;
    votingExecutor: Contracts.OSWAP_SideChainVotingExecutor;
    voting: SideChainVoting;
}
export declare function SideChain(wallet: Wallet, result: ISideChainDeploymentResult, tokenList: TokenList): ISideChain;
export interface IDeploymentResult {
    mainChain: IMainChainDeploymentResult;
    sideChain: {
        [chainId: number]: ISideChainDeploymentResult;
    };
}
export declare class CrossChainSingle {
    wallet: Wallet;
    chainId: number;
    chains: {
        mainChain: number;
        sideChain: number[];
    };
    private _oswap;
    oswap: OpenSwap;
    contractsAddresses: IDeploymentResult;
    mainChain?: IMainChain;
    crossChainContracts: ISideChain;
    tokenList: TokenList;
    constructor(_oswap: {
        [chainId: number]: string;
    }, contractsAddresses: IDeploymentResult, chains: {
        mainChain: number;
        sideChain: number[];
    }, tokenList: TokenList);
    onChainChange(wallet: Wallet, chainId: number): void;
}
export declare class CrossChainMulti {
    wallets: {
        [chainId: number]: Wallet;
    };
    chains: {
        mainChain: number;
        sideChain: number[];
    };
    oswap: {
        [chainId: number]: OpenSwap;
    };
    contractsAddresses: IDeploymentResult;
    crossChainContracts: {
        mainChain: IMainChain;
        sideChain: {
            [chainId: number]: ISideChain;
        };
    };
    tokenList: TokenList;
    wrappedTokens: WrappedTokensList;
    tokenPair: TokenPair;
    constructor(wallets: {
        [chainId: number]: Wallet;
    }, oswap: {
        [chainId: number]: string;
    }, contractsAddresses: IDeploymentResult, chains: {
        mainChain: number;
        sideChain: number[];
    }, tokenList: TokenList, wrappedTokens: WrappedTokensList, tokenPair: TokenPair);
}
export declare function buildTokenPairBySymbol(tokenList: TokenList, pairing: {
    [chainId: number]: string;
}[]): TokenPair;
export declare function buildTokenPairByAddress(pairing: {
    [chainId: number]: string;
}[]): TokenPair;
export declare function getCrossChain(wallets: {
    [chainId: number]: Wallet;
}, chains: {
    mainChain: number;
    sideChain: number[];
}, tokenList: TokenList, wrappedTokens: WrappedTokensList, chainRegistryAddress: string): Promise<CrossChainMulti>;
export {};
