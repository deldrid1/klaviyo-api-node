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
import { PredictiveAnalytics } from './predictiveAnalytics';
import { ProfileLocation } from './profileLocation';
import { ProfileResponseObjectResourceAttributes } from './profileResponseObjectResourceAttributes';
import { Subscriptions } from './subscriptions';
export class ProfileResponseObjectResourceExtendedAttributes extends ProfileResponseObjectResourceAttributes {
    'subscriptions'?: Subscriptions;
    'predictiveAnalytics'?: PredictiveAnalytics;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Subscriptions"
        },
        {
            "name": "predictiveAnalytics",
            "baseName": "predictive_analytics",
            "type": "PredictiveAnalytics"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProfileResponseObjectResourceExtendedAttributes.attributeTypeMap);
    }
}

