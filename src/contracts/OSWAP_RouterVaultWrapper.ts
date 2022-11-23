import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RouterVaultWrapper.json";

export interface ISwapETHForExactTokensParams {pair:string[];vault:string;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapExactETHForTokensParams {pair:string[];vault:string;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapExactTokensForTokensParams {pair:string[];vault:string;amountIn:number|BigNumber;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapTokensForExactTokensParams {pair:string[];vault:string;amountIn:number|BigNumber;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export class OSWAP_RouterVaultWrapper extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_RouterVaultWrapper.SwapEvent{
        let result = event.data;
        return {
            vault: result.vault,
            orderId: new BigNumber(result.orderId),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new BigNumber(result.inAmount),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    configStore: {
        (): Promise<string>;
    }
    initAddress: {
        (configStore:string): Promise<TransactionReceipt>;
        call: (configStore:string) => Promise<void>;
    }
    owner: {
        (): Promise<string>;
    }
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams,_value:number|BigNumber) => Promise<BigNumber>;
    }
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams,_value:number|BigNumber) => Promise<BigNumber>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber>;
    }
    updateConfigStore: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    private assign(){
        let configStore_call = async (): Promise<string> => {
            let result = await this.call('configStore');
            return result;
        }
        this.configStore = configStore_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let initAddress_send = async (configStore:string): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[configStore]);
            return result;
        }
        let initAddress_call = async (configStore:string): Promise<void> => {
            let result = await this.call('initAddress',[configStore]);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let swapETHForExactTokensParams = (params: ISwapETHForExactTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapETHForExactTokens_send = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapETHForExactTokens_call = async (params: ISwapETHForExactTokensParams,_value:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('swapETHForExactTokens',swapETHForExactTokensParams(params), {value:_value});
            return new BigNumber(result);
        }
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call:swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params: ISwapExactETHForTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapExactETHForTokens_send = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactETHForTokens_call = async (params: ISwapExactETHForTokensParams,_value:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('swapExactETHForTokens',swapExactETHForTokensParams(params), {value:_value});
            return new BigNumber(result);
        }
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call:swapExactETHForTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<BigNumber> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return new BigNumber(result);
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<BigNumber> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return new BigNumber(result);
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
        let updateConfigStore_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('updateConfigStore');
            return result;
        }
        let updateConfigStore_call = async (): Promise<void> => {
            let result = await this.call('updateConfigStore');
            return;
        }
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call:updateConfigStore_call
        });
    }
}
export module OSWAP_RouterVaultWrapper{
    export interface SwapEvent {vault:string,orderId:BigNumber,sender:string,inToken:string,inAmount:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
}