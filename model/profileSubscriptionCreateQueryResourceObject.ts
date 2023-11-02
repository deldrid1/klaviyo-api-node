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
import { ProfileSubscriptionCreateQueryResourceObjectAttributes } from './profileSubscriptionCreateQueryResourceObjectAttributes';

export class ProfileSubscriptionCreateQueryResourceObject {
    'type': ProfileEnum | 'profile';
    /**
    * The ID of the profile to subscribe. If provided, this will be used to perform the lookup.
    */
    'id'?: string;
    'attributes': ProfileSubscriptionCreateQueryResourceObjectAttributes;


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
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "ProfileSubscriptionCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return ProfileSubscriptionCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ProfileSubscriptionCreateQueryResourceObject {
}
