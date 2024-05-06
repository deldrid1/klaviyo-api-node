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
import { ValuesData } from './valuesData';
export class PostFlowValuesResponseDTODataAttributes {
    /**
    * An array of all the returned values data. Each object in the array represents one unique grouping and the results for that grouping.
    */
    'results': Array<ValuesData>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ValuesData>"
        }    ];

    static getAttributeTypeMap() {
        return PostFlowValuesResponseDTODataAttributes.attributeTypeMap;
    }
}

