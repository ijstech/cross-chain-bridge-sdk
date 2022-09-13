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
exports.deploy = exports.DefaultDeploymentOptions = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Contracts = __importStar(require("../contracts"));
;
;
exports.DefaultDeploymentOptions = {
    govToken: '',
    votingManager: '',
    superTrollNft: [],
    generalTrollNft: [],
    votingProfiles: {
        name: ['vote'],
        minExeDelay: [1],
        minVoteDuration: [0],
        maxVoteDuration: [1209600],
        minGovTokenToCreateVote: [eth_wallet_1.Utils.toDecimals(100000)],
        minQuorum: [eth_wallet_1.Utils.toDecimals(200000)]
    },
    vetoAdmin: eth_wallet_1.Utils.nullAddress
};
async function deploy(wallet, options) {
    let result = {};
    options = options || exports.DefaultDeploymentOptions;
    let trollRegistry = new Contracts.OSWAP_MainChainTrollRegistry(wallet);
    await trollRegistry.deploy({
        govToken: options.govToken,
        superTrollNft: options.superTrollNft,
        generalTrollNft: options.generalTrollNft
    });
    result.trollRegistry = trollRegistry.address;
    let votingManager;
    if (options.votingManager) {
        votingManager = new Contracts.OSWAP_VotingManager(wallet, options.votingManager);
    }
    else {
        votingManager = new Contracts.OSWAP_VotingManager(wallet);
        result.votingManager = await votingManager.deploy({
            trollRegistry: trollRegistry.address,
            names: options.votingProfiles.name,
            minExeDelay: options.votingProfiles.minExeDelay,
            minVoteDuration: options.votingProfiles.minVoteDuration,
            maxVoteDuration: options.votingProfiles.maxVoteDuration,
            minGovTokenToCreateVote: options.votingProfiles.minGovTokenToCreateVote,
            minQuorum: options.votingProfiles.minQuorum
        });
        await votingManager.initAdmin(options.vetoAdmin);
    }
    await trollRegistry.initAddress(votingManager.address);
    let votingRegistry = new Contracts.OSWAP_VotingRegistry(wallet);
    result.votingRegistry = await votingRegistry.deploy(votingManager.address);
    await votingManager.setVotingRegister(votingRegistry.address);
    let votingExecutor = new Contracts.OSWAP_MainChainVotingExecutor(wallet);
    result.votingExecutor = await votingExecutor.deploy(votingManager.address);
    let chainRegistry = new Contracts.OSWAP_ChainRegistry(wallet);
    result.chainRegistry = await chainRegistry.deploy(votingManager.address);
    await votingExecutor.initAddress(chainRegistry.address);
    let chainRegistryExecutor = new Contracts.OSWAP_ChainRegistryExecutor(wallet);
    result.chainRegistryExecutor = await chainRegistryExecutor.deploy({ chainRegistry: chainRegistry.address, votingManager: votingManager.address });
    await votingManager.initVotingExecutor([votingExecutor.address, chainRegistryExecutor.address]);
    console.log(result);
    return result;
}
exports.deploy = deploy;
