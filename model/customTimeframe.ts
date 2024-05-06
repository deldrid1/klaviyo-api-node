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
export class CustomTimeframe {
    'start': Date;
    'end': Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "Date"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return CustomTimeframe.attributeTypeMap;
    }
}

