# BlockchainMeta

Contains bc metadata associated with the rekord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **string** | ID of the transaction | [default to undefined]
**transactionTs** | **string** | Timestamp of the transaction | [default to undefined]
**merklePath** | **string** | Last merkle path | [optional] [default to undefined]

## Example

```typescript
import { BlockchainMeta } from './api';

const instance: BlockchainMeta = {
    transactionId,
    transactionTs,
    merklePath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
