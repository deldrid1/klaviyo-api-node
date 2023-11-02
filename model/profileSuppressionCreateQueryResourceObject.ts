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
import { ProfileSuppressionCreateQueryResourceObjectAttributes } from './profileSuppressionCreateQueryResourceObjectAttributes';

export class ProfileSuppressionCreateQueryResourceObject {
    'type': ProfileEnum | 'profile';
    'attributes': ProfileSuppressionCreateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ProfileSuppressionCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return ProfileSuppressionCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ProfileSuppressionCreateQueryResourceObject {
}
