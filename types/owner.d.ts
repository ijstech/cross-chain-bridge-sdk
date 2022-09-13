import { BigNumber } from '@ijstech/eth-wallet';
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
    updateTroll(params: {
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        signature: string;
    }): Promise<OSWAP_MainChainTrollRegistry.UpdateTrollEvent>;
}
