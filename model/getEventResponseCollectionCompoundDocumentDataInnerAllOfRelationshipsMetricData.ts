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
import { MetricEnum } from './metricEnum';
export class GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData {
    'type': MetricEnum | 'metric';
    /**
    * The Metric ID
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "MetricEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData.attributeTypeMap;
    }
}

export namespace GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetricData {
}
