"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeVaultTrollRegistry = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const contracts_1 = require("../contracts");
class BridgeVaultTrollRegistry {
    constructor(wallet, address) {
        this.address = address;
        this._bridgeVaultTrollRegistry = new contracts_1.OSWAP_BridgeVaultTrollRegistry(wallet, address);
    }
    async deploy(trollRegistry) {
        this.address = await this._bridgeVaultTrollRegistry.deploy(trollRegistry);
        return this.address;
    }
    async decodeStakeEvent(event) {
        let stakeEvent = this._bridgeVaultTrollRegistry.decodeStakeEvent(event);
        stakeEvent.amount = eth_wallet_1.Utils.fromDecimals(stakeEvent.amount);
        stakeEvent.shares = eth_wallet_1.Utils.fromDecimals(stakeEvent.shares);
        stakeEvent.backerBalance = eth_wallet_1.Utils.fromDecimals(stakeEvent.backerBalance);
        stakeEvent.trollBalance = eth_wallet_1.Utils.fromDecimals(stakeEvent.trollBalance);
        stakeEvent.totalShares = eth_wallet_1.Utils.fromDecimals(stakeEvent.totalShares);
        return stakeEvent;
    }
    async parseUnstakeRequestEvent(receipt) {
        let unstakeEvent = this._bridgeVaultTrollRegistry.parseUnstakeRequestEvent(receipt)[0];
        unstakeEvent.shares = eth_wallet_1.Utils.fromDecimals(unstakeEvent.shares);
        unstakeEvent.backerBalance = eth_wallet_1.Utils.fromDecimals(unstakeEvent.backerBalance);
        return unstakeEvent;
    }
    async decodeUnstakeRequestEvent(event) {
        let unstakeEvent = this._bridgeVaultTrollRegistry.decodeUnstakeRequestEvent(event);
        unstakeEvent.shares = eth_wallet_1.Utils.fromDecimals(unstakeEvent.shares);
        unstakeEvent.backerBalance = eth_wallet_1.Utils.fromDecimals(unstakeEvent.backerBalance);
        return unstakeEvent;
    }
    async parseUnstakeApprovalEvent(receipt) {
        let unstakeEvent = this._bridgeVaultTrollRegistry.parseUnstakeApprovalEvent(receipt)[0];
        unstakeEvent.shares = eth_wallet_1.Utils.fromDecimals(unstakeEvent.shares);
        return unstakeEvent;
    }
    async decodeUnstakeApprovalEvent(event) {
        let unstakeEvent = this._bridgeVaultTrollRegistry.decodeUnstakeApprovalEvent(event);
        unstakeEvent.shares = eth_wallet_1.Utils.fromDecimals(unstakeEvent.shares);
        return unstakeEvent;
    }
    async backerStakes(backer) {
        let result = await this._bridgeVaultTrollRegistry.backerStakes(backer);
        result.shares = eth_wallet_1.Utils.fromDecimals(result.shares);
        result.pendingWithdrawal = eth_wallet_1.Utils.fromDecimals(result.pendingWithdrawal);
        result.approvedWithdrawal = eth_wallet_1.Utils.fromDecimals(result.approvedWithdrawal);
        return result;
    }
    get configStore() {
        return this._bridgeVaultTrollRegistry.configStore();
    }
    async getBackers(trollProfileIndex) {
        return this._bridgeVaultTrollRegistry.getBackers(trollProfileIndex);
    }
    get govToken() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this.__govToken)
                    this.__govToken = new eth_wallet_1.Erc20(this._bridgeVaultTrollRegistry.wallet, await this._bridgeVaultTrollRegistry.govToken());
                resolve(this.__govToken);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    async hashUnstakeRequest(params) {
        return this._bridgeVaultTrollRegistry.hashUnstakeRequest(params);
    }
    async lastTrollTxCount(troll) {
        return (async () => (await this._bridgeVaultTrollRegistry.lastTrollTxCount(troll)).toNumber())();
    }
    async maxWithdrawal(backer) {
        return this._bridgeVaultTrollRegistry.maxWithdrawal(backer);
    }
    async penalizeSuperTroll(params) {
        let receipt = await this._bridgeVaultTrollRegistry.penalizeSuperTroll(params);
        let event = this._bridgeVaultTrollRegistry.parsePenaltyEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount);
        return event;
    }
    async stake(params) {
        params.amount = eth_wallet_1.Utils.toDecimals(params.amount);
        let receipt = await this._bridgeVaultTrollRegistry.stake(params);
        let event = this._bridgeVaultTrollRegistry.parseStakeEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount);
        event.shares = eth_wallet_1.Utils.fromDecimals(event.shares);
        event.backerBalance = eth_wallet_1.Utils.fromDecimals(event.backerBalance);
        event.trollBalance = eth_wallet_1.Utils.fromDecimals(event.trollBalance);
        let govToken = await this.govToken;
        let transferEvent = govToken.parseTransferEvent(receipt)[0];
        transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, await govToken.decimals);
        return { stakeEvent: event, transferEvent };
    }
    async stakedBy(params) {
        let backer = await this._bridgeVaultTrollRegistry.stakedBy({ param1: params.trollProfileIndex, param2: params.index });
        return backer;
    }
    async stakedByInv(params) {
        let stakedByIdx = await this._bridgeVaultTrollRegistry.stakedByInv({ param1: params.trollProfileIndex, param2: params.backer });
        return stakedByIdx.toNumber();
    }
    async stakedByLength(trollProfileIndex) {
        return (async () => { return (await this._bridgeVaultTrollRegistry.stakedByLength(trollProfileIndex)).toNumber(); })();
    }
    get transactionsCount() {
        return (async () => { return (await this._bridgeVaultTrollRegistry.transactionsCount()).toNumber(); })();
    }
    get trollRegistry() {
        return this._bridgeVaultTrollRegistry.trollRegistry();
    }
    async trollStakesBalances(trollProfileIndex) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVaultTrollRegistry.trollStakesBalances(trollProfileIndex));
    }
    async trollStakesTotalShares(trollProfileIndex) {
        return eth_wallet_1.Utils.fromDecimals(await this._bridgeVaultTrollRegistry.trollStakesTotalShares(trollProfileIndex));
    }
    async unstake(params) {
        params.shares = eth_wallet_1.Utils.toDecimals(params.shares);
        let receipt = await this._bridgeVaultTrollRegistry.unstake(params);
        let event = this._bridgeVaultTrollRegistry.parseUnstakeEvent(receipt)[0];
        event.amount = eth_wallet_1.Utils.fromDecimals(event.amount);
        event.shares = eth_wallet_1.Utils.fromDecimals(event.shares);
        event.trollBalance = eth_wallet_1.Utils.fromDecimals(event.trollBalance);
        let govToken = await this.govToken;
        let transferEvent = govToken.parseTransferEvent(receipt)[0];
        transferEvent.value = eth_wallet_1.Utils.fromDecimals(transferEvent.value, await govToken.decimals);
        return { unstakeEvent: event, transferEvent };
        ;
    }
    async unstakeApprove(params) {
        params.shares = eth_wallet_1.Utils.toDecimals(params.shares);
        let receipt = await this._bridgeVaultTrollRegistry.unstakeApprove(params);
        let event = this._bridgeVaultTrollRegistry.parseUnstakeApprovalEvent(receipt)[0];
        event.shares = eth_wallet_1.Utils.fromDecimals(event.shares);
        return event;
    }
    async unstakeRequest(shares) {
        shares = eth_wallet_1.Utils.toDecimals(shares);
        let receipt = await this._bridgeVaultTrollRegistry.unstakeRequest(shares);
        let event = this._bridgeVaultTrollRegistry.parseUnstakeRequestEvent(receipt)[0];
        event.shares = eth_wallet_1.Utils.fromDecimals(event.shares);
        event.backerBalance = eth_wallet_1.Utils.fromDecimals(event.backerBalance);
        return event;
    }
    async updateConfigStore() {
        let receipt = await this._bridgeVaultTrollRegistry.updateConfigStore();
        return this._bridgeVaultTrollRegistry.parseUpdateConfigStoreEvent(receipt)[0];
    }
    async updateTrollRegistry() {
        let receipt = await this._bridgeVaultTrollRegistry.updateTrollRegistry();
        return this._bridgeVaultTrollRegistry.parseUpdateTrollRegistryEvent(receipt)[0];
    }
    async usedNonce(nonce) {
        return this._bridgeVaultTrollRegistry.usedNonce(nonce);
    }
    async verifyStakedValue(params) {
        return this._bridgeVaultTrollRegistry.verifyStakedValue(params);
    }
}
exports.BridgeVaultTrollRegistry = BridgeVaultTrollRegistry;
