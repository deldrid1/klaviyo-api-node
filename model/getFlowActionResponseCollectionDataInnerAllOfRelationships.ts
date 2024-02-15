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
import { GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';

export class GetFlowActionResponseCollectionDataInnerAllOfRelationships {
    'flow'?: GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile;
    'flowMessages'?: GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flow",
            "baseName": "flow",
            "type": "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile"
        },
        {
            "name": "flowMessages",
            "baseName": "flow-messages",
            "type": "GetCouponCodeResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile"
        }    ];

    static getAttributeTypeMap() {
        return GetFlowActionResponseCollectionDataInnerAllOfRelationships.attributeTypeMap;
    }
}

