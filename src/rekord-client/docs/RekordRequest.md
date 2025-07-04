# RekordRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **object** | The actual content of the rekord | [default to undefined]
**issuedAt** | **string** | Timestamp when the rekord was issued | [default to undefined]
**group** | **string** | Source/Group of the rekord | [optional] [default to undefined]
**workspace** | **string** | Rekord workspace | [optional] [default to undefined]
**description** | **string** | Description of the rekord | [default to undefined]
**originalFileName** | **string** | Original file name if applicable | [optional] [default to undefined]
**payloadType** | **string** | Type of payload (e.g., JSON, FILE) | [default to undefined]
**file** | **string** | file key returned by the upload-url endpoint | [optional] [default to undefined]

## Example

```typescript
import { RekordRequest } from './api';

const instance: RekordRequest = {
    payload,
    issuedAt,
    group,
    workspace,
    description,
    originalFileName,
    payloadType,
    file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
