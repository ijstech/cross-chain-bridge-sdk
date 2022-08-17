import { CrossChainSingle } from './crossChain';
import { OSWAP_MainChainTrollRegistry } from "./contracts";
export declare class Owner {
    crosschain: CrossChainSingle;
    constructor(crosschain: CrossChainSingle);
    addTroll(params: {
        troll: string;
        isSuperTroll: boolean;
        signature: string;
    }): Promise<OSWAP_MainChainTrollRegistry.AddTrollEvent>;
}
