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
import { GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner } from './getFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner';
export class GetFlowFlowActionRelationshipListResponseCollection {
    'data': Array<GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetFlowResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsFlowActionsDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return GetFlowFlowActionRelationshipListResponseCollection.attributeTypeMap;
    }
}

