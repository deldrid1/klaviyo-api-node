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
import { CampaignMessageCreateQueryResourceObjectAttributes } from './campaignMessageCreateQueryResourceObjectAttributes';
import { CampaignMessageEnum } from './campaignMessageEnum';
export class CampaignMessageCreateQueryResourceObject {
    'type': CampaignMessageEnum | 'campaign-message';
    'attributes': CampaignMessageCreateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignMessageEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignMessageCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CampaignMessageCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CampaignMessageCreateQueryResourceObject {
}
