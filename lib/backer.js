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
exports.Backer = void 0;
const Nft = __importStar(require("@openswap/troll-nft-sdk"));
class Backer {
    constructor(crosschain) {
        this.crosschain = crosschain;
    }
    async stakeTroll(params) {
        let chain = this.crosschain;
        if (!chain.mainChain) {
            throw new Error("not on main chain");
        }
        if (chain.chains.mainChain != this.crosschain.chainId) {
            throw new Error("Not on main chain");
        }
        let registry = chain.mainChain.trollRegistry;
        let receipt = await (params.isSuperTroll ? registry.stakeSuperTroll(params) : registry.stakeGeneralTroll(params));
        let stakeEvent = params.isSuperTroll ? registry.parseStakeSuperTollEvent(receipt)[0] : registry.parseStakeGeneralTollEvent(receipt)[0];
        let transferEvent = new Nft.Contracts.TrollNFT(this.crosschain.wallet, params.nft).parseTransferEvent(receipt)[0];
        return { stakeEvent, transferEvent };
    }
    async unstakeTroll(params) {
        let chain = this.crosschain;
        if (!chain.mainChain) {
            throw new Error("not on main chain");
        }
        if (chain.chains.mainChain != this.crosschain.chainId) {
            throw new Error("Not on main chain");
        }
        let registry = chain.mainChain.trollRegistry;
        let stakedByInv = await registry.stakedByInv({ param1: params.nft, param2: params.tokenId });
        if (stakedByInv.trollProfileIndex.eq(0)) {
            throw new Error("Not staked");
        }
        let type = (await registry.trollProfiles(stakedByInv.trollProfileIndex)).trollType.toNumber();
        let receipt = await ((type == 1 || type == 3) ? registry.unstakeSuperTroll(params) : registry.unstakeGeneralTroll(params));
        let unstakeEvent = type == 1 ? registry.parseUnstakeSuperTollEvent(receipt)[0] : registry.parseUnstakeGeneralTollEvent(receipt)[0];
        let transferEvent = new Nft.Contracts.TrollNFT(this.crosschain.wallet, params.nft).parseTransferEvent(receipt)[0];
        return { unstakeEvent, transferEvent };
    }
    async addStakes(params) {
        let chain = this.crosschain;
        if (!chain.mainChain) {
            throw new Error("not on main chain");
        }
        if (chain.chains.mainChain != this.crosschain.chainId) {
            throw new Error("Not on main chain");
        }
        let registry = chain.mainChain.trollRegistry;
        let stakedByInv = await registry.stakedByInv({ param1: params.nft, param2: params.tokenId });
        if (stakedByInv.trollProfileIndex.eq(0)) {
            throw new Error("Not staked");
        }
        let type = (await registry.trollProfiles(stakedByInv.trollProfileIndex)).trollType.toNumber();
        let receipt = await ((type == 1 || type == 3) ? registry.addStakesSuperTroll(params) : registry.addStakesGeneralTroll(params));
        let addStakesEvent = new Nft.Contracts.TrollNFTV2(this.crosschain.wallet, params.nft).parseAddStakesEvent(receipt)[0];
        let transferEvent = chain.oswap._oswap.parseTransferEvent(receipt)[0];
        return { addStakesEvent, transferEvent };
    }
    async getStakedBridgeVaultBond(token) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[token.address];
        if (!vault) {
            throw new Error("vault not found");
        }
        let staked = await vault.backerStakes(this.crosschain.wallet.defaultAccount);
        return staked;
    }
    async approveToStake(params) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[params.asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        let oswap = this.crosschain.oswap;
        return oswap.approve({ spender: vault.address, amount: params.oswapAmount });
    }
    async stakeBridgeVaultBond(params) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[params.asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        let backer = this.crosschain.wallet.defaultAccount;
        if ((await this.crosschain.oswap.balanceOf(backer)).lt(params.oswapAmount)) {
            throw new Error("Insufficient balance");
        }
        if ((await this.crosschain.oswap.allowance({ owner: backer, spender: vault.address })).lt(params.oswapAmount)) {
            throw new Error("Insufficient allowance");
        }
        let event = await vault.stake({ trollProfileIndex: params.trollProfileIndex, amount: params.oswapAmount });
        return event;
    }
    async stakes(asset) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        let backer = this.crosschain.wallet.defaultAccount;
        let stakes = await vault.backerStakes(backer);
        return stakes;
    }
    async unstakeRequest(params) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[params.asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        let backer = this.crosschain.wallet.defaultAccount;
        let stakes = await vault.backerStakes(backer);
        if (stakes.shares.lt(params.shares)) {
            throw new Error("Insufficient balance");
        }
        let event = await vault.unstakeRequest(params.shares);
        return event;
    }
    async unstake(params) {
        let vault = this.crosschain.crossChainContracts.vaultRegistry[params.asset.address];
        if (!vault) {
            throw new Error("Vault not found");
        }
        let backer = this.crosschain.wallet.defaultAccount;
        let stakes = await vault.backerStakes(backer);
        if (stakes.approvedWithdrawal.lt(params.shares)) {
            throw new Error("Insufficient withdraw approval");
        }
        let event = await vault.unstake({ backer: this.crosschain.wallet.defaultAccount, shares: params.shares });
        return event;
    }
}
exports.Backer = Backer;
