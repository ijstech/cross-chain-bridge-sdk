"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
class Owner {
    constructor(crosschain) {
        this.crosschain = crosschain;
    }
    async addTroll(params) {
        let chain = this.crosschain.mainChain;
        if (!chain) {
            throw new Error("not on main chain");
        }
        if (this.crosschain.chains.mainChain != this.crosschain.chainId) {
            throw new Error("not on main chain");
        }
        let registry = chain.trollRegistry;
        let receipt = await registry.addTroll(params);
        let event = registry.parseAddTrollEvent(receipt)[0];
        return event;
    }
    async updateTroll(params) {
        let chain = this.crosschain.mainChain;
        if (!chain) {
            throw new Error("not on main chain");
        }
        if (this.crosschain.chains.mainChain != this.crosschain.chainId) {
            throw new Error("not on main chain");
        }
        let registry = chain.trollRegistry;
        let receipt = await registry.updateTroll(params);
        let event = registry.parseUpdateTrollEvent(receipt)[0];
        return event;
    }
}
exports.Owner = Owner;
