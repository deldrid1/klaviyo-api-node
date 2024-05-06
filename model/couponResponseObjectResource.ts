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
import { CouponEnum } from './couponEnum';
import { CouponResponseObjectResourceAttributes } from './couponResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
export class CouponResponseObjectResource {
    'type': CouponEnum | 'coupon';
    /**
    * The internal id of a Coupon is equivalent to its external id stored within an integration.
    */
    'id': string;
    'attributes': CouponResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CouponEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CouponResponseObjectResource.attributeTypeMap;
    }
}

export namespace CouponResponseObjectResource {
}
