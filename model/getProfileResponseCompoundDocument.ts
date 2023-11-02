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
import { GetProfileResponseCompoundDocumentIncludedInner } from './getProfileResponseCompoundDocumentIncludedInner';
import { GetProfileResponseData } from './getProfileResponseData';

export class GetProfileResponseCompoundDocument {
    'data': GetProfileResponseData;
    'included'?: Array<GetProfileResponseCompoundDocumentIncludedInner>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetProfileResponseData"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GetProfileResponseCompoundDocumentIncludedInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetProfileResponseCompoundDocument.attributeTypeMap;
    }
}

