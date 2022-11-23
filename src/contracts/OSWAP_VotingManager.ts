import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_VotingManager.json";

export interface IDeployParams {trollRegistry:string;names:string[];minExeDelay:(number|BigNumber)[];minVoteDuration:(number|BigNumber)[];maxVoteDuration:(number|BigNumber)[];minGovTokenToCreateVote:(number|BigNumber)[];minQuorum:(number|BigNumber)[]}
export interface IAddVotingConfigParams {name:string;minExeDelay:number|BigNumber;minVoteDuration:number|BigNumber;maxVoteDuration:number|BigNumber;minGovTokenToCreateVote:number|BigNumber;minQuorum:number|BigNumber}
export interface IGetVotingConfigProfilesParams {start:number|BigNumber;length:number|BigNumber}
export interface IGetVotingsParams {start:number|BigNumber;count:number|BigNumber}
export interface INewVoteParams {vote:string;isExecutiveVote:boolean}
export interface ISetVotingConfigParams {configName:string;paramName:string;paramValue:number|BigNumber}
export interface ISetVotingExecutorParams {votingExecutor:string;bool:boolean}
export interface IVotedParams {poll:boolean;account:string;option:number|BigNumber}
export class OSWAP_VotingManager extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.trollRegistry,this.wallet.utils.stringToBytes32(params.names),this.wallet.utils.toString(params.minExeDelay),this.wallet.utils.toString(params.minVoteDuration),this.wallet.utils.toString(params.maxVoteDuration),this.wallet.utils.toString(params.minGovTokenToCreateVote),this.wallet.utils.toString(params.minQuorum)]);
    }
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AddVotingConfigEvent[]{
        return this.parseEvents(receipt, "AddVotingConfig").map(e=>this.decodeAddVotingConfigEvent(e));
    }
    decodeAddVotingConfigEvent(event: Event): OSWAP_VotingManager.AddVotingConfigEvent{
        let result = event.data;
        return {
            name: result.name,
            minExeDelay: new BigNumber(result.minExeDelay),
            minVoteDuration: new BigNumber(result.minVoteDuration),
            maxVoteDuration: new BigNumber(result.maxVoteDuration),
            minGovTokenToCreateVote: new BigNumber(result.minGovTokenToCreateVote),
            minQuorum: new BigNumber(result.minQuorum),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_VotingManager.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_VotingManager.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseExecutedEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ExecutedEvent[]{
        return this.parseEvents(receipt, "Executed").map(e=>this.decodeExecutedEvent(e));
    }
    decodeExecutedEvent(event: Event): OSWAP_VotingManager.ExecutedEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseNewPollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewPollEvent[]{
        return this.parseEvents(receipt, "NewPoll").map(e=>this.decodeNewPollEvent(e));
    }
    decodeNewPollEvent(event: Event): OSWAP_VotingManager.NewPollEvent{
        let result = event.data;
        return {
            poll: result.poll,
            _event: event
        };
    }
    parseNewVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewVoteEvent[]{
        return this.parseEvents(receipt, "NewVote").map(e=>this.decodeNewVoteEvent(e));
    }
    decodeNewVoteEvent(event: Event): OSWAP_VotingManager.NewVoteEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): OSWAP_VotingManager.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_VotingManager.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parsePollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.PollEvent[]{
        return this.parseEvents(receipt, "Poll").map(e=>this.decodePollEvent(e));
    }
    decodePollEvent(event: Event): OSWAP_VotingManager.PollEvent{
        let result = event.data;
        return {
            account: result.account,
            poll: result.poll,
            option: new BigNumber(result.option),
            _event: event
        };
    }
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.SetVotingConfigEvent[]{
        return this.parseEvents(receipt, "SetVotingConfig").map(e=>this.decodeSetVotingConfigEvent(e));
    }
    decodeSetVotingConfigEvent(event: Event): OSWAP_VotingManager.SetVotingConfigEvent{
        let result = event.data;
        return {
            configName: result.configName,
            paramName: result.paramName,
            minExeDelay: new BigNumber(result.minExeDelay),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_VotingManager.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_VotingManager.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_VotingManager.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_VotingManager.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.UpgradeEvent[]{
        return this.parseEvents(receipt, "Upgrade").map(e=>this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event: Event): OSWAP_VotingManager.UpgradeEvent{
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    parseVetoEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VetoEvent[]{
        return this.parseEvents(receipt, "Veto").map(e=>this.decodeVetoEvent(e));
    }
    decodeVetoEvent(event: Event): OSWAP_VotingManager.VetoEvent{
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VoteEvent[]{
        return this.parseEvents(receipt, "Vote").map(e=>this.decodeVoteEvent(e));
    }
    decodeVoteEvent(event: Event): OSWAP_VotingManager.VoteEvent{
        let result = event.data;
        return {
            account: result.account,
            vote: result.vote,
            option: new BigNumber(result.option),
            _event: event
        };
    }
    addVotingConfig: {
        (params: IAddVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams) => Promise<void>;
    }
    admin: {
        (): Promise<string>;
    }
    allVotings: {
        (): Promise<string[]>;
    }
    closeVote: {
        (vote:string): Promise<TransactionReceipt>;
        call: (vote:string) => Promise<void>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    executed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    getNewVoteId: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<BigNumber>;
    }
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams): Promise<string[]>;
    }
    getVotingCount: {
        (): Promise<BigNumber>;
    }
    getVotingParams: {
        (name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minGovTokenToCreateVote:BigNumber,_minQuorum:BigNumber}>;
    }
    getVotings: {
        (params: IGetVotingsParams): Promise<string[]>;
    }
    govToken: {
        (): Promise<string>;
    }
    initAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    initVotingExecutor: {
        (votingExecutor:string[]): Promise<TransactionReceipt>;
        call: (votingExecutor:string[]) => Promise<void>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    isVotingContract: {
        (votingContract:string): Promise<boolean>;
    }
    isVotingExecutor: {
        (param1:string): Promise<boolean>;
    }
    newOwner: {
        (): Promise<string>;
    }
    newVote: {
        (params: INewVoteParams): Promise<TransactionReceipt>;
        call: (params: INewVoteParams) => Promise<void>;
    }
    newVotingExecutorManager: {
        (): Promise<string>;
    }
    newVotingManager: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    setAdmin: {
        (admin:string): Promise<TransactionReceipt>;
        call: (admin:string) => Promise<void>;
    }
    setVotingConfig: {
        (params: ISetVotingConfigParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams) => Promise<void>;
    }
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    }
    setVotingRegister: {
        (votingRegister:string): Promise<TransactionReceipt>;
        call: (votingRegister:string) => Promise<void>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    updateWeight: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    upgrade: {
        (votingManager:string): Promise<TransactionReceipt>;
        call: (votingManager:string) => Promise<void>;
    }
    upgradeByAdmin: {
        (votingManager:string): Promise<TransactionReceipt>;
        call: (votingManager:string) => Promise<void>;
    }
    veto: {
        (voting:string): Promise<TransactionReceipt>;
        call: (voting:string) => Promise<void>;
    }
    voteCount: {
        (): Promise<BigNumber>;
    }
    voted: {
        (params: IVotedParams): Promise<TransactionReceipt>;
        call: (params: IVotedParams) => Promise<void>;
    }
    votingConfigProfiles: {
        (param1:number|BigNumber): Promise<string>;
    }
    votingConfigProfilesLength: {
        (): Promise<BigNumber>;
    }
    votingConfigs: {
        (param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minGovTokenToCreateVote:BigNumber,minQuorum:BigNumber}>;
    }
    votingExecutor: {
        (param1:number|BigNumber): Promise<string>;
    }
    votingExecutorInv: {
        (param1:string): Promise<BigNumber>;
    }
    votingExecutorLength: {
        (): Promise<BigNumber>;
    }
    votingIdx: {
        (param1:string): Promise<BigNumber>;
    }
    votingRegister: {
        (): Promise<string>;
    }
    votings: {
        (param1:number|BigNumber): Promise<string>;
    }
    private assign(){
        let admin_call = async (): Promise<string> => {
            let result = await this.call('admin');
            return result;
        }
        this.admin = admin_call
        let allVotings_call = async (): Promise<string[]> => {
            let result = await this.call('allVotings');
            return result;
        }
        this.allVotings = allVotings_call
        let getVotingConfigProfilesParams = (params: IGetVotingConfigProfilesParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getVotingConfigProfiles_call = async (params: IGetVotingConfigProfilesParams): Promise<string[]> => {
            let result = await this.call('getVotingConfigProfiles',getVotingConfigProfilesParams(params));
            return result;
        }
        this.getVotingConfigProfiles = getVotingConfigProfiles_call
        let getVotingCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('getVotingCount');
            return new BigNumber(result);
        }
        this.getVotingCount = getVotingCount_call
        let getVotingParams_call = async (name:string): Promise<{_minExeDelay:BigNumber,_minVoteDuration:BigNumber,_maxVoteDuration:BigNumber,_minGovTokenToCreateVote:BigNumber,_minQuorum:BigNumber}> => {
            let result = await this.call('getVotingParams',[this.wallet.utils.stringToBytes32(name)]);
            return {
                _minExeDelay: new BigNumber(result._minExeDelay),
                _minVoteDuration: new BigNumber(result._minVoteDuration),
                _maxVoteDuration: new BigNumber(result._maxVoteDuration),
                _minGovTokenToCreateVote: new BigNumber(result._minGovTokenToCreateVote),
                _minQuorum: new BigNumber(result._minQuorum)
            };
        }
        this.getVotingParams = getVotingParams_call
        let getVotingsParams = (params: IGetVotingsParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.count)];
        let getVotings_call = async (params: IGetVotingsParams): Promise<string[]> => {
            let result = await this.call('getVotings',getVotingsParams(params));
            return result;
        }
        this.getVotings = getVotings_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let isVotingContract_call = async (votingContract:string): Promise<boolean> => {
            let result = await this.call('isVotingContract',[votingContract]);
            return result;
        }
        this.isVotingContract = isVotingContract_call
        let isVotingExecutor_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isVotingExecutor',[param1]);
            return result;
        }
        this.isVotingExecutor = isVotingExecutor_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let newVotingExecutorManager_call = async (): Promise<string> => {
            let result = await this.call('newVotingExecutorManager');
            return result;
        }
        this.newVotingExecutorManager = newVotingExecutorManager_call
        let newVotingManager_call = async (): Promise<string> => {
            let result = await this.call('newVotingManager');
            return result;
        }
        this.newVotingManager = newVotingManager_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let voteCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('voteCount');
            return new BigNumber(result);
        }
        this.voteCount = voteCount_call
        let votingConfigProfiles_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votingConfigProfiles',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votingConfigProfiles = votingConfigProfiles_call
        let votingConfigProfilesLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('votingConfigProfilesLength');
            return new BigNumber(result);
        }
        this.votingConfigProfilesLength = votingConfigProfilesLength_call
        let votingConfigs_call = async (param1:string): Promise<{minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minGovTokenToCreateVote:BigNumber,minQuorum:BigNumber}> => {
            let result = await this.call('votingConfigs',[this.wallet.utils.stringToBytes32(param1)]);
            return {
                minExeDelay: new BigNumber(result.minExeDelay),
                minVoteDuration: new BigNumber(result.minVoteDuration),
                maxVoteDuration: new BigNumber(result.maxVoteDuration),
                minGovTokenToCreateVote: new BigNumber(result.minGovTokenToCreateVote),
                minQuorum: new BigNumber(result.minQuorum)
            };
        }
        this.votingConfigs = votingConfigs_call
        let votingExecutor_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votingExecutor',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votingExecutor = votingExecutor_call
        let votingExecutorInv_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('votingExecutorInv',[param1]);
            return new BigNumber(result);
        }
        this.votingExecutorInv = votingExecutorInv_call
        let votingExecutorLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('votingExecutorLength');
            return new BigNumber(result);
        }
        this.votingExecutorLength = votingExecutorLength_call
        let votingIdx_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('votingIdx',[param1]);
            return new BigNumber(result);
        }
        this.votingIdx = votingIdx_call
        let votingRegister_call = async (): Promise<string> => {
            let result = await this.call('votingRegister');
            return result;
        }
        this.votingRegister = votingRegister_call
        let votings_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('votings',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.votings = votings_call
        let addVotingConfigParams = (params: IAddVotingConfigParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.toString(params.minExeDelay),this.wallet.utils.toString(params.minVoteDuration),this.wallet.utils.toString(params.maxVoteDuration),this.wallet.utils.toString(params.minGovTokenToCreateVote),this.wallet.utils.toString(params.minQuorum)];
        let addVotingConfig_send = async (params: IAddVotingConfigParams): Promise<TransactionReceipt> => {
            let result = await this.send('addVotingConfig',addVotingConfigParams(params));
            return result;
        }
        let addVotingConfig_call = async (params: IAddVotingConfigParams): Promise<void> => {
            let result = await this.call('addVotingConfig',addVotingConfigParams(params));
            return;
        }
        this.addVotingConfig = Object.assign(addVotingConfig_send, {
            call:addVotingConfig_call
        });
        let closeVote_send = async (vote:string): Promise<TransactionReceipt> => {
            let result = await this.send('closeVote',[vote]);
            return result;
        }
        let closeVote_call = async (vote:string): Promise<void> => {
            let result = await this.call('closeVote',[vote]);
            return;
        }
        this.closeVote = Object.assign(closeVote_send, {
            call:closeVote_call
        });
        let deny_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user]);
            return result;
        }
        let deny_call = async (user:string): Promise<void> => {
            let result = await this.call('deny',[user]);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let executed_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('executed');
            return result;
        }
        let executed_call = async (): Promise<void> => {
            let result = await this.call('executed');
            return;
        }
        this.executed = Object.assign(executed_send, {
            call:executed_call
        });
        let getNewVoteId_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('getNewVoteId');
            return result;
        }
        let getNewVoteId_call = async (): Promise<BigNumber> => {
            let result = await this.call('getNewVoteId');
            return new BigNumber(result);
        }
        this.getNewVoteId = Object.assign(getNewVoteId_send, {
            call:getNewVoteId_call
        });
        let initAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAdmin',[admin]);
            return result;
        }
        let initAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('initAdmin',[admin]);
            return;
        }
        this.initAdmin = Object.assign(initAdmin_send, {
            call:initAdmin_call
        });
        let initVotingExecutor_send = async (votingExecutor:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('initVotingExecutor',[votingExecutor]);
            return result;
        }
        let initVotingExecutor_call = async (votingExecutor:string[]): Promise<void> => {
            let result = await this.call('initVotingExecutor',[votingExecutor]);
            return;
        }
        this.initVotingExecutor = Object.assign(initVotingExecutor_send, {
            call:initVotingExecutor_call
        });
        let newVoteParams = (params: INewVoteParams) => [params.vote,params.isExecutiveVote];
        let newVote_send = async (params: INewVoteParams): Promise<TransactionReceipt> => {
            let result = await this.send('newVote',newVoteParams(params));
            return result;
        }
        let newVote_call = async (params: INewVoteParams): Promise<void> => {
            let result = await this.call('newVote',newVoteParams(params));
            return;
        }
        this.newVote = Object.assign(newVote_send, {
            call:newVote_call
        });
        let permit_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user]);
            return result;
        }
        let permit_call = async (user:string): Promise<void> => {
            let result = await this.call('permit',[user]);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let setAdmin_send = async (admin:string): Promise<TransactionReceipt> => {
            let result = await this.send('setAdmin',[admin]);
            return result;
        }
        let setAdmin_call = async (admin:string): Promise<void> => {
            let result = await this.call('setAdmin',[admin]);
            return;
        }
        this.setAdmin = Object.assign(setAdmin_send, {
            call:setAdmin_call
        });
        let setVotingConfigParams = (params: ISetVotingConfigParams) => [this.wallet.utils.stringToBytes32(params.configName),this.wallet.utils.stringToBytes32(params.paramName),this.wallet.utils.toString(params.paramValue)];
        let setVotingConfig_send = async (params: ISetVotingConfigParams): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingConfig',setVotingConfigParams(params));
            return result;
        }
        let setVotingConfig_call = async (params: ISetVotingConfigParams): Promise<void> => {
            let result = await this.call('setVotingConfig',setVotingConfigParams(params));
            return;
        }
        this.setVotingConfig = Object.assign(setVotingConfig_send, {
            call:setVotingConfig_call
        });
        let setVotingExecutorParams = (params: ISetVotingExecutorParams) => [params.votingExecutor,params.bool];
        let setVotingExecutor_send = async (params: ISetVotingExecutorParams): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingExecutor',setVotingExecutorParams(params));
            return result;
        }
        let setVotingExecutor_call = async (params: ISetVotingExecutorParams): Promise<void> => {
            let result = await this.call('setVotingExecutor',setVotingExecutorParams(params));
            return;
        }
        this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
            call:setVotingExecutor_call
        });
        let setVotingRegister_send = async (votingRegister:string): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingRegister',[votingRegister]);
            return result;
        }
        let setVotingRegister_call = async (votingRegister:string): Promise<void> => {
            let result = await this.call('setVotingRegister',[votingRegister]);
            return;
        }
        this.setVotingRegister = Object.assign(setVotingRegister_send, {
            call:setVotingRegister_call
        });
        let takeOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership');
            return result;
        }
        let takeOwnership_call = async (): Promise<void> => {
            let result = await this.call('takeOwnership');
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let updateWeight_send = async (account:string): Promise<TransactionReceipt> => {
            let result = await this.send('updateWeight',[account]);
            return result;
        }
        let updateWeight_call = async (account:string): Promise<void> => {
            let result = await this.call('updateWeight',[account]);
            return;
        }
        this.updateWeight = Object.assign(updateWeight_send, {
            call:updateWeight_call
        });
        let upgrade_send = async (votingManager:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgrade',[votingManager]);
            return result;
        }
        let upgrade_call = async (votingManager:string): Promise<void> => {
            let result = await this.call('upgrade',[votingManager]);
            return;
        }
        this.upgrade = Object.assign(upgrade_send, {
            call:upgrade_call
        });
        let upgradeByAdmin_send = async (votingManager:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeByAdmin',[votingManager]);
            return result;
        }
        let upgradeByAdmin_call = async (votingManager:string): Promise<void> => {
            let result = await this.call('upgradeByAdmin',[votingManager]);
            return;
        }
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call:upgradeByAdmin_call
        });
        let veto_send = async (voting:string): Promise<TransactionReceipt> => {
            let result = await this.send('veto',[voting]);
            return result;
        }
        let veto_call = async (voting:string): Promise<void> => {
            let result = await this.call('veto',[voting]);
            return;
        }
        this.veto = Object.assign(veto_send, {
            call:veto_call
        });
        let votedParams = (params: IVotedParams) => [params.poll,params.account,this.wallet.utils.toString(params.option)];
        let voted_send = async (params: IVotedParams): Promise<TransactionReceipt> => {
            let result = await this.send('voted',votedParams(params));
            return result;
        }
        let voted_call = async (params: IVotedParams): Promise<void> => {
            let result = await this.call('voted',votedParams(params));
            return;
        }
        this.voted = Object.assign(voted_send, {
            call:voted_call
        });
    }
}
export module OSWAP_VotingManager{
    export interface AddVotingConfigEvent {name:string,minExeDelay:BigNumber,minVoteDuration:BigNumber,maxVoteDuration:BigNumber,minGovTokenToCreateVote:BigNumber,minQuorum:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface ExecutedEvent {vote:string,_event:Event}
    export interface NewPollEvent {poll:string,_event:Event}
    export interface NewVoteEvent {vote:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface PollEvent {account:string,poll:string,option:BigNumber,_event:Event}
    export interface SetVotingConfigEvent {configName:string,paramName:string,minExeDelay:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpgradeEvent {newVotingManager:string,_event:Event}
    export interface VetoEvent {vote:string,_event:Event}
    export interface VoteEvent {account:string,vote:string,option:BigNumber,_event:Event}
}