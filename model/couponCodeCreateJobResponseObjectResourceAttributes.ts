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

import { RequestFile } from './models';
import { APIJobErrorPayload } from './aPIJobErrorPayload';
export class CouponCodeCreateJobResponseObjectResourceAttributes {
    /**
    * Status of the asynchronous job.
    */
    'status': CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum | 'cancelled' | 'complete' | 'processing' | 'queued';
    /**
    * The date and time the job was created in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'createdAt': Date;
    /**
    * The total number of operations to be processed by the job. See `completed_count` for the job\'s current progress.
    */
    'totalCount': number;
    /**
    * The total number of operations that have been completed by the job.
    */
    'completedCount'?: number | null = 0;
    /**
    * The total number of operations that have failed as part of the job.
    */
    'failedCount'?: number | null = 0;
    /**
    * Date and time the job was completed in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'completedAt'?: Date | null;
    /**
    * Array of errors encountered during the processing of the job.
    */
    'errors'?: Array<APIJobErrorPayload> | null;
    /**
    * Date and time the job expires in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'expiresAt'?: Date | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "CouponCodeCreateJobResponseObjectResourceAttributes.StatusEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        },
        {
            "name": "completedCount",
            "baseName": "completed_count",
            "type": "number"
        },
        {
            "name": "failedCount",
            "baseName": "failed_count",
            "type": "number"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "Date"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<APIJobErrorPayload>"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CouponCodeCreateJobResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace CouponCodeCreateJobResponseObjectResourceAttributes {
    export enum StatusEnum {
        Cancelled = <any> 'cancelled',
        Complete = <any> 'complete',
        Processing = <any> 'processing',
        Queued = <any> 'queued'
    }
}
