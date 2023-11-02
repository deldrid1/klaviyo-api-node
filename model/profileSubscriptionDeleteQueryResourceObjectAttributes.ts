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

export class ProfileSubscriptionDeleteQueryResourceObjectAttributes {
    /**
    * The email address to unsubscribe.
    */
    'email'?: string;
    /**
    * The phone number to unsubscribe.
    */
    'phoneNumber'?: string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProfileSubscriptionDeleteQueryResourceObjectAttributes.attributeTypeMap;
    }
}

