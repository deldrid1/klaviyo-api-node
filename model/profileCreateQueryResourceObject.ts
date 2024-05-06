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
import { ProfileCreateQueryResourceObjectAttributes } from './profileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
export class ProfileCreateQueryResourceObject {
    'type': ProfileEnum | 'profile';
    'attributes': ProfileCreateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ProfileCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return ProfileCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ProfileCreateQueryResourceObject {
}
