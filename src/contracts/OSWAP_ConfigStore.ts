import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ConfigStore.json";

export interface ISetConfigParams {name:string;value:string}
export interface ISetConfig2Params {name:string;value1:string;value2:string}
export interface ISetConfigAddressParams {name:string;value:string}
export interface ISetOracleParams {asset:string;oracle:string}
export class OSWAP_ConfigStore extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{govToken:string,swapPolicy:string,lpWithdrawlDelay:number|BigNumber,transactionsGap:number|BigNumber,superTrollMinCount:number|BigNumber,generalTrollMinCount:number|BigNumber,transactionFee:number|BigNumber,router:string,rebalancer:string,feeTo:string,wrapper:string,asset:string[],baseFee:(number|BigNumber)[]}): Promise<string>{
        return this.__deploy([[params.govToken,params.swapPolicy,this.wallet.utils.toString(params.lpWithdrawlDelay),this.wallet.utils.toString(params.transactionsGap),this.wallet.utils.toString(params.superTrollMinCount),this.wallet.utils.toString(params.generalTrollMinCount),this.wallet.utils.toString(params.transactionFee),params.router,params.rebalancer,params.feeTo,params.wrapper,params.asset,this.wallet.utils.toString(params.baseFee)]]);
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_ConfigStore.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_ConfigStore.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet1Event[]{
        return this.parseEvents(receipt, "ParamSet1").map(e=>this.decodeParamSet1Event(e));
    }
    decodeParamSet1Event(event: Event): OSWAP_ConfigStore.ParamSet1Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            _event: event
        };
    }
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet2Event[]{
        return this.parseEvents(receipt, "ParamSet2").map(e=>this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event: Event): OSWAP_ConfigStore.ParamSet2Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ConfigStore.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_ConfigStore.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpdateVotingExecutorManagerEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent[]{
        return this.parseEvents(receipt, "UpdateVotingExecutorManager").map(e=>this.decodeUpdateVotingExecutorManagerEvent(e));
    }
    decodeUpdateVotingExecutorManagerEvent(event: Event): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent{
        let result = event.data;
        return {
            newVotingExecutorManager: result.newVotingExecutorManager,
            _event: event
        };
    }
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpgradeEvent[]{
        return this.parseEvents(receipt, "Upgrade").map(e=>this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event: Event): OSWAP_ConfigStore.UpgradeEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    baseFee: {
        (param1:string): Promise<BigNumber>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    feeTo: {
        (): Promise<string>;
    }
    generalTrollMinCount: {
        (): Promise<BigNumber>;
    }
    getBridgeParams: {
        (asset:string): Promise<{param1:string,param2:string,param3:string,param4:string,param5:BigNumber,param6:BigNumber}>;
    }
    getRebalanceParams: {
        (asset:string): Promise<{param1:string,param2:string,param3:string}>;
    }
    getSignatureVerificationParams: {
        (): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}>;
    }
    govToken: {
        (): Promise<string>;
    }
    initAddress: {
        (votingExecutorManager:string): Promise<TransactionReceipt>;
        call: (votingExecutorManager:string) => Promise<void>;
    }
    isApprovedProxy: {
        (param1:string): Promise<boolean>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    lpWithdrawlDelay: {
        (): Promise<BigNumber>;
    }
    newConfigStore: {
        (): Promise<string>;
    }
    newOwner: {
        (): Promise<string>;
    }
    owner: {
        (): Promise<string>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    priceOracle: {
        (param1:string): Promise<string>;
    }
    rebalancer: {
        (): Promise<string>;
    }
    router: {
        (): Promise<string>;
    }
    setConfig: {
        (params: ISetConfigParams): Promise<TransactionReceipt>;
        call: (params: ISetConfigParams) => Promise<void>;
    }
    setConfig2: {
        (params: ISetConfig2Params): Promise<TransactionReceipt>;
        call: (params: ISetConfig2Params) => Promise<void>;
    }
    setConfigAddress: {
        (params: ISetConfigAddressParams): Promise<TransactionReceipt>;
        call: (params: ISetConfigAddressParams) => Promise<void>;
    }
    setOracle: {
        (params: ISetOracleParams): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams) => Promise<void>;
    }
    setSwapPolicy: {
        (swapPolicy:string): Promise<TransactionReceipt>;
        call: (swapPolicy:string) => Promise<void>;
    }
    superTrollMinCount: {
        (): Promise<BigNumber>;
    }
    swapPolicy: {
        (): Promise<string>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transactionFee: {
        (): Promise<BigNumber>;
    }
    transactionsGap: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    updateVotingExecutorManager: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    upgrade: {
        (configStore:string): Promise<TransactionReceipt>;
        call: (configStore:string) => Promise<void>;
    }
    votingExecutorManager: {
        (): Promise<string>;
    }
    private assign(){
        let baseFee_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('baseFee',[param1]);
            return new BigNumber(result);
        }
        this.baseFee = baseFee_call
        let feeTo_call = async (): Promise<string> => {
            let result = await this.call('feeTo');
            return result;
        }
        this.feeTo = feeTo_call
        let generalTrollMinCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('generalTrollMinCount');
            return new BigNumber(result);
        }
        this.generalTrollMinCount = generalTrollMinCount_call
        let getBridgeParams_call = async (asset:string): Promise<{param1:string,param2:string,param3:string,param4:string,param5:BigNumber,param6:BigNumber}> => {
            let result = await this.call('getBridgeParams',[asset]);
            return {
                param1: result[0],
                param2: result[1],
                param3: result[2],
                param4: result[3],
                param5: new BigNumber(result[4]),
                param6: new BigNumber(result[5])
            };
        }
        this.getBridgeParams = getBridgeParams_call
        let getRebalanceParams_call = async (asset:string): Promise<{param1:string,param2:string,param3:string}> => {
            let result = await this.call('getRebalanceParams',[asset]);
            return {
                param1: result[0],
                param2: result[1],
                param3: result[2]
            };
        }
        this.getRebalanceParams = getRebalanceParams_call
        let getSignatureVerificationParams_call = async (): Promise<{param1:BigNumber,param2:BigNumber,param3:BigNumber}> => {
            let result = await this.call('getSignatureVerificationParams');
            return {
                param1: new BigNumber(result[0]),
                param2: new BigNumber(result[1]),
                param3: new BigNumber(result[2])
            };
        }
        this.getSignatureVerificationParams = getSignatureVerificationParams_call
        let govToken_call = async (): Promise<string> => {
            let result = await this.call('govToken');
            return result;
        }
        this.govToken = govToken_call
        let isApprovedProxy_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isApprovedProxy',[param1]);
            return result;
        }
        this.isApprovedProxy = isApprovedProxy_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let lpWithdrawlDelay_call = async (): Promise<BigNumber> => {
            let result = await this.call('lpWithdrawlDelay');
            return new BigNumber(result);
        }
        this.lpWithdrawlDelay = lpWithdrawlDelay_call
        let newConfigStore_call = async (): Promise<string> => {
            let result = await this.call('newConfigStore');
            return result;
        }
        this.newConfigStore = newConfigStore_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let priceOracle_call = async (param1:string): Promise<string> => {
            let result = await this.call('priceOracle',[param1]);
            return result;
        }
        this.priceOracle = priceOracle_call
        let rebalancer_call = async (): Promise<string> => {
            let result = await this.call('rebalancer');
            return result;
        }
        this.rebalancer = rebalancer_call
        let router_call = async (): Promise<string> => {
            let result = await this.call('router');
            return result;
        }
        this.router = router_call
        let superTrollMinCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('superTrollMinCount');
            return new BigNumber(result);
        }
        this.superTrollMinCount = superTrollMinCount_call
        let swapPolicy_call = async (): Promise<string> => {
            let result = await this.call('swapPolicy');
            return result;
        }
        this.swapPolicy = swapPolicy_call
        let transactionFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('transactionFee');
            return new BigNumber(result);
        }
        this.transactionFee = transactionFee_call
        let transactionsGap_call = async (): Promise<BigNumber> => {
            let result = await this.call('transactionsGap');
            return new BigNumber(result);
        }
        this.transactionsGap = transactionsGap_call
        let votingExecutorManager_call = async (): Promise<string> => {
            let result = await this.call('votingExecutorManager');
            return result;
        }
        this.votingExecutorManager = votingExecutorManager_call
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
        let initAddress_send = async (votingExecutorManager:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[votingExecutorManager]);
            return result;
        }
        let initAddress_call = async (votingExecutorManager:string): Promise<void> => {
            let result = await this.call('initAddress',[votingExecutorManager]);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
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
        let setConfigParams = (params: ISetConfigParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.value)];
        let setConfig_send = async (params: ISetConfigParams): Promise<TransactionReceipt> => {
            let result = await this.send('setConfig',setConfigParams(params));
            return result;
        }
        let setConfig_call = async (params: ISetConfigParams): Promise<void> => {
            let result = await this.call('setConfig',setConfigParams(params));
            return;
        }
        this.setConfig = Object.assign(setConfig_send, {
            call:setConfig_call
        });
        let setConfig2Params = (params: ISetConfig2Params) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.value1),this.wallet.utils.stringToBytes32(params.value2)];
        let setConfig2_send = async (params: ISetConfig2Params): Promise<TransactionReceipt> => {
            let result = await this.send('setConfig2',setConfig2Params(params));
            return result;
        }
        let setConfig2_call = async (params: ISetConfig2Params): Promise<void> => {
            let result = await this.call('setConfig2',setConfig2Params(params));
            return;
        }
        this.setConfig2 = Object.assign(setConfig2_send, {
            call:setConfig2_call
        });
        let setConfigAddressParams = (params: ISetConfigAddressParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.value)];
        let setConfigAddress_send = async (params: ISetConfigAddressParams): Promise<TransactionReceipt> => {
            let result = await this.send('setConfigAddress',setConfigAddressParams(params));
            return result;
        }
        let setConfigAddress_call = async (params: ISetConfigAddressParams): Promise<void> => {
            let result = await this.call('setConfigAddress',setConfigAddressParams(params));
            return;
        }
        this.setConfigAddress = Object.assign(setConfigAddress_send, {
            call:setConfigAddress_call
        });
        let setOracleParams = (params: ISetOracleParams) => [params.asset,params.oracle];
        let setOracle_send = async (params: ISetOracleParams): Promise<TransactionReceipt> => {
            let result = await this.send('setOracle',setOracleParams(params));
            return result;
        }
        let setOracle_call = async (params: ISetOracleParams): Promise<void> => {
            let result = await this.call('setOracle',setOracleParams(params));
            return;
        }
        this.setOracle = Object.assign(setOracle_send, {
            call:setOracle_call
        });
        let setSwapPolicy_send = async (swapPolicy:string): Promise<TransactionReceipt> => {
            let result = await this.send('setSwapPolicy',[swapPolicy]);
            return result;
        }
        let setSwapPolicy_call = async (swapPolicy:string): Promise<void> => {
            let result = await this.call('setSwapPolicy',[swapPolicy]);
            return;
        }
        this.setSwapPolicy = Object.assign(setSwapPolicy_send, {
            call:setSwapPolicy_call
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
        let updateVotingExecutorManager_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateVotingExecutorManager');
            return result;
        }
        let updateVotingExecutorManager_call = async (): Promise<void> => {
            let result = await this.call('updateVotingExecutorManager');
            return;
        }
        this.updateVotingExecutorManager = Object.assign(updateVotingExecutorManager_send, {
            call:updateVotingExecutorManager_call
        });
        let upgrade_send = async (configStore:string): Promise<TransactionReceipt> => {
            let result = await this.send('upgrade',[configStore]);
            return result;
        }
        let upgrade_call = async (configStore:string): Promise<void> => {
            let result = await this.call('upgrade',[configStore]);
            return;
        }
        this.upgrade = Object.assign(upgrade_send, {
            call:upgrade_call
        });
    }
}
export module OSWAP_ConfigStore{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface ParamSet1Event {name:string,value1:string,_event:Event}
    export interface ParamSet2Event {name:string,value1:string,value2:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpdateVotingExecutorManagerEvent {newVotingExecutorManager:string,_event:Event}
    export interface UpgradeEvent {newConfigStore:string,_event:Event}
}