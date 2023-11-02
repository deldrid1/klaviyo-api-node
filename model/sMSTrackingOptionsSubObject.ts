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
import { UTMParamsSubObject } from './uTMParamsSubObject';

export class SMSTrackingOptionsSubObject {
    /**
    * Whether the campaign needs UTM parameters. If set to False, UTM params will not be used.
    */
    'isAddUtm'?: boolean;
    /**
    * A list of UTM parameters. If an empty list is given and is_add_utm is True, uses company defaults.
    */
    'utmParams'?: Array<UTMParamsSubObject>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isAddUtm",
            "baseName": "is_add_utm",
            "type": "boolean"
        },
        {
            "name": "utmParams",
            "baseName": "utm_params",
            "type": "Array<UTMParamsSubObject>"
        }    ];

    static getAttributeTypeMap() {
        return SMSTrackingOptionsSubObject.attributeTypeMap;
    }
}

