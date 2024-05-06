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
import { EventCreateQueryV2ResourceObjectAttributes } from './eventCreateQueryV2ResourceObjectAttributes';
import { EventEnum } from './eventEnum';
export class EventCreateQueryV2ResourceObject {
    'type': EventEnum | 'event';
    'attributes': EventCreateQueryV2ResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EventEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "EventCreateQueryV2ResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return EventCreateQueryV2ResourceObject.attributeTypeMap;
    }
}

export namespace EventCreateQueryV2ResourceObject {
}
