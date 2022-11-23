import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./MOCK_TrollRegistry.json";

export interface IAddTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;troll:string;isSuperTroll:boolean;nonce:number|BigNumber}
export interface IIsGeneralTrollParams {troll:string;returnFalseIfBlocked:boolean}
export interface IIsGeneralTrollByIndexParams {trollProfileIndex:number|BigNumber;returnFalseIfBlocked:boolean}
export interface IIsSuperTrollParams {troll:string;returnFalseIfBlocked:boolean}
export interface IIsSuperTrollByIndexParams {trollProfileIndex:number|BigNumber;returnFalseIfBlocked:boolean}
export interface IRemoveTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;nonce:number|BigNumber}
export interface ISetVotingExecutorParams {votingExecutor:string;bool:boolean}
export interface IUnlockGeneralTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;nonce:number|BigNumber}
export interface IUnlockSuperTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;unlock:boolean;vaultRegistry:string[];penalty:(number|BigNumber)[];nonce:number|BigNumber}
export interface IUpdateTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;newTroll:string;nonce:number|BigNumber}
export class MOCK_TrollRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(govToken:string): Promise<string>{
        return this.__deploy([govToken]);
    }
    parseAddTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AddTrollEvent[]{
        return this.parseEvents(receipt, "AddTroll").map(e=>this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event: Event): MOCK_TrollRegistry.AddTrollEvent{
        let result = event.data;
        return {
            troll: result.troll,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            isSuperTroll: result.isSuperTroll,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): MOCK_TrollRegistry.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): MOCK_TrollRegistry.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDelistTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DelistTrollEvent[]{
        return this.parseEvents(receipt, "DelistTroll").map(e=>this.decodeDelistTrollEvent(e));
    }
    decodeDelistTrollEvent(event: Event): MOCK_TrollRegistry.DelistTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockGeneralTrollEvent[]{
        return this.parseEvents(receipt, "LockGeneralTroll").map(e=>this.decodeLockGeneralTrollEvent(e));
    }
    decodeLockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.LockGeneralTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseLockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockSuperTrollEvent[]{
        return this.parseEvents(receipt, "LockSuperTroll").map(e=>this.decodeLockSuperTrollEvent(e));
    }
    decodeLockSuperTrollEvent(event: Event): MOCK_TrollRegistry.LockSuperTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseParamSetEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSetEvent[]{
        return this.parseEvents(receipt, "ParamSet").map(e=>this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event: Event): MOCK_TrollRegistry.ParamSetEvent{
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): MOCK_TrollRegistry.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseRemoveTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.RemoveTrollEvent[]{
        return this.parseEvents(receipt, "RemoveTroll").map(e=>this.decodeRemoveTrollEvent(e));
    }
    decodeRemoveTrollEvent(event: Event): MOCK_TrollRegistry.RemoveTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseResumeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ResumeEvent[]{
        return this.parseEvents(receipt, "Resume").map(e=>this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event: Event): MOCK_TrollRegistry.ResumeEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.SetVotingExecutorEvent[]{
        return this.parseEvents(receipt, "SetVotingExecutor").map(e=>this.decodeSetVotingExecutorEvent(e));
    }
    decodeSetVotingExecutorEvent(event: Event): MOCK_TrollRegistry.SetVotingExecutorEvent{
        let result = event.data;
        return {
            newVotingExecutor: result.newVotingExecutor,
            isActive: result.isActive,
            _event: event
        };
    }
    parseShutdownEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ShutdownEvent[]{
        return this.parseEvents(receipt, "Shutdown").map(e=>this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event: Event): MOCK_TrollRegistry.ShutdownEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): MOCK_TrollRegistry.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): MOCK_TrollRegistry.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockGeneralTrollEvent[]{
        return this.parseEvents(receipt, "UnlockGeneralTroll").map(e=>this.decodeUnlockGeneralTrollEvent(e));
    }
    decodeUnlockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.UnlockGeneralTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockSuperTrollEvent[]{
        return this.parseEvents(receipt, "UnlockSuperTroll").map(e=>this.decodeUnlockSuperTrollEvent(e));
    }
    decodeUnlockSuperTrollEvent(event: Event): MOCK_TrollRegistry.UnlockSuperTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            unlock: result.unlock,
            bridgeVault: result.bridgeVault,
            penalty: new BigNumber(result.penalty),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): MOCK_TrollRegistry.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateTrollEvent[]{
        return this.parseEvents(receipt, "UpdateTroll").map(e=>this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event: Event): MOCK_TrollRegistry.UpdateTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            oldTroll: result.oldTroll,
            newTroll: result.newTroll,
            _event: event
        };
    }
    parseUpgradeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeEvent[]{
        return this.parseEvents(receipt, "Upgrade").map(e=>this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event: Event): MOCK_TrollRegistry.UpgradeEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    parseUpgradeVotingManagerEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeVotingManagerEvent[]{
        return this.parseEvents(receipt, "UpgradeVotingManager").map(e=>this.decodeUpgradeVotingManagerEvent(e));
    }
    decodeUpgradeVotingManagerEvent(event: Event): MOCK_TrollRegistry.UpgradeVotingManagerEvent{
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    addTroll: {
        (params: IAddTrollParams): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams) => Promise<void>;
    }
    configStore: {
        (): Promise<string>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    generalTrollCount: {
        (): Promise<BigNumber>;
    }
    govToken: {
        (): Promise<string>;
    }
    initAddress: {
        (configStore:string): Promise<TransactionReceipt>;
        call: (configStore:string) => Promise<void>;
    }
    isGeneralTroll: {
        (params: IIsGeneralTrollParams): Promise<boolean>;
    }
    isGeneralTrollByIndex: {
        (params: IIsGeneralTrollByIndexParams): Promise<boolean>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    isSuperTroll: {
        (params: IIsSuperTrollParams): Promise<boolean>;
    }
    isSuperTrollByIndex: {
        (params: IIsSuperTrollByIndexParams): Promise<boolean>;
    }
    isVotingExecutor: {
        (param1:string): Promise<boolean>;
    }
    lockGeneralTroll: {
        (trollProfileIndex:number|BigNumber): Promise<TransactionReceipt>;
        call: (trollProfileIndex:number|BigNumber) => Promise<void>;
    }
    lockSuperTroll: {
        (trollProfileIndex:number|BigNumber): Promise<TransactionReceipt>;
        call: (trollProfileIndex:number|BigNumber) => Promise<void>;
    }
    newOwner: {
        (): Promise<string>;
    }
    newTrollRegistry: {
        (): Promise<string>;
    }
    newVotingManager: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    paused: {
        (): Promise<boolean>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    removeTroll: {
        (params: IRemoveTrollParams): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollParams) => Promise<void>;
    }
    resume: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    setVotingExecutor: {
        (params: ISetVotingExecutorParams): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams) => Promise<void>;
    }
    shutdownByAdmin: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    shutdownByVoting: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    superTrollCount: {
        (): Promise<BigNumber>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    trollProfileInv: {
        (param1:string): Promise<BigNumber>;
    }
    trollProfiles: {
        (param1:number|BigNumber): Promise<{troll:string,trollType:BigNumber}>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    unlockGeneralTroll: {
        (params: IUnlockGeneralTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnlockGeneralTrollParams) => Promise<void>;
    }
    unlockSuperTroll: {
        (params: IUnlockSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IUnlockSuperTrollParams) => Promise<void>;
    }
    updateConfigStore: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    updateTroll: {
        (params: IUpdateTrollParams): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams) => Promise<void>;
    }
    upgradeTrollRegistry: {
        (trollRegistry:string): Promise<TransactionReceipt>;
        call: (trollRegistry:string) => Promise<void>;
    }
    upgradeTrollRegistryByAdmin: {
        (trollRegistry:string): Promise<TransactionReceipt>;
        call: (trollRegistry:string) => Promise<void>;
    }
    upgradeVotingManager: {
        (votingManager:string): Promise<TransactionReceipt>;
        call: (votingManager:string) => Promise<void>;
    }
    upgradeVotingManagerByAdmin: {
        (votingManager:string): Promise<TransactionReceipt>;
        call: (votingManager:string) => Promise<void>;
    }
    usedNonce: {
        (param1:number|BigNumber): Promise<boolean>;
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
    private assign(){
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let generalTrollCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('generalTrollCount');
            return new BigNumber(result);
        }
        this.generalTrollCount = generalTrollCount_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let isGeneralTrollParams = (params: IIsGeneralTrollParams) => [params.troll,params.returnFalseIfBlocked];
        let isGeneralTroll_call = async (params: IIsGeneralTrollParams): Promise<boolean> => {
            let result = await this.call('isGeneralTroll',isGeneralTrollParams(params));
            return result;
        }
        this.isGeneralTroll = isGeneralTroll_call
        let isGeneralTrollByIndexParams = (params: IIsGeneralTrollByIndexParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.returnFalseIfBlocked];
        let isGeneralTrollByIndex_call = async (params: IIsGeneralTrollByIndexParams): Promise<boolean> => {
            let result = await this.call('isGeneralTrollByIndex',isGeneralTrollByIndexParams(params));
            return result;
        }
        this.isGeneralTrollByIndex = isGeneralTrollByIndex_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let isSuperTrollParams = (params: IIsSuperTrollParams) => [params.troll,params.returnFalseIfBlocked];
        let isSuperTroll_call = async (params: IIsSuperTrollParams): Promise<boolean> => {
            let result = await this.call('isSuperTroll',isSuperTrollParams(params));
            return result;
        }
        this.isSuperTroll = isSuperTroll_call
        let isSuperTrollByIndexParams = (params: IIsSuperTrollByIndexParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.returnFalseIfBlocked];
        let isSuperTrollByIndex_call = async (params: IIsSuperTrollByIndexParams): Promise<boolean> => {
            let result = await this.call('isSuperTrollByIndex',isSuperTrollByIndexParams(params));
            return result;
        }
        this.isSuperTrollByIndex = isSuperTrollByIndex_call
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
        let newTrollRegistry_call = async (): Promise<string> => {
            let result = await this.call('newTrollRegistry');
            return result;
        }
        this.newTrollRegistry = newTrollRegistry_call
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
        let paused_call = async (): Promise<boolean> => {
            let result = await this.call('paused');
            return result;
        }
        this.paused = paused_call
        let superTrollCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('superTrollCount');
            return new BigNumber(result);
        }
        this.superTrollCount = superTrollCount_call
        let trollProfileInv_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('trollProfileInv',[param1]);
            return new BigNumber(result);
        }
        this.trollProfileInv = trollProfileInv_call
        let trollProfiles_call = async (param1:number|BigNumber): Promise<{troll:string,trollType:BigNumber}> => {
            let result = await this.call('trollProfiles',[this.wallet.utils.toString(param1)]);
            return {
                troll: result.troll,
                trollType: new BigNumber(result.trollType)
            };
        }
        this.trollProfiles = trollProfiles_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let usedNonce_call = async (param1:number|BigNumber): Promise<boolean> => {
            let result = await this.call('usedNonce',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.usedNonce = usedNonce_call
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
        let addTrollParams = (params: IAddTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.troll,params.isSuperTroll,this.wallet.utils.toString(params.nonce)];
        let addTroll_send = async (params: IAddTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('addTroll',addTrollParams(params));
            return result;
        }
        let addTroll_call = async (params: IAddTrollParams): Promise<void> => {
            let result = await this.call('addTroll',addTrollParams(params));
            return;
        }
        this.addTroll = Object.assign(addTroll_send, {
            call:addTroll_call
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
        let initAddress_send = async (configStore:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[configStore]);
            return result;
        }
        let initAddress_call = async (configStore:string): Promise<void> => {
            let result = await this.call('initAddress',[configStore]);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let lockGeneralTroll_send = async (trollProfileIndex:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('lockGeneralTroll',[this.wallet.utils.toString(trollProfileIndex)]);
            return result;
        }
        let lockGeneralTroll_call = async (trollProfileIndex:number|BigNumber): Promise<void> => {
            let result = await this.call('lockGeneralTroll',[this.wallet.utils.toString(trollProfileIndex)]);
            return;
        }
        this.lockGeneralTroll = Object.assign(lockGeneralTroll_send, {
            call:lockGeneralTroll_call
        });
        let lockSuperTroll_send = async (trollProfileIndex:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('lockSuperTroll',[this.wallet.utils.toString(trollProfileIndex)]);
            return result;
        }
        let lockSuperTroll_call = async (trollProfileIndex:number|BigNumber): Promise<void> => {
            let result = await this.call('lockSuperTroll',[this.wallet.utils.toString(trollProfileIndex)]);
            return;
        }
        this.lockSuperTroll = Object.assign(lockSuperTroll_send, {
            call:lockSuperTroll_call
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
        let removeTrollParams = (params: IRemoveTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce)];
        let removeTroll_send = async (params: IRemoveTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeTroll',removeTrollParams(params));
            return result;
        }
        let removeTroll_call = async (params: IRemoveTrollParams): Promise<void> => {
            let result = await this.call('removeTroll',removeTrollParams(params));
            return;
        }
        this.removeTroll = Object.assign(removeTroll_send, {
            call:removeTroll_call
        });
        let resume_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('resume');
            return result;
        }
        let resume_call = async (): Promise<void> => {
            let result = await this.call('resume');
            return;
        }
        this.resume = Object.assign(resume_send, {
            call:resume_call
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
        let shutdownByAdmin_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByAdmin');
            return result;
        }
        let shutdownByAdmin_call = async (): Promise<void> => {
            let result = await this.call('shutdownByAdmin');
            return;
        }
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call:shutdownByAdmin_call
        });
        let shutdownByVoting_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByVoting');
            return result;
        }
        let shutdownByVoting_call = async (): Promise<void> => {
            let result = await this.call('shutdownByVoting');
            return;
        }
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call:shutdownByVoting_call
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
        let unlockGeneralTrollParams = (params: IUnlockGeneralTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce)];
        let unlockGeneralTroll_send = async (params: IUnlockGeneralTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('unlockGeneralTroll',unlockGeneralTrollParams(params));
            return result;
        }
        let unlockGeneralTroll_call = async (params: IUnlockGeneralTrollParams): Promise<void> => {
            let result = await this.call('unlockGeneralTroll',unlockGeneralTrollParams(params));
            return;
        }
        this.unlockGeneralTroll = Object.assign(unlockGeneralTroll_send, {
            call:unlockGeneralTroll_call
        });
        let unlockSuperTrollParams = (params: IUnlockSuperTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.unlock,params.vaultRegistry,this.wallet.utils.toString(params.penalty),this.wallet.utils.toString(params.nonce)];
        let unlockSuperTroll_send = async (params: IUnlockSuperTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('unlockSuperTroll',unlockSuperTrollParams(params));
            return result;
        }
        let unlockSuperTroll_call = async (params: IUnlockSuperTrollParams): Promise<void> => {
            let result = await this.call('unlockSuperTroll',unlockSuperTrollParams(params));
            return;
        }
        this.unlockSuperTroll = Object.assign(unlockSuperTroll_send, {
            call:unlockSuperTroll_call
        });
        let updateConfigStore_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateConfigStore');
            return result;
        }
        let updateConfigStore_call = async (): Promise<void> => {
            let result = await this.call('updateConfigStore');
            return;
        }
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call:updateConfigStore_call
        });
        let updateTrollParams = (params: IUpdateTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonce)];
        let updateTroll_send = async (params: IUpdateTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateTroll',updateTrollParams(params));
            return result;
        }
        let updateTroll_call = async (params: IUpdateTrollParams): Promise<void> => {
            let result = await this.call('updateTroll',updateTrollParams(params));
            return;
        }
        this.updateTroll = Object.assign(updateTroll_send, {
            call:updateTroll_call
        });
        let upgradeTrollRegistry_send = async (trollRegistry:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeTrollRegistry',[trollRegistry]);
            return result;
        }
        let upgradeTrollRegistry_call = async (trollRegistry:string): Promise<void> => {
            let result = await this.call('upgradeTrollRegistry',[trollRegistry]);
            return;
        }
        this.upgradeTrollRegistry = Object.assign(upgradeTrollRegistry_send, {
            call:upgradeTrollRegistry_call
        });
        let upgradeTrollRegistryByAdmin_send = async (trollRegistry:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeTrollRegistryByAdmin',[trollRegistry]);
            return result;
        }
        let upgradeTrollRegistryByAdmin_call = async (trollRegistry:string): Promise<void> => {
            let result = await this.call('upgradeTrollRegistryByAdmin',[trollRegistry]);
            return;
        }
        this.upgradeTrollRegistryByAdmin = Object.assign(upgradeTrollRegistryByAdmin_send, {
            call:upgradeTrollRegistryByAdmin_call
        });
        let upgradeVotingManager_send = async (votingManager:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeVotingManager',[votingManager]);
            return result;
        }
        let upgradeVotingManager_call = async (votingManager:string): Promise<void> => {
            let result = await this.call('upgradeVotingManager',[votingManager]);
            return;
        }
        this.upgradeVotingManager = Object.assign(upgradeVotingManager_send, {
            call:upgradeVotingManager_call
        });
        let upgradeVotingManagerByAdmin_send = async (votingManager:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeVotingManagerByAdmin',[votingManager]);
            return result;
        }
        let upgradeVotingManagerByAdmin_call = async (votingManager:string): Promise<void> => {
            let result = await this.call('upgradeVotingManagerByAdmin',[votingManager]);
            return;
        }
        this.upgradeVotingManagerByAdmin = Object.assign(upgradeVotingManagerByAdmin_send, {
            call:upgradeVotingManagerByAdmin_call
        });
    }
}
export module MOCK_TrollRegistry{
    export interface AddTrollEvent {troll:string,trollProfileIndex:BigNumber,isSuperTroll:boolean,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DelistTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface LockGeneralTrollEvent {trollProfileIndex:BigNumber,lockedBy:string,_event:Event}
    export interface LockSuperTrollEvent {trollProfileIndex:BigNumber,lockedBy:string,_event:Event}
    export interface ParamSetEvent {name:string,value:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface RemoveTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface ResumeEvent {_event:Event}
    export interface SetVotingExecutorEvent {newVotingExecutor:string,isActive:boolean,_event:Event}
    export interface ShutdownEvent {account:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnlockGeneralTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface UnlockSuperTrollEvent {trollProfileIndex:BigNumber,unlock:boolean,bridgeVault:string,penalty:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
    export interface UpdateTrollEvent {trollProfileIndex:BigNumber,oldTroll:string,newTroll:string,_event:Event}
    export interface UpgradeEvent {newTrollRegistry:string,_event:Event}
    export interface UpgradeVotingManagerEvent {newVotingManager:string,_event:Event}
}