import { Configuration, DefaultApi, Rekord, RekordRequest } from "./rekord-client";
import { BASE_PATH } from "./rekord-client/base";
import globalAxios, { AxiosInstance, AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { randomUUID } from "crypto";

export class ExtendedDefaultApi extends DefaultApi {
    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios)  {
        super(configuration, basePath, axios);
    }

    public async createRekordFile(rekordRequest: RekordRequest, contentType: string, fileBytes: ArrayBuffer): Promise<AxiosResponse<Rekord, any>> {        
        const urlResponse = await this.createPayloadURL({
            key: randomUUID(),
            workspace: rekordRequest.workspace ?? "",
            contentType: contentType ?? ""
        });

        await this.uploadFileToS3(urlResponse.data.url, contentType, fileBytes);

        rekordRequest.file = urlResponse.data.key
        return this.createRekord(rekordRequest);
    }

    private async uploadFileToS3(preSignedUrl: string, contentType: string, data: ArrayBuffer): Promise<void> {
        try {
            const response = await fetch(preSignedUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': contentType
                },
                body: new Uint8Array(data), // Convert ArrayBuffer to Uint8Array for the Body
            });

            if (!response.ok) {
                // If the response is not OK (e.g., 403 Forbidden, 400 Bad Request)
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            }
        } catch (error: any) {
            console.error("Error uploading file to S3 via pre-signed URL:", error);
            throw error; // Re-throw to be caught by the caller
        }
    }
}