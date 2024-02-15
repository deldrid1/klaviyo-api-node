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
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsLists';
import { GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments } from './getProfileResponseCompoundDocumentDataAllOfRelationshipsSegments';

export class GetProfileResponseCompoundDocumentDataAllOfRelationships {
    'lists'?: GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists;
    'segments'?: GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lists",
            "baseName": "lists",
            "type": "GetProfileResponseCompoundDocumentDataAllOfRelationshipsLists"
        },
        {
            "name": "segments",
            "baseName": "segments",
            "type": "GetProfileResponseCompoundDocumentDataAllOfRelationshipsSegments"
        }    ];

    static getAttributeTypeMap() {
        return GetProfileResponseCompoundDocumentDataAllOfRelationships.attributeTypeMap;
    }
}

