"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideChainVoting = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
class SideChainVoting {
    constructor(wallet, votingExecutor) {
        this.wallet = wallet;
        this.votingExecutor = votingExecutor;
    }
    setRouter(address) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfigAddress"),
            eth_wallet_1.Utils.stringToBytes32("router"),
            eth_wallet_1.Utils.addressToBytes32Right(address, true)
        ];
    }
    setRebalancer(address) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfigAddress"),
            eth_wallet_1.Utils.stringToBytes32("rebalancer"),
            eth_wallet_1.Utils.addressToBytes32Right(address, true)
        ];
    }
    setFeeTo(address) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfigAddress"),
            eth_wallet_1.Utils.stringToBytes32("feeTo"),
            eth_wallet_1.Utils.addressToBytes32Right(address, true)
        ];
    }
    setTransactionsGap(value) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig"),
            eth_wallet_1.Utils.stringToBytes32("transactionsGap"),
            eth_wallet_1.Utils.numberToBytes32(value, true)
        ];
    }
    setTransactionFee(value) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig"),
            eth_wallet_1.Utils.stringToBytes32("transactionFee"),
            eth_wallet_1.Utils.numberToBytes32(value, true)
        ];
    }
    setLpWithdrawlDelay(value) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig"),
            eth_wallet_1.Utils.stringToBytes32("lpWithdrawlDelay"),
            eth_wallet_1.Utils.numberToBytes32(value, true)
        ];
    }
    setGeneralTrollMinCount(count) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig"),
            eth_wallet_1.Utils.stringToBytes32("generalTrollMinCount"),
            eth_wallet_1.Utils.numberToBytes32(count, true)
        ];
    }
    setSuperTrollMinCount(count) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig"),
            eth_wallet_1.Utils.stringToBytes32("superTrollMinCount"),
            eth_wallet_1.Utils.numberToBytes32(count, true)
        ];
    }
    setOracle(params) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig2"),
            eth_wallet_1.Utils.stringToBytes32("oracle"),
            eth_wallet_1.Utils.addressToBytes32Right(params.asset, true),
            eth_wallet_1.Utils.addressToBytes32Right(params.oracle, true)
        ];
    }
    setConfigStore(address) {
        return [
            eth_wallet_1.Utils.stringToBytes32("upgradeConfigStore"),
            eth_wallet_1.Utils.addressToBytes32Right(address, true)
        ];
    }
    setIsApprovedProxy(wrapper, isApprovedProxy) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig2"),
            eth_wallet_1.Utils.stringToBytes32("isApprovedProxy"),
            eth_wallet_1.Utils.addressToBytes32Right(wrapper, true),
            eth_wallet_1.Utils.numberToBytes32(isApprovedProxy ? 1 : 0, true)
        ];
    }
    setBaseFee(asset, baseFee) {
        return [
            eth_wallet_1.Utils.stringToBytes32("setConfig2"),
            eth_wallet_1.Utils.stringToBytes32("baseFee"),
            eth_wallet_1.Utils.addressToBytes32Right(asset, true),
            eth_wallet_1.Utils.numberToBytes32(baseFee, true)
        ];
    }
    async getHash(params) {
        let hash = this.wallet.web3.utils.soliditySha3({ t: 'uint', v: await this.wallet.getChainId() }, { t: 'address', v: this.votingExecutor.address }, { t: 'bytes32[]', v: params.params }, { t: 'uint', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    static parseExecuteEventParams(params) {
        let nChain = new eth_wallet_1.BigNumber(params[2]).toNumber();
        let chains = [];
        for (let i = 0; i < nChain; i++) {
            chains.push(new eth_wallet_1.BigNumber(params[3 + i]).toNumber());
        }
        params = [params[1], ...params.slice(3 + nChain)];
        return { chains, params };
    }
    async execute(params) {
        return this.votingExecutor.execute(params);
    }
}
exports.SideChainVoting = SideChainVoting;
