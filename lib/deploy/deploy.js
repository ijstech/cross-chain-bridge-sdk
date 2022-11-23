"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initChainRegistryByAddress = exports.initChainRegistry = exports.deploy = void 0;
const deployMainChain_1 = require("./deployMainChain");
const deploySideChain_1 = require("./deploySideChain");
const contracts_1 = require("../contracts");
;
async function deploy(wallets, deployOptions, openSwapContracts, result) {
    let contracts = result && result.mainChain;
    if (!contracts) {
        contracts = await deployMainChain_1.deploy(wallets[deployOptions.mainChain.chainId], Object.assign(deployMainChain_1.DefaultDeploymentOptions, {
            govToken: openSwapContracts.mainChain.openSwap.address,
            superTrollMinCount: deployOptions.mainChain.superTrollMinCount,
            superTrollNft: deployOptions.mainChain.superTrollNft,
            generalTrollNft: deployOptions.mainChain.generalTrollNft,
            minStakePeriod: deployOptions.mainChain.minStakePeriod,
            rebalancer: deployOptions.mainChain.rebalancer,
            lpWithdrawlDelay: deployOptions.lpWithdrawlDelay
        }));
    }
    let sideChain;
    sideChain = {};
    for (let i = 0; i < deployOptions.sideChain.length; i++) {
        let chainId = deployOptions.sideChain[i].chainId;
        let chainName = deployOptions.sideChain[i].chainName;
        let contracts2 = result && result.sideChain[chainName];
        if (!contracts2) {
            contracts2 = await deploySideChain_1.deploy(wallets[chainId], Object.assign(deploySideChain_1.DefaultDeploymentOptions, {
                govToken: openSwapContracts.sideChain[chainName].openSwap.address,
                router: openSwapContracts.sideChain[chainName].hybridRouter.address,
                superTrollMinCount: deployOptions.sideChain[i].superTrollMinCount,
                vaultTokens: deployOptions.sideChain[i].vaultTokens,
                bridgeVaults: deployOptions.sideChain[i].bridgeVaults,
                rebalancer: deployOptions.sideChain[i].rebalancer,
                lpWithdrawlDelay: deployOptions.lpWithdrawlDelay,
                baseFee: deployOptions.sideChain[i].baseFee
            }));
        }
        let registry = new contracts_1.OSWAP_SideChainTrollRegistry(wallets[chainId], contracts2.trollRegistry);
        if (!(await registry.isPermitted(wallets[chainId].defaultAccount)))
            await registry.permit(wallets[chainId].defaultAccount);
        sideChain[chainId] = contracts2;
    }
    return { mainChain: contracts, sideChain: sideChain };
}
exports.deploy = deploy;
async function initChainRegistry(crossChain, pairing) {
    let mainChain = crossChain.crossChainContracts.mainChain;
    let sideChain = crossChain.crossChainContracts.sideChain;
    let govTokens = [];
    let configStoreAddresses = [];
    let contractAddresses = [];
    for (let _chainId in sideChain) {
        let primaryConfigStore = new contracts_1.OSWAP_ConfigStore(crossChain.wallets[crossChain.chains.mainChain]);
        let chainId = parseInt(_chainId);
        let govToken = crossChain.oswap[chainId].address;
        let asset = await sideChain[chainId].trollRegistry.allVaultToken();
        let configStore = sideChain[chainId].configStore;
        await primaryConfigStore.deploy({
            govToken: govToken,
            swapPolicy: await configStore.swapPolicy(),
            lpWithdrawlDelay: await configStore.lpWithdrawlDelay(),
            transactionsGap: await configStore.transactionsGap(),
            superTrollMinCount: await configStore.superTrollMinCount(),
            generalTrollMinCount: await configStore.generalTrollMinCount(),
            transactionFee: await configStore.transactionsGap(),
            router: await configStore.router(),
            rebalancer: await configStore.rebalancer(),
            feeTo: await configStore.feeTo(),
            wrapper: sideChain[chainId].wrapper.address,
            asset: asset,
            baseFee: await Promise.all(asset.map(e => configStore.baseFee(e)))
        });
        govTokens.push(govToken);
        configStoreAddresses.push(primaryConfigStore.address);
        contractAddresses.push([
            sideChain[chainId].trollRegistry.address,
            sideChain[chainId].wrapper.address,
        ]);
        await primaryConfigStore.initAddress(mainChain.votingManager.address);
    }
    let mainChainContractNames = ["TrollRegistry"];
    let mainChainContractAddress = [mainChain.trollRegistry.address];
    let contractNames = ["TrollRegistry", "RouterWrapper"];
    let tokenNames = ['USDT', 'OSWAP'];
    let vaults = [];
    for (let i = 0; i < pairing.length; i++) {
        let vaults2 = [];
        for (let chainId in sideChain) {
            let asset = pairing[i][chainId];
            let vault = {
                token: asset,
                vaultRegistry: sideChain[chainId].vaultRegistry[asset].address,
                bridgeVault: sideChain[chainId].bridgeVault[asset].address
            };
            vaults2.push(vault);
        }
        vaults.push(vaults2);
    }
    await mainChain.chainRegistry.init({
        chainId: Object.keys(sideChain).map(e => parseInt(e)),
        status: [1, 1],
        govToken: govTokens,
        configStore: configStoreAddresses,
        mainChainContractNames: mainChainContractNames,
        mainChainContractAddress: mainChainContractAddress,
        contractNames: contractNames,
        address: contractAddresses,
        tokenNames: tokenNames,
        vault: vaults
    });
}
exports.initChainRegistry = initChainRegistry;
async function initChainRegistryByAddress(deploymentResult, wallets, networks, pairing) {
    let mainChain = deploymentResult[networks[0].chainName].crossChainBridgeMainChain;
    let govTokens = [];
    let configStoreAddresses = [];
    let contractAddresses = [];
    for (let i = 0; i < networks.length; i++) {
        let sideChain = deploymentResult[networks[i].chainName].crossChainBridgeSideChain;
        let primaryConfigStore = new contracts_1.OSWAP_ConfigStore(wallets[networks[0].chainId]);
        let chainId = networks[i].chainId;
        let govToken = deploymentResult[networks[i].chainName].openswap.oswap;
        let asset = Object.keys(sideChain.vaultRegistry);
        let configStore = new contracts_1.OSWAP_ConfigStore(wallets[networks[i].chainId], sideChain.configStore);
        await primaryConfigStore.deploy({
            govToken: govToken,
            swapPolicy: await configStore.swapPolicy(),
            lpWithdrawlDelay: await configStore.lpWithdrawlDelay(),
            transactionsGap: await configStore.transactionsGap(),
            superTrollMinCount: await configStore.superTrollMinCount(),
            generalTrollMinCount: await configStore.generalTrollMinCount(),
            transactionFee: await configStore.transactionsGap(),
            router: await configStore.router(),
            rebalancer: await configStore.rebalancer(),
            feeTo: await configStore.feeTo(),
            wrapper: sideChain.wrapper,
            asset: asset,
            baseFee: await Promise.all(asset.map(e => configStore.baseFee(e)))
        });
        govTokens.push(govToken);
        configStoreAddresses.push(primaryConfigStore.address);
        contractAddresses.push([
            sideChain.trollRegistry,
            sideChain.wrapper,
        ]);
        await primaryConfigStore.initAddress(mainChain.votingManager);
    }
    let mainChainContractNames = ["TrollRegistry"];
    let mainChainContractAddress = [mainChain.trollRegistry];
    let contractNames = ["TrollRegistry", "RouterWrapper"];
    let tokenNames = ['USDT', 'OSWAP'];
    let vaults = [];
    if (pairing) {
        for (let i = 0; i < pairing.length; i++) {
            let vaults2 = [];
            for (let j = 0; j < networks.length; j++) {
                let sideChain = deploymentResult[networks[j].chainName].crossChainBridgeSideChain;
                let chainId = networks[j].chainId;
                let asset = pairing[i][chainId];
                let vault = {
                    token: asset,
                    vaultRegistry: sideChain.vaultRegistry[asset],
                    bridgeVault: sideChain.bridgeVault[asset]
                };
                vaults2.push(vault);
            }
            vaults.push(vaults2);
        }
    }
    else {
        for (let j = 0; j < networks.length; j++) {
            let chainName = networks[j].chainName;
            let sideChain = deploymentResult[chainName].crossChainBridgeSideChain;
            let tokens = Object.keys(sideChain.bridgeVault);
            for (let i = 0; i < tokens.length; i++) {
                if (!vaults[i])
                    vaults[i] = [];
                let asset = tokens[i];
                let vault = {
                    token: asset,
                    vaultRegistry: sideChain.vaultRegistry[asset],
                    bridgeVault: sideChain.bridgeVault[asset]
                };
                vaults[i][j] = vault;
            }
        }
    }
    await new contracts_1.OSWAP_ChainRegistry(wallets[networks[0].chainId], mainChain.chainRegistry).init({
        chainId: networks.map(e => e.chainId),
        status: networks.map(e => 1),
        govToken: govTokens,
        configStore: configStoreAddresses,
        mainChainContractNames: mainChainContractNames,
        mainChainContractAddress: mainChainContractAddress,
        contractNames: contractNames,
        address: contractAddresses,
        tokenNames: tokenNames,
        vault: vaults
    });
}
exports.initChainRegistryByAddress = initChainRegistryByAddress;
