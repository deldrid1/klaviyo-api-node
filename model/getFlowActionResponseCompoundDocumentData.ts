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
import { FlowActionEnum } from './flowActionEnum';
import { FlowActionResponseObjectResource } from './flowActionResponseObjectResource';
import { FlowActionResponseObjectResourceAttributes } from './flowActionResponseObjectResourceAttributes';
import { GetFlowActionResponseCompoundDocumentDataAllOfRelationships } from './getFlowActionResponseCompoundDocumentDataAllOfRelationships';
import { ObjectLinks } from './objectLinks';
export class GetFlowActionResponseCompoundDocumentData extends FlowActionResponseObjectResource {
    'relationships'?: GetFlowActionResponseCompoundDocumentDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetFlowActionResponseCompoundDocumentDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetFlowActionResponseCompoundDocumentData.attributeTypeMap);
    }
}

export namespace GetFlowActionResponseCompoundDocumentData {
}
