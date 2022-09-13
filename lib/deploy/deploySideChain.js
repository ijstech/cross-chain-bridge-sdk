"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployStakingOnly = exports.deploy = exports.DefaultDeploymentOptions = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Contracts = __importStar(require("../contracts"));
;
exports.DefaultDeploymentOptions = {
    govToken: eth_wallet_1.Utils.nullAddress,
    swapPolicy: eth_wallet_1.Utils.nullAddress,
    router: eth_wallet_1.Utils.nullAddress,
    superTrollMinCount: 2,
    generalTrollMinCount: 1,
    transactionsGap: 0,
    configStore: eth_wallet_1.Utils.nullAddress,
    vaultTokens: [],
    bridgeVaults: {},
    baseFee: {},
    transactionFee: eth_wallet_1.Utils.toDecimals(0.001),
    lpWithdrawlDelay: 24 * 60 * 60,
    rebalancer: eth_wallet_1.Utils.nullAddress,
    feeTo: eth_wallet_1.Utils.nullAddress
};
async function deploy(wallet, options) {
    let result = { vaultRegistry: {}, bridgeVault: {} };
    options = options || exports.DefaultDeploymentOptions;
    let wrapper = new Contracts.OSWAP_RouterVaultWrapper(wallet);
    result.wrapper = await wrapper.deploy();
    let configStore = new Contracts.OSWAP_ConfigStore(wallet);
    await configStore.deploy({
        govToken: options.govToken,
        swapPolicy: options.swapPolicy,
        lpWithdrawlDelay: options.lpWithdrawlDelay,
        transactionsGap: options.transactionsGap,
        superTrollMinCount: options.superTrollMinCount,
        generalTrollMinCount: options.generalTrollMinCount,
        transactionFee: options.transactionFee,
        router: options.router,
        rebalancer: options.rebalancer,
        feeTo: options.feeTo,
        wrapper: result.wrapper,
        asset: Object.keys(options.baseFee),
        baseFee: Object.values(options.baseFee)
    });
    result.configStore = configStore.address;
    await wrapper.initAddress(configStore.address);
    let trollRegistry = new Contracts.OSWAP_SideChainTrollRegistry(wallet);
    await trollRegistry.deploy(configStore.address);
    result.trollRegistry = trollRegistry.address;
    if (await configStore.votingExecutorManager() == eth_wallet_1.Utils.nullAddress)
        await configStore.initAddress(result.trollRegistry);
    let votingExecutor = new Contracts.OSWAP_SideChainVotingExecutor(wallet);
    await votingExecutor.deploy(trollRegistry.address);
    result.votingExecutor = votingExecutor.address;
    for (let i = 0; i < options.vaultTokens.length; i++) {
        let vaultToken = options.vaultTokens[i];
        let vaultRegistry = new Contracts.OSWAP_BridgeVaultTrollRegistry(wallet);
        result.vaultRegistry[vaultToken] = await vaultRegistry.deploy(trollRegistry.address);
        let bridgeVaultAddress;
        let bridgeVault;
        if (options.bridgeVaults && options.bridgeVaults[vaultToken]) {
            bridgeVaultAddress = options.bridgeVaults[vaultToken];
            bridgeVault = new Contracts.OSWAP_BridgeVault(wallet, bridgeVaultAddress);
        }
        else {
            bridgeVault = new Contracts.OSWAP_BridgeVault(wallet);
            await bridgeVault.deploy({
                vaultRegistry: vaultRegistry.address,
                configStore: configStore.address,
                asset: vaultToken
            });
            bridgeVaultAddress = bridgeVault.address;
        }
        await vaultRegistry.initAddress(bridgeVault.address);
        result.bridgeVault[vaultToken] = bridgeVaultAddress;
    }
    await trollRegistry.initAddress({
        votingExecutor: votingExecutor.address,
        tokens: Object.keys(result.bridgeVault),
        vaults: Object.values(result.bridgeVault)
    });
    console.log(result);
    return result;
}
exports.deploy = deploy;
async function deployStakingOnly(wallet, options) {
    let result = { vaultRegistry: {}, bridgeVault: {} };
    options = options || exports.DefaultDeploymentOptions;
    let configStore = new Contracts.OSWAP_ConfigStore(wallet);
    if (options.configStore && options.configStore != eth_wallet_1.Utils.nullAddress) {
        configStore.at(options.configStore);
    }
    else {
        await configStore.deploy({
            govToken: options.govToken,
            swapPolicy: options.swapPolicy,
            lpWithdrawlDelay: options.lpWithdrawlDelay,
            transactionsGap: options.transactionsGap,
            superTrollMinCount: options.superTrollMinCount,
            generalTrollMinCount: options.generalTrollMinCount,
            transactionFee: options.transactionFee,
            router: options.router,
            rebalancer: options.rebalancer,
            feeTo: options.feeTo,
            wrapper: eth_wallet_1.Utils.nullAddress,
            asset: Object.keys(options.baseFee),
            baseFee: Object.values(options.baseFee)
        });
    }
    result.configStore = configStore.address;
    for (let i = 0; i < options.vaultTokens.length; i++) {
        let vaultToken = options.vaultTokens[i];
        let bridgeVault = new Contracts.OSWAP_BridgeVault(wallet);
        if (options.bridgeVaults && options.bridgeVaults[vaultToken] && options.bridgeVaults[vaultToken] != eth_wallet_1.Utils.nullAddress) {
            bridgeVault.at(options.bridgeVaults[vaultToken]);
        }
        else {
            await bridgeVault.deploy({
                vaultRegistry: eth_wallet_1.Utils.nullAddress,
                configStore: configStore.address,
                asset: vaultToken
            });
        }
        result.bridgeVault[vaultToken] = bridgeVault.address;
    }
    console.log(result);
    return result;
}
exports.deployStakingOnly = deployStakingOnly;
