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
exports.getCrossChain = exports.buildTokenPairByAddress = exports.buildTokenPairBySymbol = exports.CrossChainMulti = exports.CrossChainSingle = exports.SideChain = exports.MainChain = void 0;
const sdk_1 = require("@openswap/sdk");
const Contracts = __importStar(require("./contracts"));
const bridgeVault_1 = require("./wrappers/bridgeVault");
const bridgeVaultTrollRegistry_1 = require("./wrappers/bridgeVaultTrollRegistry");
const mainChainVoting_1 = require("./mainChainVoting");
const sideChainVoting_1 = require("./sideChainVoting");
;
;
function MainChain(wallet, result, tokenList) {
    let votingManager = new Contracts.OSWAP_VotingManager(wallet, result.votingManager);
    let votingRegistry = new Contracts.OSWAP_VotingRegistry(wallet, result.votingRegistry);
    let votingExecutor = new Contracts.OSWAP_MainChainVotingExecutor(wallet, result.votingExecutor);
    return {
        votingManager,
        trollRegistry: new Contracts.OSWAP_MainChainTrollRegistry(wallet, result.trollRegistry),
        votingRegistry,
        votingExecutor,
        voting: new mainChainVoting_1.MainChainVoting(wallet, votingManager, votingRegistry, votingExecutor),
        chainRegistry: new Contracts.OSWAP_ChainRegistry(wallet, result.chainRegistry)
    };
}
exports.MainChain = MainChain;
function SideChain(wallet, result, tokenList) {
    let _vaultRegistry = {};
    let _bridgeVault = {};
    for (let v in result.bridgeVault) {
        _vaultRegistry[v] = _vaultRegistry[result.vaultRegistry[v]] = _vaultRegistry[result.bridgeVault[v]] = new bridgeVaultTrollRegistry_1.BridgeVaultTrollRegistry(wallet, result.vaultRegistry[v]);
        _bridgeVault[v] = _bridgeVault[result.bridgeVault[v]] = _bridgeVault[result.vaultRegistry[v]] = new bridgeVault_1.BridgeVault(wallet, result.bridgeVault[v], tokenList);
    }
    let votingExecutor = new Contracts.OSWAP_SideChainVotingExecutor(wallet, result.votingExecutor);
    let wrapper = new Contracts.OSWAP_RouterVaultWrapper(wallet, result.wrapper);
    return {
        configStore: new Contracts.OSWAP_ConfigStore(wallet, result.configStore),
        trollRegistry: new Contracts.OSWAP_SideChainTrollRegistry(wallet, result.trollRegistry),
        votingExecutor,
        vaultRegistry: _vaultRegistry,
        bridgeVault: _bridgeVault,
        voting: new sideChainVoting_1.SideChainVoting(wallet, votingExecutor),
        wrapper: wrapper
    };
}
exports.SideChain = SideChain;
;
class CrossChainSingle {
    constructor(_oswap, contractsAddresses, chains, tokenList) {
        this._oswap = {};
        for (let chainId in _oswap) {
            this._oswap[chainId] = _oswap[chainId];
        }
        this.contractsAddresses = contractsAddresses;
        this.chains = chains;
        this.tokenList = tokenList;
    }
    onChainChange(wallet, chainId) {
        this.wallet = wallet;
        this.chainId = chainId;
        if (!this._oswap[chainId]) {
            throw new Error("Invalid chainId");
        }
        this.oswap = new sdk_1.OpenSwap(wallet, this._oswap[chainId]);
        this.mainChain = chainId == this.chains.mainChain ? MainChain(wallet, this.contractsAddresses.mainChain, this.tokenList) : null;
        let contracts = this.contractsAddresses.sideChain[chainId];
        this.crossChainContracts = contracts ? SideChain(wallet, contracts, this.tokenList) : null;
    }
}
exports.CrossChainSingle = CrossChainSingle;
class CrossChainMulti {
    constructor(wallets, oswap, contractsAddresses, chains, tokenList, wrappedTokens, tokenPair) {
        this.wallets = wallets;
        this.oswap = {};
        for (let chainId in oswap) {
            this.oswap[chainId] = new sdk_1.OpenSwap(wallets[chainId], oswap[chainId]);
        }
        this.contractsAddresses = contractsAddresses;
        this.chains = chains;
        this.crossChainContracts = {};
        if (contractsAddresses.mainChain)
            this.crossChainContracts.mainChain = MainChain(wallets[chains.mainChain], contractsAddresses.mainChain, tokenList);
        this.crossChainContracts.sideChain = {};
        for (let i = 0; i < chains.sideChain.length; i++) {
            let chainId = chains.sideChain[i];
            if (!wallets[chainId]) {
                throw new Error("Invalid chain id");
            }
            this.crossChainContracts.sideChain[chainId] = SideChain(wallets[chainId], contractsAddresses.sideChain[chainId], tokenList);
        }
        this.tokenList = tokenList;
        this.wrappedTokens = wrappedTokens;
        this.tokenPair = tokenPair;
    }
}
exports.CrossChainMulti = CrossChainMulti;
function buildTokenPairBySymbol(tokenList, pairing) {
    let tokenPair = {};
    pairing.forEach(pair => {
        for (let srcChain in pair) {
            if (!tokenPair[srcChain])
                tokenPair[srcChain] = {};
            let address = tokenList[srcChain].find(e => e.symbol == pair[srcChain]).address;
            tokenPair[srcChain][address] = {};
            for (let dstChain in pair) {
                if (srcChain != dstChain) {
                    tokenPair[srcChain][address][dstChain] = tokenList[dstChain].find(e => e.symbol == pair[dstChain]).address;
                }
            }
        }
    });
    return tokenPair;
}
exports.buildTokenPairBySymbol = buildTokenPairBySymbol;
function buildTokenPairByAddress(pairing) {
    let tokenPair = {};
    pairing.forEach(pair => {
        for (let srcChain in pair) {
            if (!tokenPair[srcChain])
                tokenPair[srcChain] = {};
            let address = pair[srcChain];
            tokenPair[srcChain][address] = {};
            for (let dstChain in pair) {
                if (srcChain != dstChain) {
                    tokenPair[srcChain][address][dstChain] = pair[dstChain];
                }
            }
        }
    });
    return tokenPair;
}
exports.buildTokenPairByAddress = buildTokenPairByAddress;
async function getCrossChain(wallets, chains, tokenList, wrappedTokens, chainRegistryAddress) {
    let oswap = {};
    let sideChain = {};
    let chainRegistry = new Contracts.OSWAP_ChainRegistry(wallets[chains.mainChain], chainRegistryAddress);
    let allChainIds = (await chainRegistry.allChains()).map(e => e.toNumber());
    let vaultsLength = (await chainRegistry.vaultsLength()).toNumber();
    let mainChain;
    {
        let _trollRegistry = await chainRegistry.mainChainContractAddress("TrollRegistry");
        let trollRegistry = new Contracts.OSWAP_MainChainTrollRegistry(wallets[chains.mainChain], _trollRegistry);
        let _votingManager = await trollRegistry.votingManager();
        let votingManager = new Contracts.OSWAP_VotingManager(wallets[chains.mainChain], _votingManager);
        let _votingExecutor = await votingManager.votingExecutor(0);
        let _votingRegistry = await votingManager.votingRegister();
        mainChain = {
            trollRegistry: _trollRegistry,
            votingExecutor: _votingExecutor,
            votingManager: _votingManager,
            votingRegistry: _votingRegistry,
            chainRegistry: chainRegistry.address
        };
    }
    let pairing = [];
    for (let chainId of allChainIds) {
        let status = (await chainRegistry.status(chainId)).toNumber();
        if (status == 1) {
            oswap[chainId] = await chainRegistry.govToken(chainId);
            let _trollRegistry = await chainRegistry.sideChainContractAddress({ param1: chainId, param2: "TrollRegistry" });
            let trollRegistry = new Contracts.OSWAP_SideChainTrollRegistry(wallets[chainId], _trollRegistry);
            let _configStore = await trollRegistry.configStore();
            let configStore = new Contracts.OSWAP_ConfigStore(wallets[chainId], _configStore);
            let _router = await configStore.router();
            let _wrapper = await chainRegistry.sideChainContractAddress({ param1: chainId, param2: "RouterWrapper" });
            let votingExecutor = (await trollRegistry.votingExecutor(0));
            let vaultRegistry = {}, bridgeVault = {};
            for (let i = 0; i < vaultsLength; i++) {
                let vault = await chainRegistry.vaults({ param1: i, param2: chainId });
                vaultRegistry[vault.token] = vault.vaultRegistry;
                bridgeVault[vault.token] = vault.bridgeVault;
                if (!pairing[i])
                    pairing.push({});
                pairing[i][chainId] = vault.token;
            }
            sideChain[chainId] = {
                configStore: _configStore,
                trollRegistry: _trollRegistry,
                votingExecutor: votingExecutor,
                wrapper: _wrapper,
                vaultRegistry: vaultRegistry,
                bridgeVault: bridgeVault
            };
        }
    }
    let tokenPair = buildTokenPairByAddress(pairing);
    for (let srcChain in tokenPair)
        for (let srcToken in tokenPair[srcChain])
            for (let dstChain in tokenPair[srcChain][srcToken]) {
                let dstToken = tokenPair[srcChain][srcToken][dstChain];
                let dstVault = sideChain[dstChain].bridgeVault[dstToken];
                let srcVault = sideChain[srcChain].bridgeVault[srcToken];
                if (!tokenPair[parseInt(srcChain)][srcVault])
                    tokenPair[parseInt(srcChain)][srcVault] = {};
                tokenPair[parseInt(srcChain)][srcVault][parseInt(dstChain)] = dstVault;
            }
    let crossChain = new CrossChainMulti(wallets, oswap, { mainChain, sideChain }, chains, tokenList, wrappedTokens, tokenPair);
    return crossChain;
}
exports.getCrossChain = getCrossChain;
