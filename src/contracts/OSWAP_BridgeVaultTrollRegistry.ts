import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_BridgeVaultTrollRegistry.json";

export interface IHashUnstakeRequestParams {backer:string;trollProfileIndex:number|BigNumber;shares:number|BigNumber;nonce:number|BigNumber}
export interface IPenalizeSuperTrollParams {trollProfileIndex:number|BigNumber;amount:number|BigNumber}
export interface IStakeParams {trollProfileIndex:number|BigNumber;amount:number|BigNumber}
export interface IStakedByParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IStakedByInvParams {param1:number|BigNumber;param2:string}
export interface IUnstakeParams {backer:string;shares:number|BigNumber}
export interface IUnstakeApproveParams {signatures:string[];backer:string;trollProfileIndex:number|BigNumber;shares:number|BigNumber;nonce:number|BigNumber}
export interface IVerifyStakedValueParams {msgSender:string;signatures:string[];paramsHash:string}
export class OSWAP_BridgeVaultTrollRegistry extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(trollRegistry:string): Promise<string>{
        return this.__deploy([trollRegistry]);
    }
    parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent[]{
        return this.parseEvents(receipt, "Penalty").map(e=>this.decodePenaltyEvent(e));
    }
    decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.StakeEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            shares: new BigNumber(result.shares),
            backerBalance: new BigNumber(result.backerBalance),
            trollBalance: new BigNumber(result.trollBalance),
            totalShares: new BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            shares: new BigNumber(result.shares),
            approvalDecrement: new BigNumber(result.approvalDecrement),
            trollBalance: new BigNumber(result.trollBalance),
            totalShares: new BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent[]{
        return this.parseEvents(receipt, "UnstakeApproval").map(e=>this.decodeUnstakeApprovalEvent(e));
    }
    decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent{
        let result = event.data;
        return {
            backer: result.backer,
            msgSender: result.msgSender,
            signers: result.signers.map(e=>new BigNumber(e)),
            shares: new BigNumber(result.shares),
            _event: event
        };
    }
    parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent[]{
        return this.parseEvents(receipt, "UnstakeRequest").map(e=>this.decodeUnstakeRequestEvent(e));
    }
    decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            shares: new BigNumber(result.shares),
            backerBalance: new BigNumber(result.backerBalance),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent[]{
        return this.parseEvents(receipt, "UpdateTrollRegistry").map(e=>this.decodeUpdateTrollRegistryEvent(e));
    }
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    backerStakes: {
        (param1:string): Promise<{trollProfileIndex:BigNumber,shares:BigNumber,pendingWithdrawal:BigNumber,approvedWithdrawal:BigNumber}>;
    }
    bridgeVault: {
        (): Promise<string>;
    }
    configStore: {
        (): Promise<string>;
    }
    getBackers: {
        (trollProfileIndex:number|BigNumber): Promise<string[]>;
    }
    govToken: {
        (): Promise<string>;
    }
    hashUnstakeRequest: {
        (params: IHashUnstakeRequestParams): Promise<string>;
    }
    initAddress: {
        (bridgeVault:string): Promise<TransactionReceipt>;
        call: (bridgeVault:string) => Promise<void>;
    }
    lastTrollTxCount: {
        (param1:string): Promise<BigNumber>;
    }
    maxWithdrawal: {
        (backer:string): Promise<BigNumber>;
    }
    penalizeSuperTroll: {
        (params: IPenalizeSuperTrollParams): Promise<TransactionReceipt>;
        call: (params: IPenalizeSuperTrollParams) => Promise<void>;
    }
    stake: {
        (params: IStakeParams): Promise<TransactionReceipt>;
        call: (params: IStakeParams) => Promise<BigNumber>;
    }
    stakedBy: {
        (params: IStakedByParams): Promise<string>;
    }
    stakedByInv: {
        (params: IStakedByInvParams): Promise<BigNumber>;
    }
    stakedByLength: {
        (trollProfileIndex:number|BigNumber): Promise<BigNumber>;
    }
    transactionsCount: {
        (): Promise<BigNumber>;
    }
    trollRegistry: {
        (): Promise<string>;
    }
    trollStakesBalances: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    trollStakesTotalShares: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    unstake: {
        (params: IUnstakeParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams) => Promise<void>;
    }
    unstakeApprove: {
        (params: IUnstakeApproveParams): Promise<TransactionReceipt>;
        call: (params: IUnstakeApproveParams) => Promise<void>;
    }
    unstakeRequest: {
        (shares:number|BigNumber): Promise<TransactionReceipt>;
        call: (shares:number|BigNumber) => Promise<void>;
    }
    updateConfigStore: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    updateTrollRegistry: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    usedNonce: {
        (param1:string): Promise<boolean>;
    }
    verifyStakedValue: {
        (params: IVerifyStakedValueParams): Promise<TransactionReceipt>;
        call: (params: IVerifyStakedValueParams) => Promise<{superTrollCount:BigNumber,totalStake:BigNumber,signers:BigNumber[]}>;
    }
    private assign(){
        let backerStakes_call = async (param1:string): Promise<{trollProfileIndex:BigNumber,shares:BigNumber,pendingWithdrawal:BigNumber,approvedWithdrawal:BigNumber}> => {
            let result = await this.call('backerStakes',[param1]);
            return {
                trollProfileIndex: new BigNumber(result.trollProfileIndex),
                shares: new BigNumber(result.shares),
                pendingWithdrawal: new BigNumber(result.pendingWithdrawal),
                approvedWithdrawal: new BigNumber(result.approvedWithdrawal)
            };
        }
        this.backerStakes = backerStakes_call
        let bridgeVault_call = async (): Promise<string> => {
            let result = await this.call('bridgeVault');
            return result;
        }
        this.bridgeVault = bridgeVault_call
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let getBackers_call = async (trollProfileIndex:number|BigNumber): Promise<string[]> => {
            let result = await this.call('getBackers',[this.wallet.utils.toString(trollProfileIndex)]);
            return result;
        }
        this.getBackers = getBackers_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let hashUnstakeRequestParams = (params: IHashUnstakeRequestParams) => [params.backer,this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.shares),this.wallet.utils.toString(params.nonce)];
        let hashUnstakeRequest_call = async (params: IHashUnstakeRequestParams): Promise<string> => {
            let result = await this.call('hashUnstakeRequest',hashUnstakeRequestParams(params));
            return result;
        }
        this.hashUnstakeRequest = hashUnstakeRequest_call
        let lastTrollTxCount_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('lastTrollTxCount',[param1]);
            return new BigNumber(result);
        }
        this.lastTrollTxCount = lastTrollTxCount_call
        let maxWithdrawal_call = async (backer:string): Promise<BigNumber> => {
            let result = await this.call('maxWithdrawal',[backer]);
            return new BigNumber(result);
        }
        this.maxWithdrawal = maxWithdrawal_call
        let stakedByParams = (params: IStakedByParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params: IStakedByParams): Promise<string> => {
            let result = await this.call('stakedBy',stakedByParams(params));
            return result;
        }
        this.stakedBy = stakedBy_call
        let stakedByInvParams = (params: IStakedByInvParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let stakedByInv_call = async (params: IStakedByInvParams): Promise<BigNumber> => {
            let result = await this.call('stakedByInv',stakedByInvParams(params));
            return new BigNumber(result);
        }
        this.stakedByInv = stakedByInv_call
        let stakedByLength_call = async (trollProfileIndex:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('stakedByLength',[this.wallet.utils.toString(trollProfileIndex)]);
            return new BigNumber(result);
        }
        this.stakedByLength = stakedByLength_call
        let transactionsCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('transactionsCount');
            return new BigNumber(result);
        }
        this.transactionsCount = transactionsCount_call
        let trollRegistry_call = async (): Promise<string> => {
            let result = await this.call('trollRegistry');
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let trollStakesBalances_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('trollStakesBalances',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.trollStakesBalances = trollStakesBalances_call
        let trollStakesTotalShares_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('trollStakesTotalShares',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.trollStakesTotalShares = trollStakesTotalShares_call
        let usedNonce_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('usedNonce',[this.wallet.utils.stringToBytes32(param1)]);
            return result;
        }
        this.usedNonce = usedNonce_call
        let initAddress_send = async (bridgeVault:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[bridgeVault]);
            return result;
        }
        let initAddress_call = async (bridgeVault:string): Promise<void> => {
            let result = await this.call('initAddress',[bridgeVault]);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let penalizeSuperTrollParams = (params: IPenalizeSuperTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.amount)];
        let penalizeSuperTroll_send = async (params: IPenalizeSuperTrollParams): Promise<TransactionReceipt> => {
            let result = await this.send('penalizeSuperTroll',penalizeSuperTrollParams(params));
            return result;
        }
        let penalizeSuperTroll_call = async (params: IPenalizeSuperTrollParams): Promise<void> => {
            let result = await this.call('penalizeSuperTroll',penalizeSuperTrollParams(params));
            return;
        }
        this.penalizeSuperTroll = Object.assign(penalizeSuperTroll_send, {
            call:penalizeSuperTroll_call
        });
        let stakeParams = (params: IStakeParams) => [this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.amount)];
        let stake_send = async (params: IStakeParams): Promise<TransactionReceipt> => {
            let result = await this.send('stake',stakeParams(params));
            return result;
        }
        let stake_call = async (params: IStakeParams): Promise<BigNumber> => {
            let result = await this.call('stake',stakeParams(params));
            return new BigNumber(result);
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let unstakeParams = (params: IUnstakeParams) => [params.backer,this.wallet.utils.toString(params.shares)];
        let unstake_send = async (params: IUnstakeParams): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',unstakeParams(params));
            return result;
        }
        let unstake_call = async (params: IUnstakeParams): Promise<void> => {
            let result = await this.call('unstake',unstakeParams(params));
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let unstakeApproveParams = (params: IUnstakeApproveParams) => [this.wallet.utils.stringToBytes(params.signatures),params.backer,this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.shares),this.wallet.utils.toString(params.nonce)];
        let unstakeApprove_send = async (params: IUnstakeApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeApprove',unstakeApproveParams(params));
            return result;
        }
        let unstakeApprove_call = async (params: IUnstakeApproveParams): Promise<void> => {
            let result = await this.call('unstakeApprove',unstakeApproveParams(params));
            return;
        }
        this.unstakeApprove = Object.assign(unstakeApprove_send, {
            call:unstakeApprove_call
        });
        let unstakeRequest_send = async (shares:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeRequest',[this.wallet.utils.toString(shares)]);
            return result;
        }
        let unstakeRequest_call = async (shares:number|BigNumber): Promise<void> => {
            let result = await this.call('unstakeRequest',[this.wallet.utils.toString(shares)]);
            return;
        }
        this.unstakeRequest = Object.assign(unstakeRequest_send, {
            call:unstakeRequest_call
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
        let updateTrollRegistry_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateTrollRegistry');
            return result;
        }
        let updateTrollRegistry_call = async (): Promise<void> => {
            let result = await this.call('updateTrollRegistry');
            return;
        }
        this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
            call:updateTrollRegistry_call
        });
        let verifyStakedValueParams = (params: IVerifyStakedValueParams) => [params.msgSender,this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.paramsHash)];
        let verifyStakedValue_send = async (params: IVerifyStakedValueParams): Promise<TransactionReceipt> => {
            let result = await this.send('verifyStakedValue',verifyStakedValueParams(params));
            return result;
        }
        let verifyStakedValue_call = async (params: IVerifyStakedValueParams): Promise<{superTrollCount:BigNumber,totalStake:BigNumber,signers:BigNumber[]}> => {
            let result = await this.call('verifyStakedValue',verifyStakedValueParams(params));
            return {
                superTrollCount: new BigNumber(result.superTrollCount),
                totalStake: new BigNumber(result.totalStake),
                signers: result.signers.map(e=>new BigNumber(e))
            };
        }
        this.verifyStakedValue = Object.assign(verifyStakedValue_send, {
            call:verifyStakedValue_call
        });
    }
}
export module OSWAP_BridgeVaultTrollRegistry{
    export interface PenaltyEvent {trollProfileIndex:BigNumber,amount:BigNumber,_event:Event}
    export interface StakeEvent {backer:string,trollProfileIndex:BigNumber,amount:BigNumber,shares:BigNumber,backerBalance:BigNumber,trollBalance:BigNumber,totalShares:BigNumber,_event:Event}
    export interface UnstakeEvent {backer:string,trollProfileIndex:BigNumber,amount:BigNumber,shares:BigNumber,approvalDecrement:BigNumber,trollBalance:BigNumber,totalShares:BigNumber,_event:Event}
    export interface UnstakeApprovalEvent {backer:string,msgSender:string,signers:BigNumber[],shares:BigNumber,_event:Event}
    export interface UnstakeRequestEvent {backer:string,trollProfileIndex:BigNumber,shares:BigNumber,backerBalance:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
    export interface UpdateTrollRegistryEvent {newTrollRegistry:string,_event:Event}
}