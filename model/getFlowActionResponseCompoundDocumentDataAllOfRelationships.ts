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
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages } from './getFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages';
export class GetFlowActionResponseCompoundDocumentDataAllOfRelationships {
    'flow'?: GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow;
    'flowMessages'?: GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flow",
            "baseName": "flow",
            "type": "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlow"
        },
        {
            "name": "flowMessages",
            "baseName": "flow-messages",
            "type": "GetFlowActionResponseCompoundDocumentDataAllOfRelationshipsFlowMessages"
        }    ];

    static getAttributeTypeMap() {
        return GetFlowActionResponseCompoundDocumentDataAllOfRelationships.attributeTypeMap;
    }
}

