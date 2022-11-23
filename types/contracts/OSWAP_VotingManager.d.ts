import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    trollRegistry: string;
    names: string[];
    minExeDelay: (number | BigNumber)[];
    minVoteDuration: (number | BigNumber)[];
    maxVoteDuration: (number | BigNumber)[];
    minGovTokenToCreateVote: (number | BigNumber)[];
    minQuorum: (number | BigNumber)[];
}
export interface IAddVotingConfigParams {
    name: string;
    minExeDelay: number | BigNumber;
    minVoteDuration: number | BigNumber;
    maxVoteDuration: number | BigNumber;
    minGovTokenToCreateVote: number | BigNumber;
    minQuorum: number | BigNumber;
}
export interface IGetVotingConfigProfilesParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetVotingsParams {
    start: number | BigNumber;
    count: number | BigNumber;
}
export interface INewVoteParams {
    vote: string;
    isExecutiveVote: boolean;
}
export interface ISetVotingConfigParams {
    configName: string;
    paramName: string;
    paramValue: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IVotedParams {
    poll: boolean;
    account: string;
    option: number | BigNumber;
}
export declare class OSWAP_VotingManager extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AddVotingConfigEvent[];
    decodeAddVotingConfigEvent(event: Event): OSWAP_VotingManager.AddVotingConfigEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_VotingManager.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_VotingManager.DeauthorizeEvent;
    parseExecutedEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ExecutedEvent[];
    decodeExecutedEvent(event: Event): OSWAP_VotingManager.ExecutedEvent;
    parseNewPollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewPollEvent[];
    decodeNewPollEvent(event: Event): OSWAP_VotingManager.NewPollEvent;
    parseNewVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewVoteEvent[];
    decodeNewVoteEvent(event: Event): OSWAP_VotingManager.NewVoteEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_VotingManager.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_VotingManager.ParamSet2Event;
    parsePollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.PollEvent[];
    decodePollEvent(event: Event): OSWAP_VotingManager.PollEvent;
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.SetVotingConfigEvent[];
    decodeSetVotingConfigEvent(event: Event): OSWAP_VotingManager.SetVotingConfigEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_VotingManager.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_VotingManager.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_VotingManager.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_VotingManager.TransferOwnershipEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_VotingManager.UpgradeEvent;
    parseVetoEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VetoEvent[];
    decodeVetoEvent(event: Event): OSWAP_VotingManager.VetoEvent;
    parseVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VoteEvent[];
    decodeVoteEvent(event: Event): OSWAP_VotingManager.VoteEvent;
    addVotingConfig: {
        (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams) => Promise<void>;
    };
    admin: {
        (): Promise<string>;
    };
    allVotings: {
        (): Promise<string[]>;
    };
    closeVote: {
        (vote: string): Promise<TransactionReceipt>;
        call: (vote: string) => Promise<void>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    };
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams): Promise<string[]>;
    };
    getVotingCount: {
        (): Promise<BigNumber>;
    };
    getVotingParams: {
        (name: string): Promise<{
            _minExeDelay: BigNumber;
            _minVoteDuration: BigNumber;
            _maxVoteDuration: BigNumber;
            _minGovTokenToCreateVote: BigNumber;
            _minQuorum: BigNumber;
        }>;
    };
    getVotings: {
        (params: IGetVotingsParams): Promise<string[]>;
    };
    govToken: {
        (): Promise<string>;
    };
    initAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    initVotingExecutor: {
        (votingExecutor: string[]): Promise<TransactionReceipt>;
        call: (votingExecutor: string[]) => Promise<void>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    isVotingContract: {
        (votingContract: string): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string): Promise<boolean>;
    };
    newOwner: {
        (): Promise<string>;
    };
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    };
    newVotingExecutorManager: {
        (): Promise<string>;
    };
    newVotingManager: {
        (): Promise<string>;
    };
    owner: {
        (): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    setAdmin: {
        (admin: string): Promise<TransactionReceipt>;
        call: (admin: string) => Promise<void>;
    };
    setVotingConfig: {
        (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams) => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    };
    setVotingRegister: {
        (votingRegister: string): Promise<TransactionReceipt>;
        call: (votingRegister: string) => Promise<void>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    trollRegistry: {
        (): Promise<string>;
    };
    updateWeight: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    upgrade: {
        (votingManager: string): Promise<TransactionReceipt>;
        call: (votingManager: string) => Promise<void>;
    };
    upgradeByAdmin: {
        (votingManager: string): Promise<TransactionReceipt>;
        call: (votingManager: string) => Promise<void>;
    };
    veto: {
        (voting: string): Promise<TransactionReceipt>;
        call: (voting: string) => Promise<void>;
    };
    voteCount: {
        (): Promise<BigNumber>;
    };
    voted: {
        (params: IVotedParams): Promise<TransactionReceipt>;
        call: (params: IVotedParams) => Promise<void>;
    };
    votingConfigProfiles: {
        (param1: number | BigNumber): Promise<string>;
    };
    votingConfigProfilesLength: {
        (): Promise<BigNumber>;
    };
    votingConfigs: {
        (param1: string): Promise<{
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minGovTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
        }>;
    };
    votingExecutor: {
        (param1: number | BigNumber): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (): Promise<BigNumber>;
    };
    votingIdx: {
        (param1: string): Promise<BigNumber>;
    };
    votingRegister: {
        (): Promise<string>;
    };
    votings: {
        (param1: number | BigNumber): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_VotingManager {
    interface AddVotingConfigEvent {
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minGovTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ExecutedEvent {
        vote: string;
        _event: Event;
    }
    interface NewPollEvent {
        poll: string;
        _event: Event;
    }
    interface NewVoteEvent {
        vote: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface PollEvent {
        account: string;
        poll: string;
        option: BigNumber;
        _event: Event;
    }
    interface SetVotingConfigEvent {
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
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
    interface UpgradeEvent {
        newVotingManager: string;
        _event: Event;
    }
    interface VetoEvent {
        vote: string;
        _event: Event;
    }
    interface VoteEvent {
        account: string;
        vote: string;
        option: BigNumber;
        _event: Event;
    }
}
