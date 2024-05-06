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
import { ProfileEnum } from './profileEnum';
export class ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner {
    'type': ProfileEnum | 'profile';
    /**
    * The ID of a source profile to merge into the destination profile
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner.attributeTypeMap;
    }
}

export namespace ProfileMergeQueryResourceObjectRelationshipsProfilesDataInner {
}
