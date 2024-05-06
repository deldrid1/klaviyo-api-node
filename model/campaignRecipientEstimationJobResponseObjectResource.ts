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
import { CampaignRecipientEstimationJobEnum } from './campaignRecipientEstimationJobEnum';
import { CampaignRecipientEstimationJobResponseObjectResourceAttributes } from './campaignRecipientEstimationJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
export class CampaignRecipientEstimationJobResponseObjectResource {
    'type': CampaignRecipientEstimationJobEnum | 'campaign-recipient-estimation-job';
    /**
    * The ID of the campaign used for estimating recipients
    */
    'id': string;
    'attributes': CampaignRecipientEstimationJobResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignRecipientEstimationJobEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignRecipientEstimationJobResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CampaignRecipientEstimationJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace CampaignRecipientEstimationJobResponseObjectResource {
}
