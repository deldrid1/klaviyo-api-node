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
import { TagCreateQueryResourceObjectRelationships } from './tagCreateQueryResourceObjectRelationships';
import { TagEnum } from './tagEnum';
import { TagResponseObjectResourceAttributes } from './tagResponseObjectResourceAttributes';
export class TagCreateQueryResourceObject {
    'type': TagEnum | 'tag';
    'attributes': TagResponseObjectResourceAttributes;
    'relationships'?: TagCreateQueryResourceObjectRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TagEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TagResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "TagCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return TagCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace TagCreateQueryResourceObject {
}
