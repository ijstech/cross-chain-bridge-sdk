"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_MainChainTrollRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_MainChainTrollRegistry_json_1 = __importDefault(require("./OSWAP_MainChainTrollRegistry.json"));
class OSWAP_MainChainTrollRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_MainChainTrollRegistry_json_1.default.abi, OSWAP_MainChainTrollRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.govToken, params.superTrollNft, params.generalTrollNft]);
    }
    parseAddTrollEvent(receipt) {
        return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            troll: result.troll,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            isSuperTroll: result.isSuperTroll,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBlockNftTokenIdEvent(receipt) {
        return this.parseEvents(receipt, "BlockNftTokenId").map(e => this.decodeBlockNftTokenIdEvent(e));
    }
    decodeBlockNftTokenIdEvent(event) {
        let result = event.data;
        return {
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            blocked: result.blocked,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseResumeEvent(receipt) {
        return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownEvent(receipt) {
        return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStakeGeneralTollEvent(receipt) {
        return this.parseEvents(receipt, "StakeGeneralToll").map(e => this.decodeStakeGeneralTollEvent(e));
    }
    decodeStakeGeneralTollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseStakeSuperTollEvent(receipt) {
        return this.parseEvents(receipt, "StakeSuperToll").map(e => this.decodeStakeSuperTollEvent(e));
    }
    decodeStakeSuperTollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeGeneralTollEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeGeneralToll").map(e => this.decodeUnstakeGeneralTollEvent(e));
    }
    decodeUnstakeGeneralTollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseUnstakeSuperTollEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeSuperToll").map(e => this.decodeUnstakeSuperTollEvent(e));
    }
    decodeUnstakeSuperTollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseUpdateNFTEvent(receipt) {
        return this.parseEvents(receipt, "UpdateNFT").map(e => this.decodeUpdateNFTEvent(e));
    }
    decodeUpdateNFTEvent(event) {
        let result = event.data;
        return {
            nft: result.nft,
            trollType: new eth_contract_1.BigNumber(result.trollType),
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt) {
        return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            oldTroll: result.oldTroll,
            newTroll: result.newTroll,
            _event: event
        };
    }
    parseUpdateVotingManagerEvent(receipt) {
        return this.parseEvents(receipt, "UpdateVotingManager").map(e => this.decodeUpdateVotingManagerEvent(e));
    }
    decodeUpdateVotingManagerEvent(event) {
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    parseUpgradeEvent(receipt) {
        return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event) {
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    assign() {
        let backerStakingParams = (params) => [params.backer, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let backerStaking_call = async (params) => {
            let result = await this.call('backerStaking', backerStakingParams(params));
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(e.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(e.timestamp)
            })));
        };
        this.backerStaking = backerStaking_call;
        let getStakeTo_call = async (backer) => {
            let result = await this.call('getStakeTo', [backer]);
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(e.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(e.timestamp)
            })));
        };
        this.getStakeTo = getStakeTo_call;
        let getStakedBy_call = async (trollProfileIndex) => {
            let result = await this.call('getStakedBy', [this.wallet.utils.toString(trollProfileIndex)]);
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId)
            })));
        };
        this.getStakedBy = getStakedBy_call;
        let getStakes_call = async (troll) => {
            let result = await this.call('getStakes', [troll]);
            return new eth_contract_1.BigNumber(result);
        };
        this.getStakes = getStakes_call;
        let getStakesByTrollProfile_call = async (trollProfileIndex) => {
            let result = await this.call('getStakesByTrollProfile', [this.wallet.utils.toString(trollProfileIndex)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.getStakesByTrollProfile = getStakesByTrollProfile_call;
        let getTrollByNftParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
        let getTrollByNft_call = async (params) => {
            let result = await this.call('getTrollByNft', getTrollByNftParams(params));
            return result;
        };
        this.getTrollByNft = getTrollByNft_call;
        let getTrollProperties_call = async (trollProfileIndex) => {
            let result = await this.call('getTrollProperties', [this.wallet.utils.toString(trollProfileIndex)]);
            return {
                troll: {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new eth_contract_1.BigNumber(result.troll.trollType),
                    nftCount: new eth_contract_1.BigNumber(result.troll.nftCount)
                },
                nfts: result.nfts.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_1.BigNumber(e.tokenId)
                })),
                backers: result.backers
            };
        };
        this.getTrollProperties = getTrollProperties_call;
        let getTrollPropertiesByAddress_call = async (trollAddress) => {
            let result = await this.call('getTrollPropertiesByAddress', [trollAddress]);
            return {
                troll: {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new eth_contract_1.BigNumber(result.troll.trollType),
                    nftCount: new eth_contract_1.BigNumber(result.troll.nftCount)
                },
                nfts: result.nfts.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_1.BigNumber(e.tokenId)
                })),
                backers: result.backers
            };
        };
        this.getTrollPropertiesByAddress = getTrollPropertiesByAddress_call;
        let getTrollsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getTrolls_call = async (params) => {
            let result = await this.call('getTrolls', getTrollsParams(params));
            return (result.map(e => ({
                owner: e.owner,
                troll: e.troll,
                trollType: new eth_contract_1.BigNumber(e.trollType),
                nftCount: new eth_contract_1.BigNumber(e.nftCount)
            })));
        };
        this.getTrolls = getTrolls_call;
        let govToken_call = async () => {
            let result = await this.call('govToken');
            return result;
        };
        this.govToken = govToken_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let newTrollRegistry_call = async () => {
            let result = await this.call('newTrollRegistry');
            return result;
        };
        this.newTrollRegistry = newTrollRegistry_call;
        let nftType_call = async (param1) => {
            let result = await this.call('nftType', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.nftType = nftType_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let ownerTrollsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let ownerTrolls_call = async (params) => {
            let result = await this.call('ownerTrolls', ownerTrollsParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerTrolls = ownerTrolls_call;
        let ownerTrollsLength_call = async (owner) => {
            let result = await this.call('ownerTrollsLength', [owner]);
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerTrollsLength = ownerTrollsLength_call;
        let paused_call = async () => {
            let result = await this.call('paused');
            return result;
        };
        this.paused = paused_call;
        let stakeOf_call = async (param1) => {
            let result = await this.call('stakeOf', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeOf = stakeOf_call;
        let stakeToParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakeTo_call = async (params) => {
            let result = await this.call('stakeTo', stakeToParams(params));
            return {
                nft: result.nft,
                tokenId: new eth_contract_1.BigNumber(result.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(result.timestamp)
            };
        };
        this.stakeTo = stakeTo_call;
        let stakeToInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakeToInv_call = async (params) => {
            let result = await this.call('stakeToInv', stakeToInvParams(params));
            return {
                backer: result.backer,
                index: new eth_contract_1.BigNumber(result.index)
            };
        };
        this.stakeToInv = stakeToInv_call;
        let stakeToLength_call = async (backer) => {
            let result = await this.call('stakeToLength', [backer]);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeToLength = stakeToLength_call;
        let stakedByParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params) => {
            let result = await this.call('stakedBy', stakedByParams(params));
            return {
                nft: result.nft,
                tokenId: new eth_contract_1.BigNumber(result.tokenId)
            };
        };
        this.stakedBy = stakedBy_call;
        let stakedByInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakedByInv_call = async (params) => {
            let result = await this.call('stakedByInv', stakedByInvParams(params));
            return {
                trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
                index: new eth_contract_1.BigNumber(result.index)
            };
        };
        this.stakedByInv = stakedByInv_call;
        let stakedByLength_call = async (trollProfileIndex) => {
            let result = await this.call('stakedByLength', [this.wallet.utils.toString(trollProfileIndex)]);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakedByLength = stakedByLength_call;
        let totalStake_call = async () => {
            let result = await this.call('totalStake');
            return new eth_contract_1.BigNumber(result);
        };
        this.totalStake = totalStake_call;
        let trollNft_call = async (param1) => {
            let result = await this.call('trollNft', [this.wallet.utils.toString(param1)]);
            return result;
        };
        this.trollNft = trollNft_call;
        let trollNftInv_call = async (param1) => {
            let result = await this.call('trollNftInv', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollNftInv = trollNftInv_call;
        let trollNftLength_call = async () => {
            let result = await this.call('trollNftLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.trollNftLength = trollNftLength_call;
        let trollProfileInv_call = async (param1) => {
            let result = await this.call('trollProfileInv', [param1]);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfileInv = trollProfileInv_call;
        let trollProfiles_call = async (param1) => {
            let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)]);
            return {
                owner: result.owner,
                troll: result.troll,
                trollType: new eth_contract_1.BigNumber(result.trollType),
                nftCount: new eth_contract_1.BigNumber(result.nftCount)
            };
        };
        this.trollProfiles = trollProfiles_call;
        let trollProfilesLength_call = async () => {
            let result = await this.call('trollProfilesLength');
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfilesLength = trollProfilesLength_call;
        let votingManager_call = async () => {
            let result = await this.call('votingManager');
            return result;
        };
        this.votingManager = votingManager_call;
        let addStakesGeneralTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
        let addStakesGeneralTroll_send = async (params) => {
            let result = await this.send('addStakesGeneralTroll', addStakesGeneralTrollParams(params));
            return result;
        };
        let addStakesGeneralTroll_call = async (params) => {
            let result = await this.call('addStakesGeneralTroll', addStakesGeneralTrollParams(params));
            return;
        };
        this.addStakesGeneralTroll = Object.assign(addStakesGeneralTroll_send, {
            call: addStakesGeneralTroll_call
        });
        let addStakesSuperTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
        let addStakesSuperTroll_send = async (params) => {
            let result = await this.send('addStakesSuperTroll', addStakesSuperTrollParams(params));
            return result;
        };
        let addStakesSuperTroll_call = async (params) => {
            let result = await this.call('addStakesSuperTroll', addStakesSuperTrollParams(params));
            return;
        };
        this.addStakesSuperTroll = Object.assign(addStakesSuperTroll_send, {
            call: addStakesSuperTroll_call
        });
        let addTrollParams = (params) => [params.troll, params.isSuperTroll, this.wallet.utils.stringToBytes(params.signature)];
        let addTroll_send = async (params) => {
            let result = await this.send('addTroll', addTrollParams(params));
            return result;
        };
        let addTroll_call = async (params) => {
            let result = await this.call('addTroll', addTrollParams(params));
            return;
        };
        this.addTroll = Object.assign(addTroll_send, {
            call: addTroll_call
        });
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let initAddress_send = async (votingManager) => {
            let result = await this.send('initAddress', [votingManager]);
            return result;
        };
        let initAddress_call = async (votingManager) => {
            let result = await this.call('initAddress', [votingManager]);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let onERC721ReceivedParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3), this.wallet.utils.stringToBytes(params.param4)];
        let onERC721Received_send = async (params) => {
            let result = await this.send('onERC721Received', onERC721ReceivedParams(params));
            return result;
        };
        let onERC721Received_call = async (params) => {
            let result = await this.call('onERC721Received', onERC721ReceivedParams(params));
            return result;
        };
        this.onERC721Received = Object.assign(onERC721Received_send, {
            call: onERC721Received_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let resume_send = async () => {
            let result = await this.send('resume');
            return result;
        };
        let resume_call = async () => {
            let result = await this.call('resume');
            return;
        };
        this.resume = Object.assign(resume_send, {
            call: resume_call
        });
        let shutdownByAdmin_send = async () => {
            let result = await this.send('shutdownByAdmin');
            return result;
        };
        let shutdownByAdmin_call = async () => {
            let result = await this.call('shutdownByAdmin');
            return;
        };
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call: shutdownByAdmin_call
        });
        let shutdownByVoting_send = async () => {
            let result = await this.send('shutdownByVoting');
            return result;
        };
        let shutdownByVoting_call = async () => {
            let result = await this.call('shutdownByVoting');
            return;
        };
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call: shutdownByVoting_call
        });
        let stakeGeneralTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.nft, this.wallet.utils.toString(params.tokenId)];
        let stakeGeneralTroll_send = async (params) => {
            let result = await this.send('stakeGeneralTroll', stakeGeneralTrollParams(params));
            return result;
        };
        let stakeGeneralTroll_call = async (params) => {
            let result = await this.call('stakeGeneralTroll', stakeGeneralTrollParams(params));
            return;
        };
        this.stakeGeneralTroll = Object.assign(stakeGeneralTroll_send, {
            call: stakeGeneralTroll_call
        });
        let stakeSuperTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.nft, this.wallet.utils.toString(params.tokenId)];
        let stakeSuperTroll_send = async (params) => {
            let result = await this.send('stakeSuperTroll', stakeSuperTrollParams(params));
            return result;
        };
        let stakeSuperTroll_call = async (params) => {
            let result = await this.call('stakeSuperTroll', stakeSuperTrollParams(params));
            return;
        };
        this.stakeSuperTroll = Object.assign(stakeSuperTroll_send, {
            call: stakeSuperTroll_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let unstakeGeneralTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
        let unstakeGeneralTroll_send = async (params) => {
            let result = await this.send('unstakeGeneralTroll', unstakeGeneralTrollParams(params));
            return result;
        };
        let unstakeGeneralTroll_call = async (params) => {
            let result = await this.call('unstakeGeneralTroll', unstakeGeneralTrollParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.unstakeGeneralTroll = Object.assign(unstakeGeneralTroll_send, {
            call: unstakeGeneralTroll_call
        });
        let unstakeSuperTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
        let unstakeSuperTroll_send = async (params) => {
            let result = await this.send('unstakeSuperTroll', unstakeSuperTrollParams(params));
            return result;
        };
        let unstakeSuperTroll_call = async (params) => {
            let result = await this.call('unstakeSuperTroll', unstakeSuperTrollParams(params));
            return new eth_contract_1.BigNumber(result);
        };
        this.unstakeSuperTroll = Object.assign(unstakeSuperTroll_send, {
            call: unstakeSuperTroll_call
        });
        let updateNftParams = (params) => [params.nft, this.wallet.utils.toString(params.trolltype)];
        let updateNft_send = async (params) => {
            let result = await this.send('updateNft', updateNftParams(params));
            return result;
        };
        let updateNft_call = async (params) => {
            let result = await this.call('updateNft', updateNftParams(params));
            return;
        };
        this.updateNft = Object.assign(updateNft_send, {
            call: updateNft_call
        });
        let updateTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.stringToBytes(params.signature)];
        let updateTroll_send = async (params) => {
            let result = await this.send('updateTroll', updateTrollParams(params));
            return result;
        };
        let updateTroll_call = async (params) => {
            let result = await this.call('updateTroll', updateTrollParams(params));
            return;
        };
        this.updateTroll = Object.assign(updateTroll_send, {
            call: updateTroll_call
        });
        let updateVotingManager_send = async () => {
            let result = await this.send('updateVotingManager');
            return result;
        };
        let updateVotingManager_call = async () => {
            let result = await this.call('updateVotingManager');
            return;
        };
        this.updateVotingManager = Object.assign(updateVotingManager_send, {
            call: updateVotingManager_call
        });
        let upgrade_send = async (trollRegistry) => {
            let result = await this.send('upgrade', [trollRegistry]);
            return result;
        };
        let upgrade_call = async (trollRegistry) => {
            let result = await this.call('upgrade', [trollRegistry]);
            return;
        };
        this.upgrade = Object.assign(upgrade_send, {
            call: upgrade_call
        });
        let upgradeByAdmin_send = async (trollRegistry) => {
            let result = await this.send('upgradeByAdmin', [trollRegistry]);
            return result;
        };
        let upgradeByAdmin_call = async (trollRegistry) => {
            let result = await this.call('upgradeByAdmin', [trollRegistry]);
            return;
        };
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call: upgradeByAdmin_call
        });
    }
}
exports.OSWAP_MainChainTrollRegistry = OSWAP_MainChainTrollRegistry;
