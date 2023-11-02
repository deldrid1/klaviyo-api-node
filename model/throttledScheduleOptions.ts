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

export class ThrottledScheduleOptions {
    /**
    * The time to send at
    */
    'datetime': Date;
    /**
    * The percentage of recipients per hour to send to. Allowed values: [10, 11, 13, 14, 17, 20, 25, 33, 50]
    */
    'throttlePercentage': number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "datetime",
            "baseName": "datetime",
            "type": "Date"
        },
        {
            "name": "throttlePercentage",
            "baseName": "throttle_percentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ThrottledScheduleOptions.attributeTypeMap;
    }
}

