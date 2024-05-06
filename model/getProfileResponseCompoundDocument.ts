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
import { GetProfileResponseCompoundDocumentData } from './getProfileResponseCompoundDocumentData';
import { GetProfileResponseCompoundDocumentIncludedInner } from './getProfileResponseCompoundDocumentIncludedInner';
export class GetProfileResponseCompoundDocument {
    'data': GetProfileResponseCompoundDocumentData;
    'included'?: Array<GetProfileResponseCompoundDocumentIncludedInner>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetProfileResponseCompoundDocumentData"
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

