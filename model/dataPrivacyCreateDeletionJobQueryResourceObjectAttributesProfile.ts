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
import { DataPrivacyProfileQueryResourceObject } from './dataPrivacyProfileQueryResourceObject';
export class DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile {
    'data': DataPrivacyProfileQueryResourceObject;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "DataPrivacyProfileQueryResourceObject"
        }    ];

    static getAttributeTypeMap() {
        return DataPrivacyCreateDeletionJobQueryResourceObjectAttributesProfile.attributeTypeMap;
    }
}

