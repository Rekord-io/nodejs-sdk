# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPayloadURL**](#createpayloadurl) | **POST** /rekord/payload-url | |
|[**createRekord**](#createrekord) | **POST** /rekord | |
|[**createWorkspace**](#createworkspace) | **POST** /workspace | Creates a workspace|
|[**deleteWorkspace**](#deleteworkspace) | **DELETE** /workspace/{id} | Deletes a workspace|
|[**getPayloadURL**](#getpayloadurl) | **GET** /rekord/{id}/payload-url | |
|[**getRekord**](#getrekord) | **GET** /rekord/{id} | |
|[**getRekordMeta**](#getrekordmeta) | **GET** /rekord/{id}/meta | |
|[**getWorkspace**](#getworkspace) | **GET** /workspace/{id} | |
|[**listRekords**](#listrekords) | **GET** /rekord | |
|[**listWorkspaces**](#listworkspaces) | **GET** /workspace | |
|[**updateRekord**](#updaterekord) | **PUT** /rekord | |
|[**updateWorkspace**](#updateworkspace) | **PUT** /workspace/{id} | Updates a workspace|

# **createPayloadURL**
> CreatePayloadURL201Response createPayloadURL(createPayloadURLRequest)



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreatePayloadURLRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createPayloadURLRequest: CreatePayloadURLRequest; //

const { status, data } = await apiInstance.createPayloadURL(
    createPayloadURLRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPayloadURLRequest** | **CreatePayloadURLRequest**|  | |


### Return type

**CreatePayloadURL201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Url successfully created |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRekord**
> Rekord createRekord(rekordRequest)



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RekordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let rekordRequest: RekordRequest; //

const { status, data } = await apiInstance.createRekord(
    rekordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rekordRequest** | **RekordRequest**|  | |


### Return type

**Rekord**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Rekord successfully created |  -  |
|**400** | Bad Request - Invalid payloadType value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkspace**
> Workspace createWorkspace(workspaceRequest)



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkspaceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workspaceRequest: WorkspaceRequest; //

const { status, data } = await apiInstance.createWorkspace(
    workspaceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workspaceRequest** | **WorkspaceRequest**|  | |


### Return type

**Workspace**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Workspace successfully created |  -  |
|**400** | Bad Request - already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorkspace**
> deleteWorkspace()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //ID of the workspace to be deleted (default to undefined)

const { status, data } = await apiInstance.deleteWorkspace(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the workspace to be deleted | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Workspace deleted (No Content) |  -  |
|**403** | Operation not allowed |  -  |
|**404** | Workspace not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayloadURL**
> GetPayloadURL200Response getPayloadURL()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getPayloadURL(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetPayloadURL200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRekord**
> Rekord getRekord()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //ID of the rekord (default to undefined)

const { status, data } = await apiInstance.getRekord(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the rekord | defaults to undefined|


### Return type

**Rekord**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rekord by ID |  -  |
|**404** | Rekord not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRekordMeta**
> RekordMeta getRekordMeta()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //ID of the rekord (default to undefined)

const { status, data } = await apiInstance.getRekordMeta(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the rekord | defaults to undefined|


### Return type

**RekordMeta**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metadata of a rekord by ID |  -  |
|**404** | Rekord not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkspace**
> Workspace getWorkspace()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //ID of the workspace (default to undefined)

const { status, data } = await apiInstance.getWorkspace(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the workspace | defaults to undefined|


### Return type

**Workspace**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workspace found |  -  |
|**404** | Workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRekords**
> PaginatedRekordResponse listRekords()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: string; //Page number (default 1) (optional) (default to undefined)
let limit: string; //Page size (default 10) (optional) (default to undefined)
let group: string; //group name (optional) (default to undefined)
let workspace: string; //workspace id (optional) (default to undefined)

const { status, data } = await apiInstance.listRekords(
    page,
    limit,
    group,
    workspace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**string**] | Page number (default 1) | (optional) defaults to undefined|
| **limit** | [**string**] | Page size (default 10) | (optional) defaults to undefined|
| **group** | [**string**] | group name | (optional) defaults to undefined|
| **workspace** | [**string**] | workspace id | (optional) defaults to undefined|


### Return type

**PaginatedRekordResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All rekords |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkspaces**
> PaginatedWorkspaceResponse listWorkspaces()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: string; //Page number (default 1) (optional) (default to undefined)
let limit: string; //Page size (default 10) (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkspaces(
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**string**] | Page number (default 1) | (optional) defaults to undefined|
| **limit** | [**string**] | Page size (default 10) | (optional) defaults to undefined|


### Return type

**PaginatedWorkspaceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All workspaces |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRekord**
> updateRekord()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.updateRekord();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Forbidden - this is not intended for public use |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorkspace**
> Workspace updateWorkspace(workspaceRequest)



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkspaceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //ID of the workspace to be updated (default to undefined)
let workspaceRequest: WorkspaceRequest; //

const { status, data } = await apiInstance.updateWorkspace(
    id,
    workspaceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workspaceRequest** | **WorkspaceRequest**|  | |
| **id** | [**string**] | ID of the workspace to be updated | defaults to undefined|


### Return type

**Workspace**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Workspace updated |  -  |
|**403** | Operation not allowed |  -  |
|**404** | Workspace not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

