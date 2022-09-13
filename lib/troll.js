"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Troll = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const generalTroll_1 = require("./generalTroll");
class Troll extends generalTroll_1.GeneralTroll {
    async _isSuperTroll(params) {
        let chain = this.getChain(params.chainId);
        return await chain.trollRegistry.isSuperTroll({ troll: this.address, returnFalseIfBlocked: params.returnFalseIfBlocked });
    }
    async canCreateTransactionSideChainRegistry(chainId) {
        if (!await this._isSuperTroll({ chainId: chainId, returnFalseIfBlocked: false }))
            return false;
        let chain = this.getChain(chainId);
        let gap = (await chain.configStore.transactionsGap()).toNumber();
        let registry = this.crosschain.crossChainContracts.sideChain[chainId].trollRegistry;
        let last = (await registry.lastTrollTxCount(this.address)).toNumber();
        let count = (await registry.transactionsCount()).toNumber();
        return (last + gap <= count) || (count < gap);
    }
    async canTrollCreateTransactionSideChainRegistry(params) {
        let chain = this.getChain(params.chainId);
        if (!await chain.trollRegistry.isSuperTroll({ troll: params.troll, returnFalseIfBlocked: false }))
            return false;
        let gap = (await chain.configStore.transactionsGap()).toNumber();
        let registry = chain.trollRegistry;
        let last = (await registry.lastTrollTxCount(params.troll)).toNumber();
        let count = (await registry.transactionsCount()).toNumber();
        return (last + gap <= count) || (count < gap);
    }
    async canCreateTransaction(params) {
        let chain = this.getChain(params.chainId);
        let vaultRegistry = chain.vaultRegistry[params.asset];
        let gap = (await chain.configStore.transactionsGap()).toNumber();
        let last = await vaultRegistry.lastTrollTxCount(this.address);
        let count = await vaultRegistry.transactionsCount;
        return (last + gap <= count) || (count < gap);
    }
    async canTrollCreateTransaction(params) {
        let chain = this.getChain(params.chainId);
        if (!await chain.trollRegistry.isSuperTroll({ troll: params.troll, returnFalseIfBlocked: false }))
            return false;
        let vaultRegistry = chain.vaultRegistry[params.asset];
        let gap = (await chain.configStore.transactionsGap()).toNumber();
        let last = await vaultRegistry.lastTrollTxCount(params.troll);
        let count = await vaultRegistry.transactionsCount;
        return (last + gap <= count) || (count < gap);
    }
    async hashAddTrollForSigning(params) {
        let chain = this.crosschain.crossChainContracts.sideChain[params.chainId];
        let wallet = this.crosschain.wallets[params.chainId];
        if (!wallet) {
            throw new Error("invalid chain id");
        }
        let troll = await this.crosschain.crossChainContracts.mainChain.trollRegistry.trollProfiles(params.addTrollEvent.trollProfileIndex);
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint', v: await wallet.getChainId() }, { t: 'address', v: chain.trollRegistry.address }, { t: 'uint', v: params.addTrollEvent.trollProfileIndex.toString() }, { t: 'address', v: troll.troll }, { t: 'uint8', v: troll.trollType.toNumber() == 1 ? 1 : 0 }, { t: 'uint', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    async addTrollSideChain(params) {
        let chain = this.crosschain.crossChainContracts.sideChain[params.chainId];
        if (!chain) {
            throw new Error("Invalid chainId");
        }
        let wallet = this.crosschain.wallets[params.chainId];
        let registry = chain.trollRegistry;
        let troll = await this.crosschain.crossChainContracts.mainChain.trollRegistry.trollProfiles(params.event.trollProfileIndex);
        let receipt = await registry.addTroll({ signatures: params.signatures, trollProfileIndex: params.event.trollProfileIndex, troll: troll.troll, isSuperTroll: troll.trollType.toNumber() == 1, nonce: params.nonce });
        let event = registry.parseAddTrollEvent(receipt)[0];
        return event;
    }
    async _prepareNewOrder(sourceChain, vaultAddress, order, owner, orderId, raw) {
        let srcVault = this.vaults[sourceChain][vaultAddress];
        let srcToken = await srcVault.asset;
        let targetChain = parseInt(order.peerChain.toString());
        let inTokenAddress = this.crosschain.tokenPair[sourceChain][srcToken.address][targetChain];
        let inToken = new eth_wallet_1.Erc20(this.crosschain.wallets[targetChain], inTokenAddress);
        let inAmount = new eth_wallet_1.BigNumber(order.inAmount);
        if (raw)
            inAmount = eth_wallet_1.Utils.fromDecimals(inAmount, await srcToken.decimals);
        inAmount = inAmount.dp(await inToken.decimals, eth_wallet_1.BigNumber.ROUND_DOWN);
        let outToken;
        if (order.outToken == eth_wallet_1.Utils.nullAddress) {
            outToken = this.crosschain.wrappedTokens[targetChain];
        }
        else {
            outToken = this.crosschain.tokenList[targetChain].find(e => e.address.toLowerCase() == order.outToken.toLowerCase());
        }
        if (!outToken) {
            throw new Error("unknown token");
        }
        let outTokenDecimals = outToken ? outToken.decimals : 18;
        let minOutAmount = new eth_wallet_1.BigNumber(order.minOutAmount);
        if (raw)
            minOutAmount = eth_wallet_1.Utils.fromDecimals(minOutAmount, outTokenDecimals);
        let protocolFee = inAmount.times(this.config.protocolFeeRate).dp(await inToken.decimals, eth_wallet_1.BigNumber.ROUND_DOWN);
        let imbalance = await this.crosschain.crossChainContracts.sideChain[targetChain].bridgeVault[inToken.address]._bridgeVault.imbalance();
        imbalance = imbalance.minus(order.inAmount);
        let imbalanceFee = imbalance.lt(0) ? imbalance.times(this.config.imbalanceFeeRate).dp(await inToken.decimals, eth_wallet_1.BigNumber.ROUND_DOWN) : new eth_wallet_1.BigNumber(0);
        if (imbalanceFee.eq(0))
            imbalanceFee = new eth_wallet_1.BigNumber(0);
        let _order = {
            owner: owner,
            orderId: parseInt(orderId.toString()),
            amendment: 0,
            sourceChain: sourceChain,
            targetChain: targetChain,
            srcToken: srcToken.address,
            inToken: inTokenAddress,
            inAmount: inAmount,
            outToken: order.outToken,
            minOutAmount: minOutAmount,
            protocolFee: protocolFee,
            imbalanceFee: imbalanceFee,
            to: order.to,
            expire: parseInt(order.expire.toString())
        };
        return _order;
    }
    async prepareNewOrder(params) {
        let _order = await this._prepareNewOrder(params.sourceChain, params.orderEvent._event.address, {
            peerChain: params.orderEvent.order.peerChain,
            inAmount: params.orderEvent.order.inAmount,
            outToken: params.orderEvent.order.outToken,
            minOutAmount: params.orderEvent.order.minOutAmount,
            to: params.orderEvent.order.to,
            expire: params.orderEvent.order.expire
        }, params.orderEvent.owner, params.orderEvent.orderId, params.raw);
        return _order;
    }
    async prepareAmendOrder(params) {
        let srcVault = this.vaults[params.sourceChain][params.amendOrderRequestEvent._event.address];
        let owner = await srcVault.orderOwner(params.amendOrderRequestEvent.orderId);
        let _order = await this._prepareNewOrder(params.sourceChain, params.amendOrderRequestEvent._event.address, {
            peerChain: params.amendOrderRequestEvent.order.peerChain,
            inAmount: params.amendOrderRequestEvent.order.inAmount,
            outToken: params.amendOrderRequestEvent.order.outToken,
            minOutAmount: params.amendOrderRequestEvent.order.minOutAmount,
            to: params.amendOrderRequestEvent.order.to,
            expire: params.amendOrderRequestEvent.order.expire
        }, owner, params.amendOrderRequestEvent.orderId, params.raw);
        _order.amendment = params.amendOrderRequestEvent.amendment.toNumber();
        return _order;
    }
    async prepareCancelOrder(params) {
        let targetChain = this.getChain(params.targetChainId);
        let inToken = await targetChain.bridgeVault[params.event._event.address].asset;
        let srcChainId = params.event.sourceChainId.toNumber();
        let srcToken = this.crosschain.tokenPair[params.targetChainId][inToken._address][srcChainId];
        let srcChain = this.getChain(srcChainId);
        let srcVault = srcChain.bridgeVault[srcToken];
        let order = await srcChain.bridgeVault[srcVault.address].orders(params.event.orderId);
        let protocolFee = order.inAmount.times(this.config.protocolFeeRate).dp(await (await srcVault.asset).decimals, eth_wallet_1.BigNumber.ROUND_DOWN);
        return { sourceChainId: parseInt(params.event.sourceChainId.toString()), srcToken: srcToken, orderId: params.event.orderId, owner: params.event.owner, canceledByOrderOwner: true, protocolFee: protocolFee };
    }
    async prepareCancelOrderFromUnexecuteOrder(params) {
        let srcChain = this.getChain(params.srcChainId);
        let srcVault = srcChain.bridgeVault[params.srcToken].address;
        let owner = await srcChain.bridgeVault[srcVault].orderOwner(params.orderId);
        let protocolFee = new eth_wallet_1.BigNumber(0);
        return { sourceChainId: params.srcChainId, srcToken: params.srcToken, srcVault: srcVault, orderId: params.orderId, owner: owner, canceledByOrderOwner: false, protocolFee: protocolFee };
    }
    async swap(params) {
        let wallet = this.crosschain.wallets[params.order.targetChain];
        let chainId = params.order.targetChain;
        let chain = this.getChain(chainId);
        let vault = chain.bridgeVault[params.order.inToken];
        let _params = {
            signatures: params.signatures,
            owner: params.order.owner,
            orderId: params.order.orderId,
            amendment: params.order.amendment,
            protocolFee: params.order.protocolFee,
            pair: params.pair,
            order: {
                peerChain: params.order.sourceChain,
                inAmount: params.order.inAmount,
                outToken: params.order.outToken,
                minOutAmount: params.order.minOutAmount,
                to: params.order.to,
                expire: params.order.expire
            }
        };
        let event = await vault.swap(_params);
        return event;
    }
    async cancelOrder(params) {
        let chain = this.getChain(params.cancelOrder.sourceChainId);
        let srcVault = chain.bridgeVault[params.cancelOrder.srcToken];
        let event = await srcVault.cancelOrder({ signatures: params.signatures, orderId: params.cancelOrder.orderId, canceledByOrderOwner: params.cancelOrder.canceledByOrderOwner, protocolFee: params.cancelOrder.protocolFee });
        return event;
    }
    async unstakeApprove(params) {
        let chainId = params.chainId;
        let chain = this.getChain(chainId);
        let vaultRegistry = chain.vaultRegistry[params.event._event.address];
        if (!vaultRegistry) {
            throw new Error("vault registry not found");
        }
        let receipt = await vaultRegistry.unstakeApprove({ signatures: params.signatures, backer: params.event.backer, trollProfileIndex: params.event.trollProfileIndex, shares: params.event.shares, nonce: params.nonce });
        return receipt;
    }
    async hashUpdateTrollForSigning(params) {
        let wallet = this.crosschain.wallets[params.chainId];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: this.crosschain.crossChainContracts.sideChain[params.chainId].trollRegistry.address }, { t: 'uint256', v: params.event.trollProfileIndex.toString() }, { t: 'address', v: params.event.newTroll }, { t: 'uint256', v: params.event._event.transactionHash });
        return hash;
    }
    async updateTrollSideChain(params) {
        let chain = this.crosschain.crossChainContracts.sideChain[params.chainId];
        if (!chain) {
            throw new Error("Invalid chainId");
        }
        let wallet = this.crosschain.wallets[params.chainId];
        let registry = chain.trollRegistry;
        let receipt = await registry.updateTroll({ signatures: params.signatures, trollProfileIndex: params.event.trollProfileIndex, newTroll: params.event.newTroll, nonce: new eth_wallet_1.BigNumber(params.event._event.transactionHash) });
        let event = registry.parseAddTrollEvent(receipt)[0];
        return event;
    }
    async hashRemoveTrollForSigning(params) {
        let wallet = this.crosschain.wallets[params.chainId];
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: this.crosschain.crossChainContracts.sideChain[params.chainId].trollRegistry.address }, { t: 'uint256', v: params.trollProfileIndex.toString() }, { t: 'address', v: params.newTroll }, { t: 'uint256', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    async hashUnlockTrollForSigning(params) {
        let wallet = this.crosschain.wallets[params.chainId];
        let decimals = await this.crosschain.oswap[params.chainId].decimals;
        let penalty = Object.values(params.penalties).map(e => eth_wallet_1.Utils.toDecimals(e, decimals));
        let hash = wallet.web3.utils.soliditySha3({ t: 'uint256', v: await wallet.getChainId() }, { t: 'address', v: this.crosschain.crossChainContracts.sideChain[params.chainId].trollRegistry.address }, { t: 'uint256', v: params.trollProfileIndex.toString() }, { t: 'uint8', v: params.unlock ? 1 : 0 }, { t: 'address[]', v: Object.keys(params.penalties) }, { t: 'uint256[]', v: penalty }, { t: 'uint256', v: "0x" + params.nonce.toString(16) });
        return hash;
    }
    async unlockSuperTroll(params) {
        let penalty = [];
        let decimals = await this.crosschain.oswap[params.chainId].decimals;
        for (let vault in params.penalties) {
            penalty.push(eth_wallet_1.Utils.toDecimals(params.penalties[vault], decimals));
        }
        let registry = this.crosschain.crossChainContracts.sideChain[params.chainId].trollRegistry;
        let receipt = await registry.unlockSuperTroll({
            signatures: params.signatures,
            trollProfileIndex: params.trollProfileIndex,
            unlock: params.unlock,
            vaultRegistry: Object.keys(params.penalties),
            penalty: penalty,
            nonce: params.nonce
        });
        return registry.parseUnlockSuperTrollEvent(receipt);
    }
    hashVotingExecutionForSigning(params) {
        return this.crosschain.crossChainContracts.sideChain[params.chainId].voting.getHash({ params: params.params, nonce: params.nonce });
    }
    executeVoting(params) {
        return this.crosschain.crossChainContracts.sideChain[params.chainId].votingExecutor.execute(params);
    }
    async rebalancerWithdraw(params) {
        let chain = this.getChain(params.chainId);
        let vault = chain.bridgeVault[params.asset];
        let event = await vault.rebalancerWithdraw({
            signatures: params.signatures,
            assetAmount: params.assetAmount,
            nonce: params.nonce
        });
        return event;
    }
    async voidOrder(params) {
        let chain = this.getChain(params.order.targetChain);
        let vault = chain.bridgeVault[params.order.targetVault];
        let event = vault.voidOrder({ signatures: params.signatures, orderId: params.order.targetOrderId });
        return event;
    }
}
exports.Troll = Troll;
