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
import { CollectionLinks } from './collectionLinks';
import { GetCampaignResponseCollectionCompoundDocumentDataInner } from './getCampaignResponseCollectionCompoundDocumentDataInner';
import { GetCampaignResponseCollectionCompoundDocumentIncludedInner } from './getCampaignResponseCollectionCompoundDocumentIncludedInner';
export class GetCampaignResponseCollectionCompoundDocument {
    'data': Array<GetCampaignResponseCollectionCompoundDocumentDataInner>;
    'links': CollectionLinks;
    'included'?: Array<GetCampaignResponseCollectionCompoundDocumentIncludedInner>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetCampaignResponseCollectionCompoundDocumentDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<GetCampaignResponseCollectionCompoundDocumentIncludedInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetCampaignResponseCollectionCompoundDocument.attributeTypeMap;
    }
}

