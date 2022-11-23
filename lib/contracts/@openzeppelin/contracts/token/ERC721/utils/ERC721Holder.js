"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721Holder = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ERC721Holder_json_1 = __importDefault(require("./ERC721Holder.json"));
class ERC721Holder extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ERC721Holder_json_1.default.abi, ERC721Holder_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    assign() {
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
    }
}
exports.ERC721Holder = ERC721Holder;
