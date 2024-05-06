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
import { TagEnum } from './tagEnum';
export class GetTagGroupTagRelationshipsResponseCollectionDataInner {
    'type': TagEnum | 'tag';
    /**
    * The IDs of the Tags that are associated with the Tag Group
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TagEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetTagGroupTagRelationshipsResponseCollectionDataInner.attributeTypeMap;
    }
}

export namespace GetTagGroupTagRelationshipsResponseCollectionDataInner {
}
