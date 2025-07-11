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
