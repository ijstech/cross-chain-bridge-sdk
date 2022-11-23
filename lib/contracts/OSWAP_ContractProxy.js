"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ContractProxy = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ContractProxy_json_1 = __importDefault(require("./OSWAP_ContractProxy.json"));
class OSWAP_ContractProxy extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ContractProxy_json_1.default.abi, OSWAP_ContractProxy_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, _value) {
        return this.__deploy([params.logic, params.votingManager, this.wallet.utils.stringToBytes(params.data)], { value: _value });
    }
    parseAdminChangedEvent(receipt) {
        return this.parseEvents(receipt, "AdminChanged").map(e => this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event) {
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "BeaconUpgraded").map(e => this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event) {
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "Upgraded").map(e => this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event) {
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    assign() {
        let implementation_call = async () => {
            let result = await this.call('implementation');
            return result;
        };
        this.implementation = implementation_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let upgradeToParams = (params) => [params.oldImplementation, params.newImplementation, params.finalize];
        let upgradeTo_send = async (params) => {
            let result = await this.send('upgradeTo', upgradeToParams(params));
            return result;
        };
        let upgradeTo_call = async (params) => {
            let result = await this.call('upgradeTo', upgradeToParams(params));
            return;
        };
        this.upgradeTo = Object.assign(upgradeTo_send, {
            call: upgradeTo_call
        });
        let upgradeToAndCallParams = (params) => [params.oldImplementation, params.newImplementation, this.wallet.utils.stringToBytes(params.data), params.finalize];
        let upgradeToAndCall_send = async (params, _value) => {
            let result = await this.send('upgradeToAndCall', upgradeToAndCallParams(params), { value: _value });
            return result;
        };
        let upgradeToAndCall_call = async (params, _value) => {
            let result = await this.call('upgradeToAndCall', upgradeToAndCallParams(params), { value: _value });
            return;
        };
        this.upgradeToAndCall = Object.assign(upgradeToAndCall_send, {
            call: upgradeToAndCall_call
        });
    }
}
exports.OSWAP_ContractProxy = OSWAP_ContractProxy;
