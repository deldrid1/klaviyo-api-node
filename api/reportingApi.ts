/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


const axios = require('axios');
import {AxiosRequestConfig, AxiosResponse} from "axios";
import { backOff, BackoffOptions } from 'exponential-backoff';
import FormData from 'form-data'

/* tslint:disable:no-unused-locals */
import { CampaignValuesRequestDTO } from '../model/campaignValuesRequestDTO';
import { FlowSeriesRequestDTO } from '../model/flowSeriesRequestDTO';
import { FlowValuesRequestDTO } from '../model/flowValuesRequestDTO';
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { PostCampaignValuesResponseDTO } from '../model/postCampaignValuesResponseDTO';
import { PostFlowSeriesResponseDTO } from '../model/postFlowSeriesResponseDTO';
import { PostFlowValuesResponseDTO } from '../model/postFlowValuesResponseDTO';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryOptions, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class ReportingApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options
    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        revision: "2024-02-15",
        "User-Agent": "klaviyo-api-node/8.0.0"
    };
    protected _useQuerystring : boolean = false;

    constructor(session: Session){
        this.session = session
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    /**
     * Returns the requested campaign analytics values data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `campaigns:read`
     * @summary Query Campaign Values
     * @param campaignValuesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination
     */
    public async queryCampaignValues (campaignValuesRequestDTO: CampaignValuesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostCampaignValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/campaign-values-reports/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'campaignValuesRequestDTO' is not null or undefined
        if (campaignValuesRequestDTO === null || campaignValuesRequestDTO === undefined) {
            throw new Error('Required parameter campaignValuesRequestDTO was null or undefined when calling queryCampaignValues.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(campaignValuesRequestDTO, "CampaignValuesRequestDTO")
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body: PostCampaignValuesResponseDTO;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: PostCampaignValuesResponseDTO;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "PostCampaignValuesResponseDTO");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
    /**
     * Returns the requested flow analytics series data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `flows:read`
     * @summary Query Flow Series
     * @param flowSeriesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination
     */
    public async queryFlowSeries (flowSeriesRequestDTO: FlowSeriesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostFlowSeriesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/flow-series-reports/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flowSeriesRequestDTO' is not null or undefined
        if (flowSeriesRequestDTO === null || flowSeriesRequestDTO === undefined) {
            throw new Error('Required parameter flowSeriesRequestDTO was null or undefined when calling queryFlowSeries.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(flowSeriesRequestDTO, "FlowSeriesRequestDTO")
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body: PostFlowSeriesResponseDTO;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: PostFlowSeriesResponseDTO;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "PostFlowSeriesResponseDTO");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
    /**
     * Returns the requested flow analytics values data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `flows:read`
     * @summary Query Flow Values
     * @param flowValuesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-02-15/reference/api-overview#pagination
     */
    public async queryFlowValues (flowValuesRequestDTO: FlowValuesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostFlowValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/flow-values-reports/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flowValuesRequestDTO' is not null or undefined
        if (flowValuesRequestDTO === null || flowValuesRequestDTO === undefined) {
            throw new Error('Required parameter flowValuesRequestDTO was null or undefined when calling queryFlowValues.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(flowValuesRequestDTO, "FlowValuesRequestDTO")
        }

        this.session.applyToRequest(config)

        return backOff<{ response: AxiosResponse; body: PostFlowValuesResponseDTO;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: PostFlowValuesResponseDTO;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "PostFlowValuesResponseDTO");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.session.getRetryOptions());
    }
}
