import { Configuration, ConfigurationParameters, DefaultApi, RekordPayloadTypeEnum } from "./rekord-output";
import axios, {    
    InternalAxiosRequestConfig 
} from 'axios';

export class RekordApiClient {
    public readonly api: DefaultApi;

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

        // Pass the custom Axios instance to the DefaultApi constructor
        this.api = new DefaultApi(configuration, config.basePath, customAxiosInstance);
    }
}

