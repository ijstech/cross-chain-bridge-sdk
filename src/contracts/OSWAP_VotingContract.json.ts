export default {
"abi":[
{"inputs":[{"components":[{"internalType":"contract OSWAP_MainChainVotingExecutor","name":"executor","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes32[]","name":"options","type":"bytes32[]"},{"internalType":"uint256","name":"quorum","type":"uint256"},{"internalType":"uint256","name":"threshold","type":"uint256"},{"internalType":"uint256","name":"voteEndTime","type":"uint256"},{"internalType":"uint256","name":"executeDelay","type":"uint256"},{"internalType":"bytes32[]","name":"executeParam","type":"bytes32[]"}],"internalType":"struct OSWAP_VotingContract.Params","name":"params","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountVoteOption","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountVoteWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"allExecuteParam","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"allOptions","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"allOptionsWeight","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"execute","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"executeDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"executeParam","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"executeParamLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"executed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"executor","outputs":[{"internalType":"contract OSWAP_MainChainVotingExecutor","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"getParams","outputs":[{"internalType":"address","name":"executor_","type":"address"},{"internalType":"uint256","name":"id_","type":"uint256"},{"internalType":"bytes32","name":"name_","type":"bytes32"},{"internalType":"bytes32[]","name":"options_","type":"bytes32[]"},{"internalType":"uint256","name":"voteStartTime_","type":"uint256"},{"internalType":"uint256","name":"voteEndTime_","type":"uint256"},{"internalType":"uint256","name":"executeDelay_","type":"uint256"},{"internalType":"bool[2]","name":"status_","type":"bool[2]"},{"internalType":"uint256[]","name":"optionsWeight_","type":"uint256[]"},{"internalType":"uint256[3]","name":"quorum_","type":"uint256[3]"},{"internalType":"bytes32[]","name":"executeParam_","type":"bytes32[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"name","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"options","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"optionsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"optionsWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"quorum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"threshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalVoteWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"trollRegistry","outputs":[{"internalType":"contract OSWAP_MainChainTrollRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"updateWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"veto","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"vetoed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"voteEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"voteStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"votingManager","outputs":[{"internalType":"contract OSWAP_VotingManager","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"6101c06040523480156200001257600080fd5b506040516200252c3803806200252c8339810160408190526200003591620006ea565b6000336001600160a01b03166330167bec6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200007157600080fd5b505afa15801562000086573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ac9190620006ca565b90506000336001600160a01b031663da1bcdf06040518163ffffffff1660e01b815260040160206040518083038186803b158015620000ea57600080fd5b505afa158015620000ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001259190620006ca565b6001600160601b0319606082811b821660a05284901b1660805260c0840151909150421115620001a85760405162461bcd60e51b8152602060048201526024808201527f566f74696e67436f6e74726163743a20566f74696e6720616c726561647920656044820152631b99195960e21b60648201526084015b60405180910390fd5b61010083015151156200040857825160405163a3818b3b60e01b81526001600160a01b0391821660048201529082169063a3818b3b9060240160206040518083038186803b158015620001fa57600080fd5b505afa1580156200020f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023591906200069f565b620002835760405162461bcd60e51b815260206004820181905260248201527f566f74696e67436f6e74726163743a20496e76616c6964206578656375746f7260448201526064016200019f565b8260600151516002148015620002bd57508260600151600081518110620002ae57620002ae6200081f565b6020026020010151605960f81b145b8015620002ee57508260600151600181518110620002df57620002df6200081f565b6020026020010151602760f91b145b6200033c5760405162461bcd60e51b815260206004820152601f60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e730060448201526064016200019f565b670de0b6b3a76400008360a001511115620003a45760405162461bcd60e51b815260206004820152602160248201527f566f74696e67436f6e74726163743a20496e76616c6964207468726573686f6c6044820152601960fa1b60648201526084016200019f565b60008360e0015111620004085760405162461bcd60e51b815260206004820152602560248201527f566f74696e67436f6e74726163743a20496e76616c696420657865637574652060448201526464656c617960d81b60648201526084016200019f565b82600001516001600160a01b031660c0816001600160a01b031660601b81525050816001600160a01b0316638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046357600080fd5b505afa15801562000478573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200049e9190620007d9565b60065560208084015160e05260408401516101005260608401518051620004ca9260009201906200057c565b5060808301516101205260a0830151610140526060830151516001600160401b03811115620004fd57620004fd62000835565b60405190808252806020026020018201604052801562000527578160200160208202803683370190505b5080516200053e916004916020909101906200057c565b50426101605260c08301516101805260e08301516101a052610100830151805162000572916007916020909101906200057c565b5050505062000864565b828054828255906000526020600020908101928215620005ba579160200282015b82811115620005ba5782518255916020019190600101906200059d565b50620005c8929150620005cc565b5090565b5b80821115620005c85760008155600101620005cd565b600082601f830112620005f557600080fd5b815160206001600160401b038083111562000614576200061462000835565b8260051b604051601f19603f830116810181811084821117156200063c576200063c62000835565b604052848152838101925086840182880185018910156200065c57600080fd5b600092505b858310156200068157805184529284019260019290920191840162000661565b50979650505050505050565b80516200069a816200084b565b919050565b600060208284031215620006b257600080fd5b81518015158114620006c357600080fd5b9392505050565b600060208284031215620006dd57600080fd5b8151620006c3816200084b565b600060208284031215620006fd57600080fd5b81516001600160401b03808211156200071557600080fd5b9083019061012082860312156200072b57600080fd5b62000735620007f3565b62000740836200068d565b815260208301516020820152604083015160408201526060830151828111156200076957600080fd5b6200077787828601620005e3565b6060830152506080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015183811115620007ba57600080fd5b620007c888828701620005e3565b918301919091525095945050505050565b600060208284031215620007ec57600080fd5b5051919050565b60405161012081016001600160401b038111828210171562000819576200081962000835565b60405290565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200086157600080fd5b50565b60805160601c60a05160601c60c05160601c60e05161010051610120516101405161016051610180516101a051611ba962000983600039600081816103a801528181610f0701526110340152600081816103d8015281816104da01528181610ad001528181610ee501526110550152600081816102620152610ec301526000818161034501528181610e1a01526113f401526000818161022801528181610df701526112c30152600081816101ee0152610e9f0152600081816103ff0152610e7d01526000818161044101528181610e5b015261154601526000818161047001528181610762015281816115b001526116ae0152600081816102c90152818161088901528181610a2a01528181610b620152610cc70152611ba96000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063876cdb2f11610104578063c55dd801116100a2578063ede20b4611610071578063ede20b46146104a3578063ef9b78c6146104b5578063f3c49550146104bd578063f830f09c146104d057600080fd5b8063c55dd80114610463578063da1bcdf01461046b578063da918d7a14610492578063e5188f551461049a57600080fd5b8063af640d0f116100de578063af640d0f146103fa578063b3ee6e4014610421578063bd81b9a614610429578063c34c08e51461043c57600080fd5b8063876cdb2f146103a357806396c82e57146103ca5780639e6cb42b146103d357600080fd5b806330167bec1161017157806342cde4e81161014b57806342cde4e81461034057806358c0dc1d146103675780635e615a6b1461037c578063614619541461039b57600080fd5b806330167bec146102c457806331a38c8914610310578063409e22051461032d57600080fd5b806317e42ec0116101ad57806317e42ec01461024a57806318024acc1461025d5780632376a29a14610284578063281a9bdf146102a457600080fd5b80630121b93f146101d457806306fdde03146101e95780631703a01814610223575b600080fd5b6101e76101e23660046118fb565b6104d8565b005b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6101e76102583660046118be565b610ace565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102106102923660046118be565b60036020526000908152604090205481565b6102106102b23660046118be565b60026020526000908152604090205481565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021a565b60015461031d9060ff1681565b604051901515815260200161021a565b61021061033b3660046118fb565b610d2e565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61036f610d4f565b60405161021a9190611a4f565b610384610da7565b60405161021a9b9a9998979695949392919061198b565b6101e761102f565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61021060065481565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b600754610210565b6102106104373660046118fb565b611630565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b600054610210565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b61036f611640565b61021060055481565b60015461031d90610100900460ff1681565b6101e7611696565b6102106104cb3660046118fb565b61181c565b61036f61182c565b7f000000000000000000000000000000000000000000000000000000000000000042111561058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a20566f746520616c726561647920656e6460448201527f656400000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600154610100900460ff1615610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156106b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6000548110610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e00006044820152606401610584565b6007546040517f65eaf8bc00000000000000000000000000000000000000000000000000000000815290156004820152336024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906365eaf8bc90606401600060405180830381600087803b1580156107bb57600080fd5b505af11580156107cf573d6000803e3d6000fd5b50503360009081526003602052604090205491505080156108585733600090815260026020526040902054600480548391908390811061081157610811611b44565b90600052602060002001546108269190611afe565b6004828154811061083957610839611b44565b600091825260209091200155600554610853908390611afe565b600555505b6040517f426233600000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063426233609060240160206040518083038186803b1580156108e057600080fd5b505afa1580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190611914565b9050600081116109aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a204e6f74207374616b656420746f20766f60448201527f74650000000000000000000000000000000000000000000000000000000000006064820152608401610584565b3360009081526002602090815260408083208690556003909152902081905560048054829190859081106109e0576109e0611b44565b90600052602060002001546109f59190611aa9565b60048481548110610a0857610a08611b44565b600091825260209091200155600554610a22908290611aa9565b6005819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b505afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190611914565b600655505050565b7f00000000000000000000000000000000000000000000000000000000000000004211158015610b065750600154610100900460ff16155b8015610b15575060015460ff16155b15610d2b576040517f4262336000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063426233609060240160206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611914565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260409020549091508015801590610c165750818114155b15610cc55773ffffffffffffffffffffffffffffffffffffffff83166000908152600260209081526040808320546003909252909120839055600480548491849184908110610c6757610c67611b44565b9060005260206000200154610c7c9190611afe565b610c869190611aa9565b60048281548110610c9957610c99611b44565b90600052602060002001819055508282600554610cb69190611afe565b610cc09190611aa9565b600555505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b50565b60008181548110610d3e57600080fd5b600091825260209091200154905081565b60606007805480602002602001604051908101604052809291908181526020018280548015610d9d57602002820191906000526020600020905b815481526020019060010190808311610d89575b5050505050905090565b600080600060606000806000610dbb611882565b6060610dc56118a0565b60408051808201825260015460ff808216151583526101009091041615156020808301919091528251606081810185527f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000082840152600654828601526000805486518186028101860190975280875291957f0000000000000000000000000000000000000000000000000000000000000000957f0000000000000000000000000000000000000000000000000000000000000000957f00000000000000000000000000000000000000000000000000000000000000009593947f0000000000000000000000000000000000000000000000000000000000000000947f0000000000000000000000000000000000000000000000000000000000000000947f00000000000000000000000000000000000000000000000000000000000000009493600493600792918a9190830182828015610f6157602002820191906000526020600020905b815481526020019060010190808311610f4d575b5050505050975082805480602002602001604051908101604052809291908181526020018280548015610fb357602002820191906000526020600020905b815481526020019060010190808311610f9f575b505050505092508080548060200260200160405190810160405280929190818152602001828054801561100557602002820191906000526020600020905b815481526020019060010190808311610ff1575b505050505090509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b6110797f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aa9565b4211611107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f566f74696e67436f6e74726163743a20457865637574652064656c6179206e6f60448201527f74207061737420796574000000000000000000000000000000000000000000006064820152608401610584565b600154610100900460ff161561119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff1615611232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6007546112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f566f74696e67436f6e74726163743a204578656375746520706172616d206e6f60448201527f7420646566696e656400000000000000000000000000000000000000000000006064820152608401610584565b7f0000000000000000000000000000000000000000000000000000000000000000600554101561134d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a2051756f72756d206e6f74206d657400006044820152606401610584565b600460018154811061136157611361611b44565b9060005260206000200154600460008154811061138057611380611b44565b9060005260206000200154116113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f566f74696e67436f6e74726163743a204d616a6f72697479206e6f74206d65746044820152606401610584565b7f00000000000000000000000000000000000000000000000000000000000000006005546114209190611ac1565b670de0b6b3a7640000600460008154811061143d5761143d611b44565b90600052602060002001546114529190611ac1565b116114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f566f74696e67436f6e74726163743a205468726573686f6c64206e6f74206d6560448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790556040517f8af7c64900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638af7c6499061157c90600790600401611a62565b600060405180830381600087803b15801561159657600080fd5b505af11580156115aa573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166331a38c896040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561161657600080fd5b505af115801561162a573d6000803e3d6000fd5b50505050565b60078181548110610d3e57600080fd5b60606000805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461175b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f535741505f566f74696e67436f6e74726163743a204e6f742066726f6d204760448201527f6f7665726e616e636500000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156117ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741505f566f74696e67436f6e74726163743a20416c726561647920657860448201527f65637574656400000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b60048181548110610d3e57600080fd5b60606004805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b60405180604001604052806002906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b6000602082840312156118d057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146118f457600080fd5b9392505050565b60006020828403121561190d57600080fd5b5035919050565b60006020828403121561192657600080fd5b5051919050565b600081518084526020808501945080840160005b8381101561195d57815187529582019590820190600101611941565b509495945050505050565b8060005b600381101561162a57815184526020938401939091019060010161196c565b60006101c073ffffffffffffffffffffffffffffffffffffffff8e16835260208d818501528c60408501528160608501526119c88285018d61192d565b91508a60808501528960a08501528860c085015260e084018860005b6002811015611a035781511515835291830191908301906001016119e4565b50505050828103610120840152611a1a818761192d565b9050611a2a610140840186611968565b8281036101a0840152611a3d818561192d565b9e9d5050505050505050505050505050565b6020815260006118f4602083018461192d565b6020808252825482820181905260008481528281209092916040850190845b81811015611a9d57835483526001938401939285019201611a81565b50909695505050505050565b60008219821115611abc57611abc611b15565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611af957611af9611b15565b500290565b600082821015611b1057611b10611b15565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fb893253c0838414dd893d5fa2f15a58c12b422ae36a85f01367b3942041db0b64736f6c63430008060033"
}