# Rekord API C# SDK

This SDK provides a convenient and strongly-typed way to interact with the Rekord API from your applications. Available as a npm package, it simplifies the process of integrating Rekord's functionalities.

To get started, you'll need to initialize the `RekordApiClient`.

```typescript
 const client = new RekordApiClient({ 
    basePath: "url", 
    accessToken: "eyJraWQiOiJ..."});
```

## Methods

### listRekords Method
Retrieves a paginated list of Rekords, with optional filtering by group and workspace. Each Rekord represents a unique record with associated metadata, hashes, and blockchain details.

Parameters:
* page (string, optional): The page number to retrieve. Defaults to 1.
* limit (string, optional): The number of items per page. Defaults to 10.
* group (string, optional): Filters Rekords by their associated group name.
* workspace (string, optional): Filters Rekords by their workspace ID.

Returns:
A promise representing the asynchronous operation, which resolves to a PaginatedRekordResponse. This response object includes a collection of Rekord items for the current page, along with pagination metadata like total items, page number, limit, and totalPages.

### getRekord Method
Retrieves a single Rekord by its unique identifier.

Parameters:
* id (string): The unique ID of the Rekord you want to retrieve.

Returns:
A promise representing the asynchronous operation, which resolves to the Rekord object matching the provided ID.

### getRekordMeta Method
Retrieves the metadata of a specific Rekord by its unique identifier. This method returns a full Rekord object, where the metadata properties are populated.

Parameters:
* id (string): The unique ID of the Rekord whose metadata you want to retrieve.

Returns:
A promise representing the asynchronous operation, which resolves to a RekordMeta object containing the metadata for the specified ID.

## createRekord Method
Creates a new Rekord by submitting its content and associated metadata to the Rekord API.

Parameters:
* body (RekordRequest): An object containing the details for the new Rekord.

Return:
The newly created Rekord object upon successful creation.

RekordRequest Class
Defines the structure of the request body used to create a new Rekord.
Properties:

* Payload (object): The actual content of the Rekord (can be any serializable object).
* IssuedAt (DateTimeOffset): The timestamp when the Rekord was issued.
* Group (string, optional): The source or group to which the Rekord belongs (3-50 chars, alphanumeric, space, hyphen, underscore).
* Workspace (Guid, optional): The unique identifier of the workspace.
* Description (string): A concise description of the Rekord (3-50 chars).
* OriginalFileName (string, optional): The original file name if applicable (max 255 chars).
* PayloadType (RekordRequestPayloadType): Specifies the type of content within the payload (e.g., JSON, FILE).
* File (string, optional): If PayloadType is FILE, this is the file key from the upload-URL endpoint.

## createPayloadURL Method
Generates a signed URL for uploading a file to S3, enabling secure direct uploads.

Parameters:
* body (Body): An object containing details necessary to generate the signed URL, such as the desired file key, content type, and workspace ID.
Returns:
A promise representing the asynchronous operation, which resolves to a CreatePayloadURL201Response object containing the signed URL and potentially other upload-related information.


Body Class
Defines the structure of the request body used to obtain a signed URL for file uploads.
Properties:
* Key (string): The desired key (path/filename) for the file in S3. This is always required.
* ContentType (string, optional): The MIME type of the file being uploaded (e.g., application/pdf, image/jpeg).
* Workspace (string): The ID of the workspace where the file will be associated. This is always required.

## getPayloadURL Method
Retrieves a signed URL for accessing a file previously uploaded to an S3 bucket, identified by its Rekord ID.

Parameters:
* id (string): The unique ID of the Rekord associated with the file you want to retrieve.
Returns:
A promise representing the asynchronous operation, which resolves to a GetPayloadURL200Response object containing the signed URL to the file in the S3 bucket.

## listWorkspaces Method
Retrieves a paginated list of all available workspaces.

Parameters:
* page (string, optional): The page number to retrieve (defaults to 1).
* limit (string, optional): The number of items per page (defaults to 10).

Returns:
A promise representing the asynchronous operation, which resolves to a PaginatedWorkspaceResponse containing the requested workspaces and pagination metadata.

## getWorkspace Method
Retrieves a single workspace by its unique identifier.

Parameters:
* id (string): The unique ID of the workspace you want to retrieve.

Returns:
A promise representing the asynchronous operation, which resolves to the Workspace object matching the provided ID.

## createWorkspace Method
This asynchronous method is designed to create a new workspace. It takes a WorkspaceRequest as input, detailing the workspace's properties. Upon successful creation, it returns the new Workspace object. Be aware it can throw an ApiException for server-side errors.

WorkspaceRequest Details
This defines the data needed to create a workspace:
* Name: The required name for the workspace (cannot be empty).
* Blockchain: An optional blockchain code to associate with the workspace.

## deleteWorkspace Method
This asynchronous method handles the deletion of a workspace. You provide the ID of the workspace you want to remove, and the method initiates its deletion.

## updateWorkspace Method
This asynchronous method handles the update of a workspace. You provide the ID of the workspace you want to update. 

Paramters: 
* Name: name for the workspace
* Blockchain: the blockchain code associated with the workspace