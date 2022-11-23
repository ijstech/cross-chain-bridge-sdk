export default {
"abi":[
{"inputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"_trollRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32[]","name":"params","type":"bytes32[]"}],"name":"Execute","type":"event"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"contract OSWAP_ConfigStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"bytes32[]","name":"params","type":"bytes32[]"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"execute","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes32[]","name":"params","type":"bytes32[]"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"executeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"trollRegistry","outputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60c060405234801561001057600080fd5b50604051610ebe380380610ebe83398101604081905261002f91610169565b806001600160a01b031660a0816001600160a01b031660601b81525050806001600160a01b0316639d69dc4e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561008557600080fd5b505afa158015610099573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100bd9190610169565b6000806101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011b57600080fd5b505afa15801561012f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101539190610169565b60601b6001600160601b031916608052506101a5565b60006020828403121561017b57600080fd5b81516101868161018d565b9392505050565b6001600160a01b03811681146101a257600080fd5b50565b60805160601c60a05160601c610ccd6101f16000396000818160c20152818161026a0152818161032c015281816103db0152818161058101526107980152600060710152610ccd6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639d69dc4e116100505780639d69dc4e146100e4578063b2286ef014610104578063c0c888501461012557600080fd5b806305268cff1461006c57806330167bec146100bd575b600080fd5b6100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100937f000000000000000000000000000000000000000000000000000000000000000081565b6000546100939073ffffffffffffffffffffffffffffffffffffffff1681565b610117610112366004610989565b61013a565b6040519081526020016100b4565b6101386101333660046109d5565b610178565b005b60405160009046906101589082903090889088908890602001610a92565b604051602081830303815290604052805190602001209150509392505050565b816101e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420706172616d73206c656e677468000000000000000000000060448201526064015b60405180910390fd5b7fb98f16f9e16a613740729e6e1b35730f7ca1456ba20bff88685e53e1881bec908383604051610215929190610c13565b60405180910390a1600061022a84848461013a565b6040517f099828de00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063099828de906102a79033908a908a9087908990600401610b11565b600060405180830381600087803b1580156102c157600080fd5b505af11580156102d5573d6000803e3d6000fd5b505050506000848460008181106102ee576102ee610c68565b6020029190910135915050600184141561044657807f73687574646f776e00000000000000000000000000000000000000000000000014156103b1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b86241276040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561039257600080fd5b505af11580156103a6573d6000803e3d6000fd5b505050505050610936565b807f726573756d6500000000000000000000000000000000000000000000000000001415610441577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663046f7da26040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561039257600080fd5b6108d4565b60008585600181811061045b5761045b610c68565b602002919091013591505060028514156105ca57817f75706772616465436f6e66696753746f726500000000000000000000000000001415610527576000546040517f0900f010000000000000000000000000000000000000000000000000000000008152606083901c600482015273ffffffffffffffffffffffffffffffffffffffff90911690630900f010906024015b600060405180830381600087803b15801561050757600080fd5b505af115801561051b573d6000803e3d6000fd5b50505050505050610936565b817f7570677261646554726f6c6c526567697374727900000000000000000000000014156105c5576040517f0900f010000000000000000000000000000000000000000000000000000000008152606082901c60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630900f010906024016104ed565b6108d2565b6000868660028181106105df576105df610c68565b602002919091013591505060038614156107e157827f736574436f6e666967000000000000000000000000000000000000000000000014156106b0576000546040517fd1fd27b3000000000000000000000000000000000000000000000000000000008152600481018490526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063d1fd27b3906044015b600060405180830381600087803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b5050505050505050610936565b827f736574436f6e66696741646472657373000000000000000000000000000000001415610736576000546040517f9db57e1f000000000000000000000000000000000000000000000000000000008152600481018490526024810183905273ffffffffffffffffffffffffffffffffffffffff90911690639db57e1f90604401610675565b827f736574566f74696e674578656375746f7200000000000000000000000000000014156107dc576040517f788ddbcb000000000000000000000000000000000000000000000000000000008152606083901c600482015281151560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063788ddbcb90604401610675565b6108d0565b6000878760038181106107f6576107f6610c68565b602002919091013591505060048714156108ce57837f736574436f6e666967320000000000000000000000000000000000000000000014156108ce576000546040517fdf9321a500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905273ffffffffffffffffffffffffffffffffffffffff9091169063df9321a590606401600060405180830381600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b505050505050505050610936565b505b505b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d6574657273000000000000000000000000000060448201526064016101db565b5050505050565b60008083601f84011261094f57600080fd5b50813567ffffffffffffffff81111561096757600080fd5b6020830191508360208260051b850101111561098257600080fd5b9250929050565b60008060006040848603121561099e57600080fd5b833567ffffffffffffffff8111156109b557600080fd5b6109c18682870161093d565b909790965060209590950135949350505050565b6000806000806000606086880312156109ed57600080fd5b853567ffffffffffffffff80821115610a0557600080fd5b610a1189838a0161093d565b90975095506020880135915080821115610a2a57600080fd5b50610a378882890161093d565b96999598509660400135949350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8581527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008560601b16602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff841115610aef57600080fd5b8360051b80866034850137603492019182019290925260540195945050505050565b60006080820173ffffffffffffffffffffffffffffffffffffffff8816835260206080818501528187835260a08501905060a08860051b86010192508860005b89811015610bfb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6087860301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18c3603018112610bb257600080fd5b8b01803567ffffffffffffffff811115610bcb57600080fd5b8036038d1315610bda57600080fd5b610be78782888501610a49565b965050509183019190830190600101610b51565b50505050604083019490945250606001529392505050565b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610c4c57600080fd5b8260051b80856040850137600092016040019182525092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fe94d8ded78a6b0199aedb225cfa5b9f25efe6b9707a9a73d9dd33d182169f2a64736f6c63430008060033"
}