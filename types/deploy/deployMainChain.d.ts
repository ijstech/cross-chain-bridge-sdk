import { Wallet, BigNumber } from '@ijstech/eth-wallet';
import { IMainChainDeploymentResult as IDeploymentResult } from '../crossChain';
export interface IVotingProfile {
    name: string[];
    minExeDelay: number[];
    minVoteDuration: number[];
    maxVoteDuration: number[];
    minGovTokenToCreateVote: number[] | BigNumber[];
    minQuorum: number[] | BigNumber[];
}
export interface IDeployOptions {
    govToken: string;
    votingManager?: string;
    superTrollNft: string[];
    generalTrollNft: string[];
    votingProfiles: IVotingProfile;
    vetoAdmin: string;
}
export declare const DefaultDeploymentOptions: IDeployOptions;
export declare function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
