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
import { SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList } from './subscriptionDeleteJobCreateQueryResourceObjectRelationshipsList';
export class SubscriptionDeleteJobCreateQueryResourceObjectRelationships {
    'list'?: SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "list",
            "baseName": "list",
            "type": "SubscriptionDeleteJobCreateQueryResourceObjectRelationshipsList"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionDeleteJobCreateQueryResourceObjectRelationships.attributeTypeMap;
    }
}

