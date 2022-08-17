import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    govToken: string;
    superTrollNft: string[];
    generalTrollNft: string[];
}
export interface IAddStakesGeneralTrollParams {
    nft: string;
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IAddStakesSuperTrollParams {
    nft: string;
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IAddTrollParams {
    troll: string;
    isSuperTroll: boolean;
    signature: string;
}
export interface IBackerStakingParams {
    backer: string;
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetTrollByNftParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IGetTrollsParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IOnERC721ReceivedParams {
    param1: string;
    param2: string;
    param3: number | BigNumber;
    param4: string;
}
export interface IOwnerTrollsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakeGeneralTrollParams {
    trollProfileIndex: number | BigNumber;
    nft: string;
    tokenId: number | BigNumber;
}
export interface IStakeSuperTrollParams {
    trollProfileIndex: number | BigNumber;
    nft: string;
    tokenId: number | BigNumber;
}
export interface IStakeToParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakeToInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IStakedByParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IStakedByInvParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IUnstakeGeneralTrollParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IUnstakeSuperTrollParams {
    nft: string;
    tokenId: number | BigNumber;
}
export interface IUpdateNftParams {
    nft: string;
    trolltype: number | BigNumber;
}
export interface IUpdateTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    signature: string;
}
export declare class OSWAP_MainChainTrollRegistry extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.AuthorizeEvent;
    parseBlockNftTokenIdEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent[];
    decodeBlockNftTokenIdEvent(event: Event): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.DeauthorizeEvent;
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): OSWAP_MainChainTrollRegistry.ResumeEvent;
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): OSWAP_MainChainTrollRegistry.ShutdownEvent;
    parseStakeGeneralTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent[];
    decodeStakeGeneralTollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeGeneralTollEvent;
    parseStakeSuperTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeSuperTollEvent[];
    decodeStakeSuperTollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeSuperTollEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent;
    parseUnstakeGeneralTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeGeneralTollEvent[];
    decodeUnstakeGeneralTollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeGeneralTollEvent;
    parseUnstakeSuperTollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeSuperTollEvent[];
    decodeUnstakeSuperTollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeSuperTollEvent;
    parseUpdateNFTEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateNFTEvent[];
    decodeUpdateNFTEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateNFTEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
    parseUpdateVotingManagerEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent[];
    decodeUpdateVotingManagerEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_MainChainTrollRegistry.UpgradeEvent;
    addStakesGeneralTroll: {
        (params: IAddStakesGeneralTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddStakesGeneralTrollParams) => Promise<void>;
    };
    addStakesSuperTroll: {
        (params: IAddStakesSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddStakesSuperTrollParams) => Promise<void>;
    };
    addTroll: {
        (params: IAddTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams) => Promise<void>;
    };
    backerStaking: {
        (params: IBackerStakingParams): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }[]>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    getStakeTo: {
        (backer: string): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }[]>;
    };
    getStakedBy: {
        (trollProfileIndex: number | BigNumber): Promise<{
            nft: string;
            tokenId: BigNumber;
        }[]>;
    };
    getStakes: {
        (troll: string): Promise<BigNumber>;
    };
    getStakesByTrollProfile: {
        (trollProfileIndex: number | BigNumber): Promise<BigNumber>;
    };
    getTrollByNft: {
        (params: IGetTrollByNftParams): Promise<string>;
    };
    getTrollProperties: {
        (trollProfileIndex: number | BigNumber): Promise<{
            troll: {
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            };
            nfts: {
                nft: string;
                tokenId: BigNumber;
            }[];
            backers: string[];
        }>;
    };
    getTrollPropertiesByAddress: {
        (trollAddress: string): Promise<{
            troll: {
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            };
            nfts: {
                nft: string;
                tokenId: BigNumber;
            }[];
            backers: string[];
        }>;
    };
    getTrolls: {
        (params: IGetTrollsParams): Promise<{
            owner: string;
            troll: string;
            trollType: BigNumber;
            nftCount: BigNumber;
        }[]>;
    };
    govToken: {
        (): Promise<string>;
    };
    initAddress: {
        (votingManager: string): Promise<TransactionReceipt>;
        call: (votingManager: string) => Promise<void>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    newOwner: {
        (): Promise<string>;
    };
    newTrollRegistry: {
        (): Promise<string>;
    };
    nftType: {
        (param1: string): Promise<BigNumber>;
    };
    onERC721Received: {
        (params: IOnERC721ReceivedParams): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams) => Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    ownerTrolls: {
        (params: IOwnerTrollsParams): Promise<BigNumber>;
    };
    ownerTrollsLength: {
        (owner: string): Promise<BigNumber>;
    };
    paused: {
        (): Promise<boolean>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    shutdownByAdmin: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    shutdownByVoting: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    stakeGeneralTroll: {
        (params: IStakeGeneralTrollParams): Promise<TransactionReceipt>;
        call: (params: IStakeGeneralTrollParams) => Promise<void>;
    };
    stakeOf: {
        (param1: string): Promise<BigNumber>;
    };
    stakeSuperTroll: {
        (params: IStakeSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IStakeSuperTrollParams) => Promise<void>;
    };
    stakeTo: {
        (params: IStakeToParams): Promise<{
            nft: string;
            tokenId: BigNumber;
            trollProfileIndex: BigNumber;
            timestamp: BigNumber;
        }>;
    };
    stakeToInv: {
        (params: IStakeToInvParams): Promise<{
            backer: string;
            index: BigNumber;
        }>;
    };
    stakeToLength: {
        (backer: string): Promise<BigNumber>;
    };
    stakedBy: {
        (params: IStakedByParams): Promise<{
            nft: string;
            tokenId: BigNumber;
        }>;
    };
    stakedByInv: {
        (params: IStakedByInvParams): Promise<{
            trollProfileIndex: BigNumber;
            index: BigNumber;
        }>;
    };
    stakedByLength: {
        (trollProfileIndex: number | BigNumber): Promise<BigNumber>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    totalStake: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    trollNft: {
        (param1: number | BigNumber): Promise<string>;
    };
    trollNftInv: {
        (param1: string): Promise<BigNumber>;
    };
    trollNftLength: {
        (): Promise<BigNumber>;
    };
    trollProfileInv: {
        (param1: string): Promise<BigNumber>;
    };
    trollProfiles: {
        (param1: number | BigNumber): Promise<{
            owner: string;
            troll: string;
            trollType: BigNumber;
            nftCount: BigNumber;
        }>;
    };
    trollProfilesLength: {
        (): Promise<BigNumber>;
    };
    unstakeGeneralTroll: {
        (params: IUnstakeGeneralTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeGeneralTrollParams) => Promise<BigNumber>;
    };
    unstakeSuperTroll: {
        (params: IUnstakeSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeSuperTrollParams) => Promise<BigNumber>;
    };
    updateNft: {
        (params: IUpdateNftParams): Promise<TransactionReceipt>;
        call: (params: IUpdateNftParams) => Promise<void>;
    };
    updateTroll: {
        (params: IUpdateTrollParams): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams) => Promise<void>;
    };
    updateVotingManager: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    upgrade: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    upgradeByAdmin: {
        (trollRegistry: string): Promise<TransactionReceipt>;
        call: (trollRegistry: string) => Promise<void>;
    };
    votingManager: {
        (): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_MainChainTrollRegistry {
    interface AddTrollEvent {
        owner: string;
        troll: string;
        trollProfileIndex: BigNumber;
        isSuperTroll: boolean;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BlockNftTokenIdEvent {
        nft: string;
        tokenId: BigNumber;
        blocked: boolean;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ResumeEvent {
        _event: Event;
    }
    interface ShutdownEvent {
        account: string;
        _event: Event;
    }
    interface StakeGeneralTollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface StakeSuperTollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnstakeGeneralTollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface UnstakeSuperTollEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        nft: string;
        tokenId: BigNumber;
        stakesChange: BigNumber;
        stakesBalance: BigNumber;
        _event: Event;
    }
    interface UpdateNFTEvent {
        nft: string;
        trollType: BigNumber;
        _event: Event;
    }
    interface UpdateTrollEvent {
        trollProfileIndex: BigNumber;
        oldTroll: string;
        newTroll: string;
        _event: Event;
    }
    interface UpdateVotingManagerEvent {
        newVotingManager: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
