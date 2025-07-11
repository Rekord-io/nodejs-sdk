export * from "./rekord-client";

import { ExtendedDefaultApi } from "./ExtendedDefaultApi";
import { Configuration, ConfigurationParameters, DefaultApi, RekordPayloadTypeEnum, RekordRequest } from "./rekord-client";
import axios, {    
    AxiosError,
    InternalAxiosRequestConfig 
} from 'axios';

import * as fs from 'fs';

export class RekordApiClient {
    public readonly api: ExtendedDefaultApi;

    constructor(config: ConfigurationParameters = {}) {
        const configuration = new Configuration({
            accessToken: config.accessToken,
            basePath: config.basePath
        });

        // Create an Axios instance 
        const customAxiosInstance = axios.create();

        // Add a request interceptor to the custom Axios instance
        customAxiosInstance.interceptors.request.use(
            (requestConfig: InternalAxiosRequestConfig) => {
                if (config.accessToken) {
                    
                    requestConfig.headers['Authorization'] = `Bearer ${config.accessToken}`;
                }
            
                return requestConfig;
            },
            (error) => {
                console.error("Request Error (Interceptor):", error);
                return Promise.reject(error);
            }
        );

        customAxiosInstance.interceptors.response.use(
            // The first function handles successful responses (2xx)
            (response) => response, // Just pass it through
            
            // The second function handles errors
            (error: AxiosError) => {
                const customError = {
                message: "An error occurred while communicating with the Rekord API.",
                status: error.response?.status,
                responseData: error.response?.data,
                requestUrl: error.config?.url,
                requestMethod: error.config?.method,
                originalError: error,
                };
                
                // Log it for debugging if you want
                console.error("[SDK Error Interceptor]", customError);
                
                // Reject with the structured custom error so the user can catch it
                return Promise.reject(customError);
            }
        );

        // Pass the custom Axios instance to the DefaultApi constructor
        this.api = new ExtendedDefaultApi(configuration, config.basePath, customAxiosInstance);        
    }   
}


async function main() { 
    const client = new RekordApiClient({ 
        basePath: "https://btdryd5731.execute-api.eu-west-1.amazonaws.com/rekord-web-application-sto-api-gw-stage", 
        accessToken: "eyJraWQiOiJGKzBKZHgzUldBVDRqSkRoSjVTRWRUYnJPOThrS0RhUWQ1UHg0N0pBekhBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyMjg1YzQ1NC02MDQxLTcwNGUtMGUzMS1hOGIxNzM4MjQ2NTEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfYUtzWnJISEN4IiwiY29nbml0bzp1c2VybmFtZSI6IjIyODVjNDU0LTYwNDEtNzA0ZS0wZTMxLWE4YjE3MzgyNDY1MSIsIm9yaWdpbl9qdGkiOiI1MzMzZTJhZi0yOGQ5LTQ3ZGYtYTU2ZC1iZGVhZmJmZTEyZWMiLCJhdWQiOiIzaWV1MjJ0cTE5YTc4aG1vaWo5b2xuMDFrOCIsImV2ZW50X2lkIjoiYTc1YjJjMTMtYzRlMi00ZjIxLWFlNWUtODE3NTZlNGU4YzZjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NTIyMTk3NTMsImV4cCI6MTc1MjIyMzM1MywiaWF0IjoxNzUyMjE5NzUzLCJqdGkiOiJjZWM1M2MyZS1iOGRkLTRkZTMtYjMwYy1lYzYyNDBkM2Q5MjEiLCJlbWFpbCI6InNlY25pdG9tQHJla29yZC5pbyJ9.R4ns4zx95RYwZ61v5eHrzYtW70tjDs95yOZs2gRQmTXa9vMZ_7TVeSRAiy-nHfVok7GAApNQaPs3FEussbaFARK_9o2RIBYREgOLFHPi8e5idY5ZtHVIeM2CEWOhY1Kcb4bG-VpIWaHULADJg-tokPoPogqzFBXrT8Xvzg984xY9qtZWvYloYnXfB7C8qNsBa0rEcIorKD-Wz2kkbr68Ri74Qd1kSu8oRHE02kANyt_kg_FmikBvZQWTY7_hX4hZYsXpWX-Lt0QDgyXTWpdAhFc-8eVXE2GjIk_aaTXJhPSCu6gPvljrCF8rDE3h0wWEguFt7F51aZnbfl-Qwurghg"
    });

    try {
        const fileData = await readFileToArrayBuffer("C:\\Transactions\\dummy.pdf");
        const contentType = "application/pdf";
        const req : RekordRequest = {
            description: "Test",
            issuedAt: (new Date).toISOString(),
            group: "test",
            originalFileName: "dummy.pdf",
            workspace: "f413ebab-ee00-4fb9-ac5f-bc0012d710fd",
            payload: { test: "123" },
            payloadType: RekordPayloadTypeEnum.File
        }
        const rek = await client.api.createRekordFile(req, contentType, fileData);
        console.log(rek.data.id);

    } catch (error: any) {
        // More robust error handling
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("API Error - Status:", error.response.status);
            console.error("API Error - Data:", JSON.stringify(error.response.data, null, 2));
            console.error("API Error - Headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("API Error - No response received:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("API Error - Request setup:", error.message);
        }
        console.error("Full Error Object:", error);
    }
}


function readFileToArrayBuffer(filePath: string): Promise<ArrayBuffer> {
    return new Promise((resolve) => {
        fs.readFile(filePath, (err, data) => {
            resolve(data.buffer);
        });
    });
}


main(); 

