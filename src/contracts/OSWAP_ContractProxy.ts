import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ContractProxy.json";

export interface IDeployParams {logic:string;votingManager:string;data:string}
export interface IUpgradeToParams {oldImplementation:string;newImplementation:string;finalize:boolean}
export interface IUpgradeToAndCallParams {oldImplementation:string;newImplementation:string;data:string;finalize:boolean}
export class OSWAP_ContractProxy extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams,_value:number|BigNumber): Promise<string>{
        return this.__deploy([params.logic,params.votingManager,this.wallet.utils.stringToBytes(params.data)], {value:_value});
    }
    parseAdminChangedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AdminChangedEvent[]{
        return this.parseEvents(receipt, "AdminChanged").map(e=>this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event: Event): OSWAP_ContractProxy.AdminChangedEvent{
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_ContractProxy.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.BeaconUpgradedEvent[]{
        return this.parseEvents(receipt, "BeaconUpgraded").map(e=>this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event: Event): OSWAP_ContractProxy.BeaconUpgradedEvent{
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_ContractProxy.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ContractProxy.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_ContractProxy.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.UpgradedEvent[]{
        return this.parseEvents(receipt, "Upgraded").map(e=>this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event: Event): OSWAP_ContractProxy.UpgradedEvent{
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    implementation: {
        (): Promise<string>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
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
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    upgradeTo: {
        (params: IUpgradeToParams): Promise<TransactionReceipt>;
        call: (params: IUpgradeToParams) => Promise<void>;
    }
    upgradeToAndCall: {
        (params: IUpgradeToAndCallParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IUpgradeToAndCallParams,_value:number|BigNumber) => Promise<void>;
    }
    private assign(){
        let implementation_call = async (): Promise<string> => {
            let result = await this.call('implementation');
            return result;
        }
        this.implementation = implementation_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
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
        let upgradeToParams = (params: IUpgradeToParams) => [params.oldImplementation,params.newImplementation,params.finalize];
        let upgradeTo_send = async (params: IUpgradeToParams): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeTo',upgradeToParams(params));
            return result;
        }
        let upgradeTo_call = async (params: IUpgradeToParams): Promise<void> => {
            let result = await this.call('upgradeTo',upgradeToParams(params));
            return;
        }
        this.upgradeTo = Object.assign(upgradeTo_send, {
            call:upgradeTo_call
        });
        let upgradeToAndCallParams = (params: IUpgradeToAndCallParams) => [params.oldImplementation,params.newImplementation,this.wallet.utils.stringToBytes(params.data),params.finalize];
        let upgradeToAndCall_send = async (params: IUpgradeToAndCallParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeToAndCall',upgradeToAndCallParams(params), {value:_value});
            return result;
        }
        let upgradeToAndCall_call = async (params: IUpgradeToAndCallParams,_value:number|BigNumber): Promise<void> => {
            let result = await this.call('upgradeToAndCall',upgradeToAndCallParams(params), {value:_value});
            return;
        }
        this.upgradeToAndCall = Object.assign(upgradeToAndCall_send, {
            call:upgradeToAndCall_call
        });
    }
}
export module OSWAP_ContractProxy{
    export interface AdminChangedEvent {previousAdmin:string,newAdmin:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BeaconUpgradedEvent {beacon:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpgradedEvent {implementation:string,_event:Event}
}