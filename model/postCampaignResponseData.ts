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
import { CampaignEnum } from './campaignEnum';
import { CampaignResponseObjectResourceAttributes } from './campaignResponseObjectResourceAttributes';
import { GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
export class PostCampaignResponseData {
    'type': CampaignEnum | 'campaign';
    /**
    * The campaign ID
    */
    'id': string;
    'attributes': CampaignResponseObjectResourceAttributes;
    'relationships'?: GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCampaignResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCampaignResponseData.attributeTypeMap;
    }
}

export namespace PostCampaignResponseData {
}
