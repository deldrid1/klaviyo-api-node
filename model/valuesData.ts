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

export class ValuesData {
    /**
    * Applied groupings and the values for this object
    */
    'groupings': object;
    /**
    * Requested statistics and their values results
    */
    'statistics': object;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groupings",
            "baseName": "groupings",
            "type": "object"
        },
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ValuesData.attributeTypeMap;
    }
}

