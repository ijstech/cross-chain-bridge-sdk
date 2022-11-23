"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ChainRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_ChainRegistry_json_1 = __importDefault(require("./OSWAP_ChainRegistry.json"));
class OSWAP_ChainRegistry extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ChainRegistry_json_1.default.abi, OSWAP_ChainRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(votingExecutorManager) {
        return this.__deploy([votingExecutorManager]);
    }
    parseNewChainEvent(receipt) {
        return this.parseEvents(receipt, "NewChain").map(e => this.decodeNewChainEvent(e));
    }
    decodeNewChainEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_wallet_1.BigNumber(result.chainId),
            status: new eth_wallet_1.BigNumber(result.status),
            govToken: result.govToken,
            _event: event
        };
    }
    parseUpdateAddressEvent(receipt) {
        return this.parseEvents(receipt, "UpdateAddress").map(e => this.decodeUpdateAddressEvent(e));
    }
    decodeUpdateAddressEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_wallet_1.BigNumber(result.chainId),
            contractName: result.contractName,
            _address: result._address,
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt) {
        return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_wallet_1.BigNumber(result.chainId),
            _address: result._address,
            _event: event
        };
    }
    parseUpdateMainChainAddressEvent(receipt) {
        return this.parseEvents(receipt, "UpdateMainChainAddress").map(e => this.decodeUpdateMainChainAddressEvent(e));
    }
    decodeUpdateMainChainAddressEvent(event) {
        let result = event.data;
        return {
            contractName: result.contractName,
            _address: result._address,
            _event: event
        };
    }
    parseUpdateStatusEvent(receipt) {
        return this.parseEvents(receipt, "UpdateStatus").map(e => this.decodeUpdateStatusEvent(e));
    }
    decodeUpdateStatusEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_wallet_1.BigNumber(result.chainId),
            status: new eth_wallet_1.BigNumber(result.status),
            _event: event
        };
    }
    parseUpdateVaultEvent(receipt) {
        return this.parseEvents(receipt, "UpdateVault").map(e => this.decodeUpdateVaultEvent(e));
    }
    decodeUpdateVaultEvent(event) {
        let result = event.data;
        return {
            index: new eth_wallet_1.BigNumber(result.index),
            chainId: new eth_wallet_1.BigNumber(result.chainId),
            vault: {
                token: result.vault.token,
                vaultRegistry: result.vault.vaultRegistry,
                bridgeVault: result.vault.bridgeVault
            },
            _event: event
        };
    }
    assign() {
        let allChains_call = async () => {
            let result = await this.call('allChains');
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.allChains = allChains_call;
        let chains_call = async (param1) => {
            let result = await this.call('chains', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.chains = chains_call;
        let chainsLength_call = async () => {
            let result = await this.call('chainsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.chainsLength = chainsLength_call;
        let configStore_call = async (param1) => {
            let result = await this.call('configStore', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.configStore = configStore_call;
        let getChainParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.stringToBytes32(params.contractnames)];
        let getChain_call = async (params) => {
            let result = await this.call('getChain', getChainParams(params));
            return {
                _status: new eth_wallet_1.BigNumber(result._status),
                _govToken: result._govToken,
                _configStore: result._configStore,
                _contracts: result._contracts,
                _vaults: result._vaults.map(e => ({
                    token: e.token,
                    vaultRegistry: e.vaultRegistry,
                    bridgeVault: e.bridgeVault
                }))
            };
        };
        this.getChain = getChain_call;
        let govToken_call = async (param1) => {
            let result = await this.call('govToken', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.govToken = govToken_call;
        let mainChainContractAddress_call = async (param1) => {
            let result = await this.call('mainChainContractAddress', [eth_wallet_1.Utils.stringToBytes32(param1)]);
            return result;
        };
        this.mainChainContractAddress = mainChainContractAddress_call;
        let sideChainContractAddressParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.stringToBytes32(params.param2)];
        let sideChainContractAddress_call = async (params) => {
            let result = await this.call('sideChainContractAddress', sideChainContractAddressParams(params));
            return result;
        };
        this.sideChainContractAddress = sideChainContractAddress_call;
        let status_call = async (param1) => {
            let result = await this.call('status', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.status = status_call;
        let tokenNames_call = async (param1) => {
            let result = await this.call('tokenNames', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.tokenNames = tokenNames_call;
        let tokenNamesLength_call = async () => {
            let result = await this.call('tokenNamesLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.tokenNamesLength = tokenNamesLength_call;
        let vaultsParams = (params) => [eth_wallet_1.Utils.toString(params.param1), eth_wallet_1.Utils.toString(params.param2)];
        let vaults_call = async (params) => {
            let result = await this.call('vaults', vaultsParams(params));
            return {
                token: result.token,
                vaultRegistry: result.vaultRegistry,
                bridgeVault: result.bridgeVault
            };
        };
        this.vaults = vaults_call;
        let vaultsLength_call = async () => {
            let result = await this.call('vaultsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.vaultsLength = vaultsLength_call;
        let votingExecutorManager_call = async () => {
            let result = await this.call('votingExecutorManager');
            return result;
        };
        this.votingExecutorManager = votingExecutorManager_call;
        let addChainParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.toString(params.status), params.govToken, params.configStore, eth_wallet_1.Utils.stringToBytes32(params.contractNames), params.address];
        let addChain_send = async (params) => {
            let result = await this.send('addChain', addChainParams(params));
            return result;
        };
        let addChain_call = async (params) => {
            let result = await this.call('addChain', addChainParams(params));
            return;
        };
        this.addChain = Object.assign(addChain_send, {
            call: addChain_call
        });
        let initParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.toString(params.status), params.govToken, params.configStore, eth_wallet_1.Utils.stringToBytes32(params.mainChainContractNames), params.mainChainContractAddress, eth_wallet_1.Utils.stringToBytes32(params.contractNames), params.address, eth_wallet_1.Utils.stringToBytes32(params.tokenNames), params.vault.map(a0 => a0.map(e => ([e.token, e.vaultRegistry, e.bridgeVault])))];
        let init_send = async (params) => {
            let result = await this.send('init', initParams(params));
            return result;
        };
        let init_call = async (params) => {
            let result = await this.call('init', initParams(params));
            return;
        };
        this.init = Object.assign(init_send, {
            call: init_call
        });
        let newVaultParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.name), eth_wallet_1.Utils.toString(params.chainId), params.vault.map(e => ([e.token, e.vaultRegistry, e.bridgeVault]))];
        let newVault_send = async (params) => {
            let result = await this.send('newVault', newVaultParams(params));
            return result;
        };
        let newVault_call = async (params) => {
            let result = await this.call('newVault', newVaultParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.newVault = Object.assign(newVault_send, {
            call: newVault_call
        });
        let updateAddressParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.stringToBytes32(params.contractName), params.address];
        let updateAddress_send = async (params) => {
            let result = await this.send('updateAddress', updateAddressParams(params));
            return result;
        };
        let updateAddress_call = async (params) => {
            let result = await this.call('updateAddress', updateAddressParams(params));
            return;
        };
        this.updateAddress = Object.assign(updateAddress_send, {
            call: updateAddress_call
        });
        let updateAddressesParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.stringToBytes32(params.contractNames), params.addresses];
        let updateAddresses_send = async (params) => {
            let result = await this.send('updateAddresses', updateAddressesParams(params));
            return result;
        };
        let updateAddresses_call = async (params) => {
            let result = await this.call('updateAddresses', updateAddressesParams(params));
            return;
        };
        this.updateAddresses = Object.assign(updateAddresses_send, {
            call: updateAddresses_call
        });
        let updateConfigStoreParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), params.address];
        let updateConfigStore_send = async (params) => {
            let result = await this.send('updateConfigStore', updateConfigStoreParams(params));
            return result;
        };
        let updateConfigStore_call = async (params) => {
            let result = await this.call('updateConfigStore', updateConfigStoreParams(params));
            return;
        };
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call: updateConfigStore_call
        });
        let updateMainChainAddressParams = (params) => [eth_wallet_1.Utils.stringToBytes32(params.contractName), params.address];
        let updateMainChainAddress_send = async (params) => {
            let result = await this.send('updateMainChainAddress', updateMainChainAddressParams(params));
            return result;
        };
        let updateMainChainAddress_call = async (params) => {
            let result = await this.call('updateMainChainAddress', updateMainChainAddressParams(params));
            return;
        };
        this.updateMainChainAddress = Object.assign(updateMainChainAddress_send, {
            call: updateMainChainAddress_call
        });
        let updateStatusParams = (params) => [eth_wallet_1.Utils.toString(params.chainId), eth_wallet_1.Utils.toString(params.status)];
        let updateStatus_send = async (params) => {
            let result = await this.send('updateStatus', updateStatusParams(params));
            return result;
        };
        let updateStatus_call = async (params) => {
            let result = await this.call('updateStatus', updateStatusParams(params));
            return;
        };
        this.updateStatus = Object.assign(updateStatus_send, {
            call: updateStatus_call
        });
        let updateVaultParams = (params) => [eth_wallet_1.Utils.toString(params.index), eth_wallet_1.Utils.toString(params.chainId), [params.vault.token, params.vault.vaultRegistry, params.vault.bridgeVault]];
        let updateVault_send = async (params) => {
            let result = await this.send('updateVault', updateVaultParams(params));
            return result;
        };
        let updateVault_call = async (params) => {
            let result = await this.call('updateVault', updateVaultParams(params));
            return;
        };
        this.updateVault = Object.assign(updateVault_send, {
            call: updateVault_call
        });
    }
}
exports.OSWAP_ChainRegistry = OSWAP_ChainRegistry;
