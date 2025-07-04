# Rekord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [readonly] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**globalHash** | **string** |  | [optional] [default to undefined]
**hashes** | [**RekordHashes**](RekordHashes.md) |  | [optional] [default to undefined]
**workspace** | **string** |  | [default to undefined]
**customer** | **string** |  | [optional] [default to undefined]
**blockchainMeta** | [**RekordBlockchainMeta**](RekordBlockchainMeta.md) |  | [optional] [default to undefined]
**issuedAt** | **string** | Timestamp when the rekord was issued | [default to undefined]
**group** | **string** | Source of the rekord | [optional] [default to undefined]
**description** | **string** | Description of the rekord | [default to undefined]
**originalFileName** | **string** | Original file name if applicable | [optional] [default to undefined]
**payloadType** | **string** | Type of payload (e.g., JSON, PDF) | [default to undefined]
**payload** | **object** | The actual content of the rekord | [optional] [default to undefined]
**file** | **string** | filename associated with this rekord | [optional] [default to undefined]
**rekordStatus** | **string** | Status (e.g., RECORDED, SUBMITTED) | [optional] [default to undefined]

## Example

```typescript
import { Rekord } from './api';

const instance: Rekord = {
    id,
    createdBy,
    globalHash,
    hashes,
    workspace,
    customer,
    blockchainMeta,
    issuedAt,
    group,
    description,
    originalFileName,
    payloadType,
    payload,
    file,
    rekordStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
