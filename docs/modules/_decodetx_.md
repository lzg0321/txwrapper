[@amaurymartiny/txwrapper](../README.md) › [Globals](../globals.md) › ["decodeTx"](_decodetx_.md)

# External module: "decodeTx"

## Index

### Functions

* [decodeTx](_decodetx_.md#decodetx)

## Functions

###  decodeTx

▸ **decodeTx**(`signedTx`: string, `metadataRpc`: string): *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*

*Defined in [decodeTx.ts:17](https://github.com/amaurymartiny/polkadotjs-wrapper/blob/07b7ece/src/decodeTx.ts#L17)*

Parse the transaction information from an unsigned and signed transaction
offline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signedTx` | string | - |
`metadataRpc` | string | The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC call `state_getMetadata`  |

**Returns:** *Partial‹[TxInfo](../interfaces/_balancetransfer_.txinfo.md)›*